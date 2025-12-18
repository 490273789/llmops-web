# LLMOps Web Platform

<p align="center">
  <img src="public/vite.svg" width="120" alt="LLMOps Logo" />
</p>

<p align="center">
  企业级大语言模型运维管理平台
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-purple?logo=vite" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Ant%20Design-5-blue?logo=antdesign" alt="Ant Design" />
</p>

## ✨ 特性

- 🚀 **最新技术栈** - React 19 + TypeScript 5.9 + Vite 8 (rolldown)
- 🎨 **UI 设计系统** - 基于 Ant Design 5，支持深色模式
- 📦 **状态管理** - Zustand 轻量级状态管理
- 🔧 **代码质量** - Oxlint + Oxfmt + Stylelint
- 📱 **响应式设计** - 移动端友好
- ⚡ **快速构建** - 基于 Rolldown 的极速构建

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 |
| 语言 | TypeScript 5.9 |
| 构建 | Vite 8 (Rolldown) |
| UI 库 | Ant Design 5 |
| 状态管理 | Zustand 5 |
| 路由 | React Router 7 |
| 样式 | SCSS Modules + CSS Variables |
| 代码检查 | Oxlint |
| 格式化 | Oxfmt |
| 样式检查 | Stylelint |
| Git Hooks | Husky + lint-staged |
| 提交规范 | Commitlint + Commitizen |

## 📁 项目结构

```
llmops-web/
├── .github/                  # GitHub 配置
│   └── workflows/           # CI/CD 工作流
├── public/                   # 静态资源
├── src/
│   ├── assets/              # 资源文件
│   ├── components/          # 组件
│   │   ├── common/          # 通用组件
│   │   └── layout/          # 布局组件
│   ├── hooks/               # 自定义 Hooks
│   ├── pages/               # 页面
│   ├── router/              # 路由配置
│   ├── services/            # API 服务
│   ├── stores/              # 状态管理
│   ├── styles/              # 全局样式
│   ├── types/               # 类型定义
│   ├── utils/               # 工具函数
│   ├── App.tsx              # 应用入口
│   └── main.tsx             # 主入口
├── .env                      # 环境变量
├── .env.development          # 开发环境变量
├── .env.production           # 生产环境变量
├── oxlint.json              # Oxlint 配置
├── .stylelintrc.json        # Stylelint 配置
├── commitlint.config.js     # Commitlint 配置
├── vite.config.ts           # Vite 配置
└── package.json
```

## 🚀 快速开始

### 环境要求

- Node.js >= 20.0.0
- pnpm >= 9.0.0

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 📝 可用脚本

| 命令 | 描述 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |
| `pnpm lint` | 运行 Oxlint 代码检查 |
| `pnpm format` | 使用 Oxfmt 格式化代码 |
| `pnpm format:check` | 检查代码格式 |
| `pnpm stylelint` | 运行样式检查 |
| `pnpm type-check` | TypeScript 类型检查 |
| `pnpm analyze` | 构建并分析打包体积 |
| `pnpm commit` | 使用 Commitizen 提交 |

## 🎨 设计规范

项目包含完整的 UI 设计规范，详见 [UI 设计规范文档](./docs/UI_DESIGN_SYSTEM.md)。

### 主题切换

支持三种主题模式：
- 🌞 浅色模式
- 🌙 深色模式
- 💻 跟随系统

## 📋 Git 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

类型：
- feat:     新功能
- fix:      修复 Bug
- docs:     文档更新
- style:    代码格式
- refactor: 重构
- perf:     性能优化
- test:     测试相关
- chore:    构建/工具
- ci:       CI 配置
```

推荐使用交互式提交：

```bash
pnpm commit
```

## 🔧 IDE 配置

推荐使用 VS Code，并安装以下扩展：
- Oxc (Oxlint + Oxfmt)
- Stylelint
- EditorConfig for VS Code

## 📄 License

MIT License © 2024
