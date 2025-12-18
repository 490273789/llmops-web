import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils';
import styles from './Button.module.css';

type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  default: styles.default,
  secondary: styles.secondary,
  outline: styles.outline,
  ghost: styles.ghost,
  destructive: styles.destructive,
  link: styles.link,
};

const sizeStyles: Record<ButtonSize, string> = {
  default: styles.sizeDefault,
  sm: styles.sizeSm,
  lg: styles.sizeLg,
  icon: styles.sizeIcon,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'default', size = 'default', loading, disabled, children, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(styles.button, variantStyles[variant], sizeStyles[size], className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className={styles.spinner} />}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
