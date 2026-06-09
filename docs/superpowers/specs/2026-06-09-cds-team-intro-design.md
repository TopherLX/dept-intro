# 临床数据科学部（CDS）团队介绍网页 — 设计规格说明

## 概述

临床数据科学部团队介绍单页网站，展示团队成员、技术架构、工作模式、研究课题、培训体系和会议宣发。面向内部同事和外部合作者，传达团队的技术实力和转型愿景。

- **类型**: 纯前端静态单页
- **部署**: GitHub Pages
- **设计系统**: Playful Geometric（温暖活泼方向）

## 技术栈

| 层面 | 选型 | 用途 |
|------|------|------|
| 框架 | Vue 3 + TypeScript + Vite | 组件化开发 |
| UI 组件 | Naive UI（按需自动导入） | Carousel、Popover、Timeline、Collapse、Modal、Image |
| 样式 | Tailwind CSS v4 + `@tailwindcss/vite` | 布局、间距、字体、颜色、自定义卡片 |
| 包管理 | pnpm | TypeScript 依赖管理 |
| 部署 | GitHub Pages（静态构建产物） | `pnpm build` → `dist/` |

## 页面结构

单页长滚动，7 个板块垂直排列，固定顶部导航支持锚点平滑滚动和滚动高亮。

```
┌─────────────────────────────────┐
│  AppHeader (sticky, 锚点导航)     │
├─────────────────────────────────┤
│  ① HeroSection                  │
├─────────────────────────────────┤
│  ② MembersSection (Carousel)    │
├─────────────────────────────────┤
│  ③ TechSection (SVG + Popover)  │
├─────────────────────────────────┤
│  ④ WorkModeSection (Timeline)   │
├─────────────────────────────────┤
│  ⑤ TopicsSection (卡片网格)      │
├─────────────────────────────────┤
│  ⑥ TrainingSection (卡片+折叠)   │
├─────────────────────────────────┤
│  ⑦ EventsSection (海报画廊)      │
├─────────────────────────────────┤
│  AppFooter                      │
└─────────────────────────────────┘
```

## 组件规格

### AppHeader
- 固定顶部，白色背景 + 底部 2px 边框
- 左侧：CDS Logo（Outfit 字体，violet 色）
- 右侧：6 个锚点链接（成员/架构/模式/课题/培训/会议）
- 滚动高亮：`IntersectionObserver` 监听各板块曝光，当前板块对应链接变为 violet + 底部指示条

### HeroSection
- 左文右图布局，背景 #FFFDF5
- 标签胶囊："Clinical Data Science"（amber 底）
- 标题："用数据科学赋能临床研究"（Outfit ExtraBold，2em+）
- 副标题：一行描述文案
- CTA 按钮："了解团队"（violet 底 + 硬阴影 pop-shadow）+ "浏览架构"（outline 样式）
- 右侧装饰：大圆角 blob 形状（pink 底 + 硬阴影），内含 DNA/数据图标
- 底部：彩色圆点排列作为视觉节奏

### MembersSection
- 板块标题："团队成员" + 圆点装饰线
- Naive UI `n-carousel`：每页显示 3 张（桌面）/ 2 张（平板）/ 1 张（手机）
- 每张 MemberCard：
  - 白色底 + 2px border + sticker 阴影（4色轮换：pink/violet/amber/mint）
  - 头像占位圆（渐变色）
  - 姓名（Outfit Bold）+ 职位（violet 色）
  - 简介段落（2-3行，Plus Jakarta Sans）
  - 技能标签胶囊（不同色底）

### TechSection
- 板块标题："技术架构全景"
- 四层交互卡片，每层可展开查看技术节点
- Naive UI `n-popover`：hover 触发显示技术名称 + 简短说明
- 四层用不同主题色标识：应用层=violet、管道层=amber、数据层=mint

### WorkModeSection
- 板块标题："工作模式变革"
- Naive UI `n-timeline` 纵向时间线
- 三个节点：
  1. "过去 · CDM 传统模式"（pink 圆点）
  2. "变革 · 基础设施重构"（amber 圆点）
  3. "未来 · CDS 数据科学"（violet 圆点）
- 滚动入场：pop-in bounce 动画

### TopicsSection / TrainingSection / EventsSection
- 统一卡片网格布局，3列 → 2列 → 1列响应式
- 主题色区分：课题=violet、培训=mint、会议=amber
- TopicsSection：每张卡片含日期 + 作者 + 标题 + 标签
- TrainingSection：每张卡片含日期 + 讲师 + 标题，系列课程用 `n-collapse` 展开
- EventsSection：海报缩略图卡片，点击用 Naive UI `n-image` 预览大图

### SectionTitle（共享组件）
- Props: `title: string`、`color: string`
- 左侧彩色圆点 + 标题文字 + 右侧装饰短线
- Outfit Bold，1.5em

## 设计 Token

### 色彩
```
cream:    #FFFDF5
foreground: #1E293B
muted:    #64748B
violet:   #8B5CF6
pink:     #F472B6
amber:    #FBBF24
mint:     #34D399
```

### 字体
- 标题：Outfit (700/800)
- 正文：Plus Jakarta Sans (400/500)

### 阴影
```
pop:      4px 4px 0 #1E293B
pop-hover: 6px 6px 0 #1E293B
sticker:  8px 8px 0 #E2E8F0
```

### 圆角
```
卡片: 16px
按钮: 9999px (胶囊)
blob: 24px 24px 24px 4px
```

## 数据层

所有内容数据集中在 `src/data/content.ts`，包含 Member、Topic、Training、Event 接口定义和实际数据。数据从 `refs/` 目录静态提取后手动维护。

## 路由与状态管理

- 路由：不需要 Vue Router，使用浏览器锚点导航 + `scrollIntoView` + `IntersectionObserver`
- 状态管理：不需要 Pinia/Vuex，所有数据从 `content.ts` 静态导入，UI 状态由组件内 `ref` 管理

## 关键交互

1. 锚点导航：`scrollIntoView({ behavior: 'smooth' })`，IntersectionObserver 高亮
2. 成员走马灯：Naive UI Carousel，触摸拖拽 + 箭头 + 指示点
3. 技术热点：hover → Popover
4. 时间线动画：滚动入 viewport 时 pop-in bounce
5. 海报预览：Naive UI Image 点击放大
6. 卡片 hover：translate + shadow 扩展

## 响应式

| 断点 | 走马灯每页 | 卡片网格列 | 装饰元素 | 阴影 |
|------|-----------|-----------|----------|------|
| ≥1024px | 3 张 | 3 列 | 全部显示 | full |
| 768-1023px | 2 张 | 2 列 | 部分隐藏 | full |
| <768px | 1 张 | 1 列 | 隐藏复杂装饰 | 2px |

## 边界条件

- `prefers-reduced-motion`：禁用 bounce/wiggle 动画，改用 fade 过渡
- 无 JavaScript 降级：内容完全可用（静态卡片展示）
- 海报图片缺失：显示占位卡片（主题色背景 + 标题文字）
- 长文本：`line-clamp-2` 截断
