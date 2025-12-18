/**
 * 应用常量配置
 */

// API 相关
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
export const API_TIMEOUT = 30000;

// 本地存储 Key
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_INFO: 'user_info',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

// 应用类型
export const APP_TYPES = {
  CHATBOT: 'chatbot',
  WORKFLOW: 'workflow',
  AGENT: 'agent',
} as const;

export const APP_TYPE_LABELS: Record<string, string> = {
  chatbot: '聊天机器人',
  workflow: '工作流',
  agent: '智能体',
};

// 应用状态
export const APP_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
} as const;

export const APP_STATUS_LABELS: Record<string, string> = {
  draft: '草稿',
  published: '已发布',
  archived: '已归档',
};

// LLM 提供商
export const LLM_PROVIDERS = {
  OPENAI: 'openai',
  ANTHROPIC: 'anthropic',
  AZURE: 'azure',
  LOCAL: 'local',
  CUSTOM: 'custom',
} as const;

export const LLM_PROVIDER_LABELS: Record<string, string> = {
  openai: 'OpenAI',
  anthropic: 'Anthropic',
  azure: 'Azure OpenAI',
  local: '本地模型',
  custom: '自定义',
};

// 路由路径
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  APPS: '/apps',
  APP_DETAIL: '/apps/:id',
  APP_CREATE: '/apps/create',
  MODELS: '/models',
  KNOWLEDGE: '/knowledge',
  LOGS: '/logs',
  SETTINGS: '/settings',
} as const;
