import type { FC } from 'react';
import { Button, Tooltip } from 'antd';
import { SunOutlined, MoonOutlined, DesktopOutlined } from '@ant-design/icons';
import { useThemeStore } from '@/stores';

import styles from './ThemeToggle.module.scss';

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <SunOutlined />;
      case 'dark':
        return <MoonOutlined />;
      case 'system':
        return <DesktopOutlined />;
      default:
        return <SunOutlined />;
    }
  };

  const getTooltipText = () => {
    switch (theme) {
      case 'light':
        return '浅色模式';
      case 'dark':
        return '深色模式';
      case 'system':
        return '跟随系统';
      default:
        return '切换主题';
    }
  };

  return (
    <Tooltip title={getTooltipText()} placement="bottom">
      <Button
        type="text"
        icon={getIcon()}
        onClick={toggleTheme}
        className={styles.toggleButton}
        aria-label="切换主题"
      />
    </Tooltip>
  );
};

export default ThemeToggle;
