import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/utils';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(styles.input, error && styles.error, className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
