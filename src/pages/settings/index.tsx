import { Moon, Sun, Monitor, User, Key, Bell } from 'lucide-react';

import { cn } from '@/utils';
import styles from '@/styles/pages.module.css';
import { useThemeStore } from '../../stores';

export default function Settings() {
  const { theme, setTheme } = useThemeStore();

  const themes = [
    { value: 'light', label: '浅色', icon: Sun },
    { value: 'dark', label: '深色', icon: Moon },
    { value: 'system', label: '跟随系统', icon: Monitor },
  ] as const;

  return (
    <div className={styles.page}>
      {/* 页面标题 */}
      <div className={styles.header}>
        <h1 className={styles.title}>系统设置</h1>
        <p className={styles.subtitle}>管理您的账户和系统偏好</p>
      </div>

      <div className={styles.settingsContainer}>
        {/* 外观设置 */}
        <section className={styles.settingsSection}>
          <h2 className={styles.sectionHeader}>
            <Monitor className={styles.sectionIcon} />
            外观设置
          </h2>
          <div className={styles.settingsCard}>
            <label className={styles.label}>主题模式</label>
            <div className={styles.themeOptions}>
              {themes.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setTheme(item.value)}
                  className={cn(
                    styles.themeOption,
                    theme === item.value && styles.themeOptionActive,
                  )}
                >
                  <item.icon
                    className={cn(
                      styles.themeOptionIcon,
                      theme === item.value && styles.themeOptionIconActive,
                    )}
                  />
                  <span
                    className={cn(
                      styles.themeOptionLabel,
                      theme === item.value && styles.themeOptionLabelActive,
                    )}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 账户设置 */}
        <section className={styles.settingsSection}>
          <h2 className={styles.sectionHeader}>
            <User className={styles.sectionIcon} />
            账户设置
          </h2>
          <div className={styles.settingsCardWithSpace}>
            <div className={styles.formGroup}>
              <label className={styles.label}>用户名</label>
              <input type="text" className={styles.input} placeholder="输入用户名" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>邮箱</label>
              <input type="email" className={styles.input} placeholder="输入邮箱" />
            </div>
          </div>
        </section>

        {/* API 密钥 */}
        <section className={styles.settingsSection}>
          <h2 className={styles.sectionHeader}>
            <Key className={styles.sectionIcon} />
            API 密钥
          </h2>
          <div className={styles.settingsCard}>
            <p className={styles.settingsDescription}>用于 API 调用的密钥，请妥善保管</p>
            <button className={styles.primaryBtn}>生成新密钥</button>
          </div>
        </section>

        {/* 通知设置 */}
        <section className={styles.settingsSection}>
          <h2 className={styles.sectionHeader}>
            <Bell className={styles.sectionIcon} />
            通知设置
          </h2>
          <div className={styles.settingsCardWithSpace}>
            <label className={styles.checkboxRow}>
              <span className={styles.checkboxLabel}>邮件通知</span>
              <input type="checkbox" className={styles.checkbox} />
            </label>
            <label className={styles.checkboxRow}>
              <span className={styles.checkboxLabel}>系统消息</span>
              <input type="checkbox" defaultChecked className={styles.checkbox} />
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
