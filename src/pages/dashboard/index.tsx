import { Bot, Brain, Database, FileText, TrendingUp } from 'lucide-react';
import styles from './index.module.css';

const stats = [
  { label: '应用总数', value: '12', icon: Bot, trend: '+2' },
  { label: '模型配置', value: '5', icon: Brain, trend: '+1' },
  { label: '知识库', value: '8', icon: Database, trend: '0' },
  { label: '今日调用', value: '1,234', icon: TrendingUp, trend: '+15%' },
];

export default function Dashboard() {
  return (
    <div className={styles.page}>
      {/* 页面标题 */}
      <div className={styles.header}>
        <h1 className={styles.title}>仪表盘</h1>
        <p className={styles.subtitle}>欢迎使用 LLMOps 平台</p>
      </div>

      {/* 统计卡片 */}
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statHeader}>
              <stat.icon className={styles.statIcon} />
              <span className={styles.statTrend}>{stat.trend}</span>
            </div>
            <div className={styles.statBody}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 快速操作 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>快速开始</h2>
        <div className={styles.actionsGrid}>
          <button className={styles.actionCard}>
            <div className={styles.actionIconWrapper}>
              <Bot className={styles.actionIcon} />
            </div>
            <div>
              <p className={styles.actionTitle}>创建聊天应用</p>
              <p className={styles.actionDesc}>快速搭建智能对话机器人</p>
            </div>
          </button>
          <button className={styles.actionCard}>
            <div className={styles.actionIconWrapper}>
              <Brain className={styles.actionIcon} />
            </div>
            <div>
              <p className={styles.actionTitle}>配置模型</p>
              <p className={styles.actionDesc}>接入 OpenAI、Claude 等模型</p>
            </div>
          </button>
          <button className={styles.actionCard}>
            <div className={styles.actionIconWrapper}>
              <Database className={styles.actionIcon} />
            </div>
            <div>
              <p className={styles.actionTitle}>导入知识库</p>
              <p className={styles.actionDesc}>上传文档构建 RAG 知识库</p>
            </div>
          </button>
        </div>
      </div>

      {/* 最近活动 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>最近活动</h2>
        <div className={styles.emptyState}>
          <FileText className={styles.emptyIcon} />
          <p className={styles.emptyText}>暂无活动记录</p>
        </div>
      </div>
    </div>
  );
}
