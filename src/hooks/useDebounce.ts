import { useCallback, useEffect, useRef, useState } from 'react';

interface UseDebounceOptions {
  delay?: number;
  leading?: boolean;
}

export function useDebounce<T>(value: T, options: UseDebounceOptions = {}): T {
  const { delay = 300, leading = false } = options;
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (leading && isFirstRender.current) {
      isFirstRender.current = false;
      setDebouncedValue(value);
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, leading]);

  return debouncedValue;
}

export function useDebouncedCallback<T extends (...args: Parameters<T>) => ReturnType<T>>(
  callback: T,
  delay = 300,
): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

/**
 * 节流 Hook
 */
export function useThrottle<T extends (...args: Parameters<T>) => ReturnType<T>>(
  callback: T,
  delay: number,
): (...args: Parameters<T>) => void {
  const lastRunRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return useCallback((...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = delay - (now - lastRunRef.current);

    if (remaining <= 0) {
      lastRunRef.current = now;
      callback(...args);
    } else if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        lastRunRef.current = Date.now();
        timeoutRef.current = null;
        callback(...args);
      }, remaining);
    }
  }, [callback, delay]);
}
