import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      {/* 顶部导航区域 */}
      <header className={styles.header}>导航</header>
      {/* 内容区域 */}
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
