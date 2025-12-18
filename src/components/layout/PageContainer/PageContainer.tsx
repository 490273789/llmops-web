import type { FC, ReactNode } from 'react';

import styles from './PageContainer.module.scss';

interface PageContainerProps {
  title?: string;
  subtitle?: string;
  extra?: ReactNode;
  children: ReactNode;
  className?: string;
}

const PageContainer: FC<PageContainerProps> = ({ title, subtitle, extra, children, className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {(title || extra) && (
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {extra && <div className={styles.extra}>{extra}</div>}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageContainer;
