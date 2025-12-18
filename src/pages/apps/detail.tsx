import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, Play, Settings } from 'lucide-react';

import styles from '@/styles/pages.module.css';

export default function AppDetail() {
  const { id } = useParams();

  return (
    <div className={styles.detailContainer}>
      {/* 顶部工具栏 */}
      <header className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <Link to="/apps" className={styles.backLink}>
            <ArrowLeft className={styles.smallIcon} />
            返回
          </Link>
          <span className={styles.breadcrumbDivider}>/</span>
          <h1 className={styles.toolbarTitle}>应用编辑 - {id}</h1>
        </div>
        <div className={styles.toolbarActions}>
          <button className={styles.smallOutlineBtn}>
            <Settings className={styles.smallIcon} />
            设置
          </button>
          <button className={styles.smallOutlineBtn}>
            <Play className={styles.smallIcon} />
            预览
          </button>
          <button className={styles.smallPrimaryBtn}>
            <Save className={styles.smallIcon} />
            保存
          </button>
        </div>
      </header>

      {/* 编辑区域 */}
      <div className={styles.detailBody}>
        {/* 左侧配置面板 */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarForm}>
            <div className={styles.formGroup}>
              <label className={styles.label}>应用名称</label>
              <input type="text" className={styles.input} placeholder="输入应用名称" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>系统提示词</label>
              <textarea className={styles.textarea} rows={6} placeholder="输入系统提示词..." />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>模型选择</label>
              <select className={styles.select}>
                <option>gpt-4o</option>
                <option>gpt-4o-mini</option>
                <option>claude-3.5-sonnet</option>
              </select>
            </div>
          </div>
        </aside>

        {/* 中间画布/预览区 */}
        <main className={styles.mainContent}>
          <div className={styles.centerMessage}>
            <p>应用配置区域</p>
            <p>在这里配置您的 AI 应用</p>
          </div>
        </main>
      </div>
    </div>
  );
}
