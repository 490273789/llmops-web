import { Outlet } from 'react-router-dom';
import { Bot } from 'lucide-react';
import styles from './AuthLayout.module.scss';

export default function AuthLayout() {
  return (
    <div className={styles.layout}>
      {/* 左侧装饰区 */}
      <div className={styles.decoration}>
        <div className={styles.decorationContent}>
          <Bot className={styles.decorationIcon} />
          <h1 className={styles.decorationTitle}>LLMOps Platform</h1>
          <p className={styles.decorationText}>构建、部署和管理您的 AI 应用</p>
        </div>
      </div>

      {/* 右侧表单区 */}
      <div className={styles.formArea}>
        <div className={styles.formContainer}>
          <div className={styles.mobileHeader}>
            <Bot className={styles.mobileIcon} />
            <h1 className={styles.mobileTitle}>LLMOps Platform</h1>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
