# CDS 团队介绍网页 — 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 从零搭建 CDS 团队介绍单页网站，使用 Vue 3 + Naive UI + Tailwind CSS，部署到 GitHub Pages

**Architecture:** 纯前端静态单页，7 个板块垂直排列 + sticky 导航。Naive UI 负责复杂组件（Carousel/Popover/Timeline/Collapse/Image），Tailwind CSS 负责布局和自定义样式，数据集中在 `content.ts`

**Tech Stack:** Vue 3 + TypeScript + Vite, Naive UI, Tailwind CSS v4, pnpm

**Source of truth:** `docs/superpowers/specs/2026-06-09-cds-team-intro-design.md`

---

### Task 1: 项目脚手架 ✅

**Files:**
- Create: `package.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `src/main.ts`, `src/App.vue`, `src/style.css`, `src/vite-env.d.ts`

Steps completed:
- Vite + Vue 3 + TypeScript 项目创建
- Tailwind CSS v4 (`@tailwindcss/vite`) 安装配置
- Naive UI + `unplugin-auto-import` + `unplugin-vue-components` 安装配置
- Design token 写入 `style.css`（色彩、字体、阴影、动画）
- `index.html` 添加 Naive UI style meta 标签
- `pnpm build` 通过

---

### Task 2: 内容数据 + 共享组件

**Files:**
- Create: `src/data/content.ts`, `src/components/shared/SectionTitle.vue`

- [ ] **Step 1: 创建 src/data/content.ts**

```typescript
export interface Member {
  name: string
  title: string
  bio: string
  tags: string[]
  gradient: string
}

export interface Topic {
  date: string
  author: string
  title: string
  tags: string[]
}

export interface Training {
  date: string
  instructor: string
  title: string
  series?: string
  children?: Training[]
}

export interface TimelineEvent {
  title: string
  description: string
  color: string
}

export interface TechLayer {
  name: string
  color: string
  items: { name: string; desc: string }[]
}

export interface PosterEvent {
  date: string
  title: string
  poster: string
}

export const members: Member[] = [
  {
    name: '张力弦', title: '主任助理',
    bio: '2020届中国药科大学药物分析学硕士，深耕临床试验数据科学领域。核心工作涵盖数据仓库搭建与ELT流水线设计，多维度临床数据挖掘与可视化呈现，主导核心业务指标体系建设。独立负责部门内部Web应用全栈开发，统筹管理SAS Viya等核心应用服务器。积极推进AI技术在敏捷开发与自动化运维中的落地实践。',
    tags: ['Python', 'ClickHouse', 'Vue3+Django', 'SAS Viya', 'AI'],
    gradient: 'linear-gradient(135deg, #FEF3C7, #FBBF24)',
  },
  {
    name: '张浩', title: '助理科学编程经理',
    bio: '2022届南京中医药大学医学信息工程，拥有4年临床数据科学工作经验，深耕临床数据中台搭建，赋能DM全流程智能化建设。主导完成集中化离群值核查、质疑批量管理、心电图智能编码等业务系统。深度探索机器学习、深度学习、Dify与Fastgpt LLM工作流平台、AI-Agent的业务落地。受邀2025CMAC年会讲师，2026CMAC年中会议讲师。',
    tags: ['Dify', 'AI Agent', 'LLM', 'FastGPT', 'Python'],
    gradient: 'linear-gradient(135deg, #D1FAE5, #34D399)',
  },
  {
    name: '周锦阳', title: '科学编程员',
    bio: '2022届中国药科大学信息管理与信息系统专业。主要负责部门自研平台ClinMatrix的开发、部署与维护，以及DRS管理平台开发，承担临床项目指标库整理与维护。具备较好的技术学习和代码编程能力，注重代码质量和问题闭环。',
    tags: ['Vue3', 'Django', 'ClinMatrix', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #EDE9FE, #8B5CF6)',
  },
  {
    name: '刘伟豪', title: '助理科学编程经理',
    bio: '2022届中国药科大学药学理科基地专业，主要负责数据可视化推进与自动化算法技术的落地应用。在Python数据生态、ClickHouse性能调优及前端网页制作方面拥有扎实的技术功底。近期负责推进原SAS程序向Python迭代和GitLab自动部署工作。',
    tags: ['Python', 'ClickHouse', 'SAS Viya', 'GitLab CI', '可视化'],
    gradient: 'linear-gradient(135deg, #FCE7F3, #F472B6)',
  },
  {
    name: '宋秋池', title: '科学编程员',
    bio: '2022届南京中医药大学计算机科学与技术专业毕业。主要工作是为临床试验数据管理赋能，聚焦底层数据梳理与入库，如ECOA数据同步、sFTP数据传输、HIS系统数据传输、数据库间数据传输等。熟悉多种编程语言、数据库、主流AI工具及Docker部署，擅长用AI与自动化工作流替代重复劳动。',
    tags: ['Docker', 'sFTP', 'ECOA', 'Python', 'AI自动化'],
    gradient: 'linear-gradient(135deg, #E0F2FE, #0EA5E9)',
  },
  {
    name: '王明鑫', title: '助理科学编程经理',
    bio: '负责飞书多维表格与SAS Viya的自动化集成，开发Viya Report自动化配置工具。推进Study Report V3.0指标体系升级，深入研究Digital Data Flow在临床数据科学中的应用。',
    tags: ['飞书API', 'SAS Viya', 'Digital Data Flow', '自动化'],
    gradient: 'linear-gradient(135deg, #FEF3C7, #F59E0B)',
  },
  {
    name: '王若书', title: '科学编程经理',
    bio: '大连医科大学2013届临床药学专业、2018届药理学专业，2021年毕业后校招入职。2022年由数据管理员转岗为科学编程员，具有一年多的数据管理经验。熟练掌握SAS、SQL编程及Viya、Superset可视化技术，熟悉Python、CSS编程、影刀RPA技术及AI工具。',
    tags: ['SAS', 'SQL', 'Superset', 'SAS Viya', 'RPA'],
    gradient: 'linear-gradient(135deg, #D1FAE5, #059669)',
  },
]

export const topics: Topic[] = [
  { date: '2025-03-31', author: '张浩', title: 'LLM本地化部署 + Dify', tags: ['AI', 'LLM', 'Dify'] },
  { date: '2025-04-30', author: '王若书', title: 'Dataset-json 数据标准研究', tags: ['数据标准', 'JSON'] },
  { date: '2025-03-07', author: '王明鑫', title: 'Digital Data Flow 临床数据流', tags: ['数据流', 'DDC'] },
  { date: '2025-04-30', author: '王明鑫', title: '飞书API + SAS Viya 数据读写', tags: ['飞书', 'SAS Viya', 'API'] },
  { date: '2021-12-06', author: '张力弦', title: 'IRC与EDC疗效评估对比', tags: ['IRC', 'EDC', '疗效评估'] },
]

export const trainings: Training[] = [
  {
    date: '2025-06-01', instructor: '张力弦', title: 'Visual Analytics 可视化教程',
    series: '6期系列课程',
    children: [
      { date: '第1期', instructor: '张力弦', title: '加载数据与基础对象的使用' },
      { date: '第2期', instructor: '', title: '数据窗格与点图、柱状图、线图' },
      { date: '第3期', instructor: '', title: '条形图、蝴蝶图、瀑布图、盒形图、饼图' },
      { date: '第4期', instructor: '', title: '容器使用与序列图、进度图、针状图' },
      { date: '第5期', instructor: '', title: '参数、控件对象与部分图表' },
      { date: '第6期', instructor: '', title: '地图对象和内容对象' },
    ],
  },
  { date: '2026-04-03', instructor: '张浩', title: 'SKILL概念与定制' },
  { date: '2026-04-12', instructor: '王明鑫', title: 'Study Report V3.0 升级与指标说明' },
  { date: '2025-05-11', instructor: '王明鑫', title: '飞书多维表格 Viya Report 自动化配置工具' },
]

export const posterEvents: PosterEvent[] = [
  { date: '2025-06', title: 'SAS 生命科学行业会议', poster: 'SAS生命科学行业会议_SAS_20250623.JPG' },
  { date: '2026-04', title: '临床试验 AI 应用场景秀', poster: '临床试验AI应用场景秀_dTrial_20260420.JPG' },
  { date: '2026-06', title: 'Vibe Coding 在临床试验典型应用场景的渐进式培训', poster: 'Vibe Coding在临床试验典型应用场景的渐进式培训_CMAC_20260625.jpg' },
  { date: '2026-01', title: '智能技术与 RBQM 的实战赋能与价值闭环', poster: '智能技术与RBQM的实战赋能与价值闭环_CMAC_20260122.jpg' },
  { date: '2025-03', title: 'AI 赋能临床数据科学：机遇与挑战', poster: 'AI赋能临床数据科学：机遇与挑战_CDSG_20250308.jpg' },
]

export const timelineItems: TimelineEvent[] = [
  {
    title: '过去 · CDM 传统模式',
    description: '人工从不同系统导出数据，格式与字段表述差异大，数据一致性核查复杂度高。CDM 忙于重复性导出、清洗与转换事务。',
    color: '#F472B6',
  },
  {
    title: '变革 · 基础设施重构',
    description: '引入数据仓库（ClickHouse + PostgreSQL）将数据问题前置处理。搭建现代化 IDE 协作平台，集成 AI 模型与插件能力。建设 sFTPGo 等数据传输平台，实现高效外部数据交换。',
    color: '#FBBF24',
  },
  {
    title: '未来 · CDS 数据科学',
    description: 'CDS 聚焦高维度数据分析：项目进展与质量分析、整体风险分析。依托生产级开发平台，利用 AI 将抽象想法落实为具体原型工具，最大化挖掘数据价值。',
    color: '#8B5CF6',
  },
]

export const techLayers: TechLayer[] = [
  {
    name: '应用层 Application',
    color: '#8B5CF6',
    items: [
      { name: 'Apache Superset', desc: '交互式 BI 仪表盘' },
      { name: 'SAS Visual Analytics', desc: '企业级可视化分析' },
      { name: 'ClinMatrix (Vue3+Django)', desc: '自研 Web 应用平台' },
      { name: 'SAS Viya 分析', desc: '云端统计计算引擎' },
      { name: '定制报表 Custom', desc: '项目级定制报表' },
      { name: '指标体系 Metrics', desc: '核心业务指标管理' },
      { name: '飞书 API 集成', desc: '自动化消息与数据同步' },
    ],
  },
  {
    name: '管道层 Data Pipeline',
    color: '#F59E0B',
    items: [
      { name: 'SAS Viya 计算引擎', desc: '分布式分析计算' },
      { name: 'Dolphin Scheduler', desc: 'ELT 任务调度编排' },
      { name: 'EDC/IRC/IRT', desc: '临床业务系统集成' },
      { name: 'eCoding/eCOA/CTMS', desc: '多源数据接入' },
    ],
  },
  {
    name: '数据层 Data Storage',
    color: '#10B981',
    items: [
      { name: 'ClickHouse 数仓', desc: '高性能列式 OLAP 引擎' },
      { name: 'PostgreSQL', desc: '高可靠主数据与配置存储' },
    ],
  },
  {
    name: '工具链 Toolchain',
    color: '#64748B',
    items: [
      { name: 'GitLab / GitHub', desc: '版本管理与 CI/CD' },
      { name: 'VS Code / SAS Viya', desc: '开发环境' },
      { name: 'Python / TypeScript / SAS', desc: '编程语言' },
      { name: 'ECharts / Python Viz / GTL', desc: '可视化技术' },
      { name: 'Claude Code', desc: 'AI 辅助编程' },
    ],
  },
]
```

- [ ] **Step 2: 创建 src/components/shared/SectionTitle.vue**

```vue
<template>
  <div class="flex items-center gap-3 mb-10">
    <div class="w-3 h-3 rounded-full flex-shrink-0" :style="{ backgroundColor: color }" />
    <h2 class="font-heading text-2xl font-extrabold text-slate-800 m-0">{{ title }}</h2>
    <div class="h-0.5 flex-1 rounded-full" :style="{ backgroundColor: color }" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; color: string }>()
</script>
```

- [ ] **Step 3: 验证编译** — `pnpm build`
- [ ] **Step 4: Commit** — `git add -A && git commit -m "feat: add content data file and SectionTitle shared component"`

---

### Task 3: 布局组件 — AppHeader + AppFooter

**Files:**
- Create: `src/components/layout/AppHeader.vue`, `src/components/layout/AppFooter.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: 创建 AppHeader.vue** — sticky 导航栏，左侧 CDS Logo（Outfit violet），右侧 6 个锚点链接（成员/架构/模式/课题/培训/会议），IntersectionObserver 实现滚动高亮
- [ ] **Step 2: 创建 AppFooter.vue** — 深色背景页脚，品牌标语 + 四色圆点装饰
- [ ] **Step 3: 更新 App.vue** — 引入 AppHeader、AppFooter，占位 section 容器
- [ ] **Step 4: 验证** — `pnpm dev`，确认导航高亮和锚点跳转
- [ ] **Step 5: Commit**

---

### Task 4: HeroSection 首屏

**Files:**
- Create: `src/components/hero/HeroSection.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: 创建 HeroSection.vue** — 左文右图布局，amber 标签胶囊、Outfit 大标题、CTA 按钮（了解团队 + 浏览架构）、右侧 pink blob 装饰（🧬图标）、底部彩色圆点
- [ ] **Step 2: 更新 App.vue** — 添加 HeroSection
- [ ] **Step 3: 验证** — `pnpm dev`
- [ ] **Step 4: Commit**

---

### Task 5: MembersSection（成员走马灯）

**Files:**
- Create: `src/components/members/MembersSection.vue`, `src/components/members/MemberCard.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: 创建 MemberCard.vue** — 头像圆（渐变色）、姓名、职位、简介（line-clamp-3）、技能标签
- [ ] **Step 2: 创建 MembersSection.vue** — n-carousel，响应式 slidesPerView（3/2/1）
- [ ] **Step 3: 更新 App.vue** — 引入 MembersSection
- [ ] **Step 4: 验证** — `pnpm dev`，走马灯交互 + 响应式
- [ ] **Step 5: Commit**

---

### Task 6: TechSection（技术架构）

**Files:**
- Create: `src/components/tech/TechSection.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: 创建 TechSection.vue** — 四层卡片 + n-popover 热点
- [ ] **Step 2: 更新 App.vue**
- [ ] **Step 3: 验证** — `pnpm dev`
- [ ] **Step 4: Commit**

---

### Task 7: WorkModeSection（时间线）

**Files:**
- Create: `src/components/workmode/WorkModeSection.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: 创建 WorkModeSection.vue** — n-timeline 三个叙事节点
- [ ] **Step 2: 更新 App.vue**
- [ ] **Step 3: 验证**
- [ ] **Step 4: Commit**

---

### Task 8: 知识板块（课题/培训/会议）

**Files:**
- Create: `src/components/knowledge/TopicsSection.vue`, `src/components/knowledge/TrainingSection.vue`, `src/components/knowledge/EventsSection.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: 创建 TopicsSection.vue** — violet 主题卡片网格
- [ ] **Step 2: 创建 TrainingSection.vue** — mint 主题，n-collapse 折叠系列课程
- [ ] **Step 3: 创建 EventsSection.vue** — amber 主题，n-image 预览海报
- [ ] **Step 4: 更新 App.vue**
- [ ] **Step 5: 验证**
- [ ] **Step 6: Commit**

---

### Task 9: 动画打磨 + 最终集成

**Files:**
- Modify: `src/App.vue`

- [ ] **Step 1: 添加 IntersectionObserver 滚动入场动画** — opacity + translateY 过渡
- [ ] **Step 2: 验证动画 + 最终构建** — `pnpm build`
- [ ] **Step 3: Commit**

---

### Task 10: GitHub Pages 部署配置

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: 创建 GitHub Actions 工作流** — pnpm build → deploy to Pages
- [ ] **Step 2: 配置 Vite base 路径**
- [ ] **Step 3: Commit**

---

### Task 11: 最终检查

- 完整构建验证
- 移动端响应式检查
- 无障碍检查（Tab 键、焦点态、alt 属性）
- 创建 GitHub 仓库并推送
