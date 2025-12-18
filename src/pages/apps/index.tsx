import { Link } from 'react-router-dom';
import { Plus, Bot, MoreVertical, Play } from 'lucide-react';
import { APP_TYPE_LABELS, APP_STATUS_LABELS } from '@/constants';
import { cn } from '@/utils';
import styles from '@/styles/pages.module.css';

// 模拟数据
const mockApps = [
  {
    id: '1',
    name: '客服助手',
    description: '智能客服对话机器人，支持多轮对话',
    type: 'chatbot' as const,
    status: 'published' as const,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: '文档问答',
    description: '基于知识库的文档问答系统',
    type: 'chatbot' as const,
    status: 'draft' as const,
    createdAt: '2024-01-14',
  },
  {
    id: '3',
    name: '数据分析 Agent',
    description: '自动化数据分析智能体',
    type: 'agent' as const,
    status: 'published' as const,
    createdAt: '2024-01-13',
  },
];

export default function Apps() {
  return (
    <div className={styles.page}>
      {/* 页面标题 */}
      <div className={styles.headerRow}>
        <div>
          <h1 className={styles.title}>应用管理</h1>
          <p className={styles.subtitle}>管理您的 AI 应用</p>
        </div>
        <Link to="/apps/create" className={styles.primaryBtn}>
          <Plus className={styles.smallIcon} />
          创建应用
        </Link>
      </div>

      {/* 应用列表 */}
      <div className={styles.grid3}>
        {mockApps.map((app) => (
          <div key={app.id} className={styles.card}>
            {/* 操作菜单 */}
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrapper}>
                <Bot className={styles.cardIcon} />
              </div>
              <button className={styles.ghostBtn}>
                <MoreVertical className={styles.smallIcon} />
              </button>
            </div>

            {/* 应用信息 */}
            <h3 className={styles.cardTitle}>{app.name}</h3>
            <p className={styles.cardDesc}>{app.description}</p>

            {/* 标签 */}
            <div className={styles.tags}>
              <span className={styles.tag}>{APP_TYPE_LABELS[app.type]}</span>
              <span
                className={cn(
                  styles.tag,
                  app.status === 'published' ? styles.tagSuccess : styles.tagWarning,
                )}
              >
                {APP_STATUS_LABELS[app.status]}
              </span>
            </div>

            {/* 操作按钮 */}
            <div className={styles.buttonsRow}>
              <Link to={`/apps/${app.id}`} className={styles.outlineBtn}>
                编辑
              </Link>
              <button className={styles.iconBtn}>
                <Play className={styles.smallIcon} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
