import { cn } from '@/utils';
import styles from './Loading.module.scss';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function Spinner({ size = 'md', className }: SpinnerProps) {
  return <div className={cn(styles.spinner, sizeStyles[size], className)} />;
}

interface LoadingProps {
  text?: string;
}

export function Loading({ text = '加载中...' }: LoadingProps) {
  return (
    <div className={styles.loadingContainer}>
      <Spinner size="lg" />
      <p className={styles.loadingText}>{text}</p>
    </div>
  );
}
export default Loading;
