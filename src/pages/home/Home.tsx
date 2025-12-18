import type { FC } from 'react';
import { Button, Card, Space, Typography } from 'antd';
import { RocketOutlined, ApiOutlined, DatabaseOutlined, SettingOutlined } from '@ant-design/icons';
import { PageContainer, ThemeToggle } from '@/components';

import styles from './Home.module.scss';

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <RocketOutlined />,
    title: '模型部署',
    description: '快速部署和管理多种大语言模型，支持本地和云端部署',
  },
  {
    icon: <ApiOutlined />,
    title: 'API 管理',
    description: '统一的 API 网关，支持多模型路由和负载均衡',
  },
  {
    icon: <DatabaseOutlined />,
    title: '数据管理',
    description: '高效的向量数据库集成，支持知识库构建和检索增强',
  },
  {
    icon: <SettingOutlined />,
    title: '监控运维',
    description: '全面的监控面板，实时追踪模型性能和资源使用',
  },
];

const Home: FC = () => {
  return (
    <PageContainer
      title="LLMOps Platform"
      subtitle="企业级大语言模型运维管理平台"
      extra={<ThemeToggle />}
    >
      <div className={styles.hero}>
        <Title level={2} className={styles.heroTitle}>
          构建下一代 AI 应用基础设施
        </Title>
        <Paragraph className={styles.heroDescription}>
          LLMOps 平台帮助您轻松部署、管理和监控大语言模型，加速 AI 应用落地
        </Paragraph>
        <Space size="middle">
          <Button type="primary" size="large">
            开始使用
          </Button>
          <Button size="large">查看文档</Button>
        </Space>
      </div>

      <div className={styles.features}>
        {features.map((feature) => (
          <Card key={feature.title} className={styles.featureCard} hoverable>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <Title level={4} className={styles.featureTitle}>
              {feature.title}
            </Title>
            <Paragraph className={styles.featureDescription}>{feature.description}</Paragraph>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default Home;
