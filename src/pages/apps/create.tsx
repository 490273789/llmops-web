import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Workflow, Cpu, ArrowRight } from 'lucide-react';
import { cn } from '@/utils';
import styles from '@/styles/pages.module.css';

const appTypes = [
  {
    type: 'chatbot',
    label: '聊天机器人',
    description: '创建智能对话应用，支持多轮对话和上下文理解',
    icon: Bot,
  },
  {
    type: 'workflow',
    label: '工作流',
    description: '可视化编排 AI 工作流，实现复杂业务逻辑',
    icon: Workflow,
  },
  {
    type: 'agent',
    label: '智能体',
    description: '构建具有自主决策能力的 AI Agent',
    icon: Cpu,
  },
];

export default function AppCreate() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('chatbot');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    // TODO: 调用 API 创建应用
    console.log({ type: selectedType, name, description });
    navigate('/apps');
  };

  return (
    <div className={styles.page}>
      <div className={styles.createContainer}>
        {/* 标题 */}
        <div className={styles.centerHeader}>
          <h1 className={styles.title}>创建新应用</h1>
          <p className={styles.subtitle}>选择应用类型并填写基本信息</p>
        </div>

        {/* 应用类型选择 */}
        <div className={styles.formSection}>
          <label className={styles.label}>选择应用类型</label>
          <div className={styles.appTypeGrid}>
            {appTypes.map((item) => (
              <button
                key={item.type}
                onClick={() => setSelectedType(item.type)}
                className={cn(
                  styles.appTypeCard,
                  selectedType === item.type && styles.appTypeCardActive,
                )}
              >
                <div
                  className={cn(
                    styles.appTypeIconWrapper,
                    selectedType === item.type && styles.appTypeIconWrapperActive,
                  )}
                >
                  <item.icon className={styles.appTypeIcon} />
                </div>
                <h3 className={styles.appTypeTitle}>{item.label}</h3>
                <p className={styles.appTypeDesc}>{item.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 基本信息 */}
        <div className={styles.formSection}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              应用名称 <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="输入应用名称"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>应用描述</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textarea}
              rows={4}
              placeholder="描述您的应用..."
            />
          </div>
        </div>

        {/* 操作按钮 */}
        <div className={styles.buttonsEnd}>
          <button onClick={() => navigate('/apps')} className={styles.cancelBtn}>
            取消
          </button>
          <button onClick={handleCreate} disabled={!name.trim()} className={styles.submitBtn}>
            创建应用
            <ArrowRight className={styles.smallIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
