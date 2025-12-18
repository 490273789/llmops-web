import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import styles from '@/styles/pages.module.css';

export default function NotFound() {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorTitle}>页面未找到</p>
      <p className={styles.errorDesc}>您访问的页面不存在或已被移除</p>
      <Link to="/" className={styles.homeBtn}>
        <Home className={styles.smallIcon} />
        返回首页
      </Link>
    </div>
  );
}
