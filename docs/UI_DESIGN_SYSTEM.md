# LLMOps Platform UI 设计规范

本文档定义了 LLMOps 平台的 UI 设计系统，包括颜色、排版、间距、组件样式等规范。

## 目录

- [设计原则](#设计原则)
- [颜色系统](#颜色系统)
- [排版系统](#排版系统)
- [间距系统](#间距系统)
- [圆角规范](#圆角规范)
- [阴影规范](#阴影规范)
- [动效规范](#动效规范)
- [响应式断点](#响应式断点)
- [组件规范](#组件规范)
- [深色模式](#深色模式)
- [使用指南](#使用指南)

---

## 设计原则

### 1. 简洁 (Simplicity)

- 减少视觉噪音，突出核心内容
- 使用清晰的视觉层级
- 避免过度装饰

### 2. 一致性 (Consistency)

- 统一的视觉语言
- 可预测的交互模式
- 标准化的组件使用

### 3. 可访问性 (Accessibility)

- 符合 WCAG 2.1 AA 标准
- 足够的颜色对比度
- 支持键盘导航

### 4. 响应式 (Responsive)

- 移动优先设计
- 流畅的断点过渡
- 适配各种屏幕尺寸

---

## 颜色系统

### 品牌色

| 名称          | 变量                    | 色值      | 用途                 |
| ------------- | ----------------------- | --------- | -------------------- |
| Primary       | `--color-primary`       | `#6366f1` | 主要操作、链接、高亮 |
| Primary Light | `--color-primary-light` | `#818cf8` | 悬停状态             |
| Primary Dark  | `--color-primary-dark`  | `#4f46e5` | 点击状态             |
| Secondary     | `--color-secondary`     | `#8b5cf6` | 次要强调             |
| Accent        | `--color-accent`        | `#06b6d4` | 特殊强调             |

### 中性色

```scss
// 从浅到深
$neutral-50: #fafafa; // 最浅背景
$neutral-100: #f4f4f5; // 浅背景
$neutral-200: #e4e4e7; // 边框
$neutral-300: #d4d4d8; // 禁用边框
$neutral-400: #a1a1aa; // 占位符文字
$neutral-500: #71717a; // 次要文字
$neutral-600: #52525b; // 正文
$neutral-700: #3f3f46; // 标题
$neutral-800: #27272a; // 深色背景
$neutral-900: #18181b; // 最深背景
$neutral-950: #09090b; // 纯黑
```

### 语义色

| 状态 | 变量              | 色值      | 用途               |
| ---- | ----------------- | --------- | ------------------ |
| 成功 | `--color-success` | `#22c55e` | 成功提示、完成状态 |
| 警告 | `--color-warning` | `#f59e0b` | 警告提示、注意事项 |
| 错误 | `--color-error`   | `#ef4444` | 错误提示、删除操作 |
| 信息 | `--color-info`    | `#3b82f6` | 信息提示、帮助说明 |

### 背景色

```scss
// 浅色模式
--color-bg-primary: #fafafa; // 页面背景
--color-bg-secondary: #ffffff; // 卡片背景
--color-bg-tertiary: #f4f4f5; // 代码块背景
--color-bg-elevated: #ffffff; // 弹层背景
--color-bg-hover: #f4f4f5; // 悬停背景
--color-bg-active: #e4e4e7; // 激活背景
```

### 文字色

```scss
--color-text-primary: #18181b; // 主要文字
--color-text-secondary: #52525b; // 次要文字
--color-text-tertiary: #71717a; // 辅助文字
--color-text-quaternary: #a1a1aa; // 禁用文字
--color-text-link: #6366f1; // 链接文字
```

### 边框色

```scss
--color-border-primary: #e4e4e7; // 默认边框
--color-border-secondary: #d4d4d8; // 深色边框
--color-border-focus: #6366f1; // 聚焦边框
```

---

## 排版系统

### 字体族

```scss
// 无衬线字体（正文）
--font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;

// 等宽字体（代码）
--font-family-mono: "SF Mono", "Fira Code", "Roboto Mono", Menlo, Monaco,
  Consolas, monospace;
```

### 字号

| 名称 | 变量               | 大小 | 用途           |
| ---- | ------------------ | ---- | -------------- |
| xs   | `--font-size-xs`   | 12px | 辅助信息、标签 |
| sm   | `--font-size-sm`   | 14px | 次要正文、按钮 |
| base | `--font-size-base` | 16px | 正文           |
| lg   | `--font-size-lg`   | 18px | 大号正文       |
| xl   | `--font-size-xl`   | 20px | 小标题         |
| 2xl  | `--font-size-2xl`  | 24px | 标题           |
| 3xl  | `--font-size-3xl`  | 30px | 大标题         |
| 4xl  | `--font-size-4xl`  | 36px | 页面标题       |
| 5xl  | `--font-size-5xl`  | 48px | 特大标题       |

### 字重

| 名称     | 变量                     | 值  | 用途     |
| -------- | ------------------------ | --- | -------- |
| Normal   | `--font-weight-normal`   | 400 | 正文     |
| Medium   | `--font-weight-medium`   | 500 | 强调正文 |
| Semibold | `--font-weight-semibold` | 600 | 标题     |
| Bold     | `--font-weight-bold`     | 700 | 重要标题 |

### 行高

| 名称    | 变量                    | 值    | 用途   |
| ------- | ----------------------- | ----- | ------ |
| Tight   | `--line-height-tight`   | 1.25  | 标题   |
| Normal  | `--line-height-normal`  | 1.5   | 正文   |
| Relaxed | `--line-height-relaxed` | 1.625 | 长段落 |

---

## 间距系统

基于 4px 网格系统：

| 名称 | 变量           | 大小 | 用途           |
| ---- | -------------- | ---- | -------------- |
| 1    | `--spacing-1`  | 4px  | 图标与文字间距 |
| 2    | `--spacing-2`  | 8px  | 紧凑元素间距   |
| 3    | `--spacing-3`  | 12px | 小间距         |
| 4    | `--spacing-4`  | 16px | 默认间距       |
| 5    | `--spacing-5`  | 20px | 中等间距       |
| 6    | `--spacing-6`  | 24px | 区块间距       |
| 8    | `--spacing-8`  | 32px | 大间距         |
| 10   | `--spacing-10` | 40px | 特大间距       |
| 12   | `--spacing-12` | 48px | 区域间距       |
| 16   | `--spacing-16` | 64px | 页面边距       |

---

## 圆角规范

| 名称 | 变量            | 大小   | 用途         |
| ---- | --------------- | ------ | ------------ |
| sm   | `--radius-sm`   | 4px    | 小按钮、标签 |
| md   | `--radius-md`   | 6px    | 输入框、按钮 |
| lg   | `--radius-lg`   | 8px    | 卡片         |
| xl   | `--radius-xl`   | 12px   | 模态框       |
| 2xl  | `--radius-2xl`  | 16px   | 大卡片       |
| full | `--radius-full` | 9999px | 头像、徽章   |

---

## 阴影规范

```scss
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05); // 微阴影
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1); // 小阴影
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1); // 中阴影
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1); // 大阴影
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1); // 特大阴影
```

### 使用场景

- **xs**: 输入框聚焦
- **sm**: 卡片默认
- **md**: 卡片悬停
- **lg**: 下拉菜单、弹层
- **xl**: 模态框

---

## 动效规范

### 持续时间

| 名称   | 变量                  | 时间  | 用途         |
| ------ | --------------------- | ----- | ------------ |
| Fast   | `--transition-fast`   | 150ms | 按钮、图标   |
| Normal | `--transition-normal` | 200ms | 卡片、输入框 |
| Slow   | `--transition-slow`   | 300ms | 模态框、抽屉 |

### 缓动函数

```scss
$transition-timing-default: cubic-bezier(0.4, 0, 0.2, 1);
$transition-timing-ease-in: cubic-bezier(0.4, 0, 1, 1);
$transition-timing-ease-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## 响应式断点

| 名称 | 变量              | 宽度   | 设备   |
| ---- | ----------------- | ------ | ------ |
| xs   | `$breakpoint-xs`  | 480px  | 大手机 |
| sm   | `$breakpoint-sm`  | 640px  | 小平板 |
| md   | `$breakpoint-md`  | 768px  | 平板   |
| lg   | `$breakpoint-lg`  | 1024px | 小桌面 |
| xl   | `$breakpoint-xl`  | 1280px | 桌面   |
| 2xl  | `$breakpoint-2xl` | 1536px | 大桌面 |

### 使用 Mixin

```scss
@use "@/styles/variables" as *;

.element {
  padding: var(--spacing-4);

  @include media-md {
    padding: var(--spacing-6);
  }

  @include media-lg {
    padding: var(--spacing-8);
  }
}
```

---

## 组件规范

### 按钮

| 类型    | 用途                         |
| ------- | ---------------------------- |
| Primary | 主要操作（一个页面最多一个） |
| Default | 次要操作                     |
| Text    | 低优先级操作                 |
| Link    | 导航链接                     |
| Danger  | 危险操作（删除等）           |

### 卡片

- 圆角: `8px`
- 内边距: `24px`
- 阴影: `--shadow-sm`
- 边框: `1px solid var(--color-border-primary)`

### 输入框

- 高度: `40px`
- 圆角: `6px`
- 边框: `1px solid var(--color-border-primary)`
- 聚焦: `border-color: var(--color-primary); box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2)`

---

## 深色模式

### 启用方式

1. **手动切换**: 点击主题切换按钮
2. **跟随系统**: 自动检测系统偏好

### 实现原理

使用 CSS 自定义属性，通过 `data-theme` 属性或 `.dark` 类名切换：

```scss
[data-theme="dark"] {
  --color-bg-primary: #09090b;
  --color-bg-secondary: #18181b;
  --color-text-primary: #fafafa;
  // ...
}
```

### 深色模式颜色对照

| 属性     | 浅色模式  | 深色模式  |
| -------- | --------- | --------- |
| 页面背景 | `#fafafa` | `#09090b` |
| 卡片背景 | `#ffffff` | `#18181b` |
| 主要文字 | `#18181b` | `#fafafa` |
| 次要文字 | `#52525b` | `#d4d4d8` |
| 边框     | `#e4e4e7` | `#3f3f46` |

---

## 使用指南

### 在 SCSS 中使用

```scss
@use "@/styles/variables" as *;

.myComponent {
  // 使用 CSS 变量（推荐）
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  transition: all var(--transition-normal);

  // 使用 Mixin
  @include flex-center;
  @include transition-default;

  // 响应式
  @include media-md {
    padding: var(--spacing-6);
  }
}
```

### 在组件中使用

```tsx
import styles from "./MyComponent.module.scss";

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>标题</h2>
      <p className={styles.description}>描述文字</p>
    </div>
  );
};
```

### 主题切换

```tsx
import { useThemeStore } from "@/stores";

const ThemeButton = () => {
  const { theme, setTheme, toggleTheme } = useThemeStore();

  return <button onClick={toggleTheme}>当前主题: {theme}</button>;
};
```

---

## 文件结构

```
src/styles/
├── _variables.scss      # SCSS Mixins 和断点配置
├── _theme.scss          # CSS 自定义属性（所有设计 tokens）
├── global.scss          # 全局样式和重置
├── antd-overrides.scss  # Ant Design 样式覆盖
└── index.scss           # 样式入口文件
```

## 设计系统架构

### CSS 变量优先

本设计系统使用 **CSS 自定义属性**（CSS Variables）作为所有设计 tokens 的唯一来源。所有颜色、尺寸、间距等值都直接定义在 [\_theme.scss](../src/styles/_theme.scss) 中。

**优势：**

- 支持运行时动态主题切换
- 更好的浏览器兼容性
- 无需重新编译即可修改主题
- 更简洁的代码结构

### SCSS Utilities

[\_variables.scss](../src/styles/_variables.scss) 仅包含：

- 响应式断点配置
- 常用的 Mixins（flex 布局、文本截断等）

**使用建议：**

- 优先使用 CSS 变量：`var(--color-primary)`
- 使用 SCSS Mixins：`@include flex-center`
- 使用断点 Mixins：`@include media-md { ... }`

---

## 最佳实践

### 1. 使用 CSS 变量

✅ **推荐：**

```scss
.button {
  color: var(--color-text-primary);
  background: var(--color-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}
```

❌ **不推荐：**

```scss
.button {
  color: #18181b; // 硬编码颜色
  background: #6366f1;
  padding: 16px; // 硬编码尺寸
}
```

### 2. 使用 SCSS Mixins

```scss
@use "@/styles/variables" as *;

.card {
  @include flex-between; // 使用预定义布局
  @include transition-default; // 使用预定义过渡

  // 响应式设计
  @include media-md {
    padding: var(--spacing-6);
  }
}
```

### 3. 语义化使用颜色

```scss
.success-message {
  color: var(--color-success); // 使用语义化颜色
  background: var(--color-success-bg);
}

.danger-button {
  background: var(--color-error);
  color: var(--color-text-inverse);
}
```

---

## 更新日志

### v0.2.0 (2024-12-18)

- **重构设计系统架构**
- 移除 SCSS 变量，改用 CSS 自定义属性
- 简化 \_variables.scss，仅保留 Mixins 和断点配置
- 所有设计 tokens 直接定义在 \_theme.scss
- 更新文档说明最佳实践

### v0.1.0 (2024-12)

- 初始版本
- 建立颜色系统
- 建立排版系统
- 建立间距系统
- 支持深色模式
