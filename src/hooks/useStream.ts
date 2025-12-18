import { useState, useCallback, useEffect, useRef } from 'react';

interface UseStreamOptions {
  onMessage?: (content: string) => void;
  onError?: (error: Error) => void;
  onComplete?: () => void;
}

interface UseStreamReturn {
  content: string;
  isStreaming: boolean;
  error: Error | null;
  start: (url: string, body: Record<string, unknown>) => void;
  stop: () => void;
  reset: () => void;
}

/**
 * SSE 流式请求 Hook - 用于 LLM 流式输出
 */
export function useStream(options: UseStreamOptions = {}): UseStreamReturn {
  const { onMessage, onError, onComplete } = options;

  const [content, setContent] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);
  const readerRef = useRef<ReadableStreamDefaultReader<Uint8Array> | null>(null);

  const stop = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (readerRef.current) {
      readerRef.current.cancel();
      readerRef.current = null;
    }
    setIsStreaming(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setContent('');
    setError(null);
  }, [stop]);

  const start = useCallback(
    async (url: string, body: Record<string, unknown>) => {
      reset();
      setIsStreaming(true);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error('Response body is not readable');
        }

        readerRef.current = reader;
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            onComplete?.();
            break;
          }

          buffer += decoder.decode(value, { stream: true });

          // 处理 SSE 格式
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') {
                onComplete?.();
                break;
              }
              try {
                const parsed = JSON.parse(data);
                const text = parsed.choices?.[0]?.delta?.content || '';
                if (text) {
                  setContent((prev) => prev + text);
                  onMessage?.(text);
                }
              } catch {
                // 非 JSON 格式，直接使用
                setContent((prev) => prev + data);
                onMessage?.(data);
              }
            }
          }
        }
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err);
          onError?.(err);
        }
      } finally {
        setIsStreaming(false);
        abortControllerRef.current = null;
        readerRef.current = null;
      }
    },
    [reset, onMessage, onError, onComplete],
  );

  // 清理
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return {
    content,
    isStreaming,
    error,
    start,
    stop,
    reset,
  };
}
