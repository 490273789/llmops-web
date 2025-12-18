import { Outlet, Link, useLocation } from 'react-router-dom';
import { cn } from '@/utils';
import { useAppStore } from '@/stores';
import { LayoutDashboard, Bot, Settings, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import styles from './MainLayout.module.scss';

const navItems = [
  { path: '/dashboard', label: '仪表盘', icon: LayoutDashboard },
  { path: '/apps', label: '应用管理', icon: Bot },
  { path: '/settings', label: '系统设置', icon: Settings },
];

export default function MainLayout() {
  const location = useLocation();
  const { sidebarCollapsed, toggleSidebar } = useAppStore();

  return (
    <div className={styles.layout}>
      {/* 侧边栏 */}
      <aside
        className={cn(
          styles.sidebar,
          sidebarCollapsed ? styles.sidebarCollapsed : styles.sidebarExpanded,
        )}
      >
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <Bot className={styles.logoIcon} />
            {!sidebarCollapsed && <span className={styles.logoText}>LLMOps</span>}
          </Link>
        </div>

        {/* 导航菜单 */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(styles.navLink, isActive && styles.navLinkActive)}
                  >
                    <item.icon className={styles.navIcon} />
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 底部操作 */}
        <div className={styles.footer}>
          <button className={styles.logoutBtn}>
            <LogOut className={styles.navIcon} />
            {!sidebarCollapsed && <span>退出登录</span>}
          </button>
        </div>

        {/* 折叠按钮 */}
        <button onClick={toggleSidebar} className={styles.toggleBtn}>
          {sidebarCollapsed ? (
            <ChevronRight className={styles.toggleIcon} />
          ) : (
            <ChevronLeft className={styles.toggleIcon} />
          )}
        </button>
      </aside>

      {/* 主内容区 */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
