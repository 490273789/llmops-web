import { cn } from '@/utils';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className, ...props }: CardProps) {
  return <div className={cn(styles.card, className)} {...props} />;
}

function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn(styles.header, className)} {...props} />;
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn(styles.title, className)} {...props} />;
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn(styles.description, className)} {...props} />;
}

function CardContent({ className, ...props }: CardProps) {
  return <div className={cn(styles.content, className)} {...props} />;
}

function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn(styles.footer, className)} {...props} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
