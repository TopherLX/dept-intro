# 部门简介 & 职位描述 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 Hero 下方、Members 上方新增部门简介 + 核心职责两个 Section，展示科学编程室团队概况与 5 大职责板块。

**Architecture:** 双区分立式。`DepartmentSection.vue` 作为容器组件，内部渲染 `IntroCard.vue`（简介卡片 + 数据胶囊）和 5 张 `ResponsibilityCard.vue`（3+2 网格）。数据集中在 `content.ts` 新增接口中。

**Tech Stack:** Vue 3 + TypeScript + Tailwind CSS v4 + Naive UI（无需新增依赖）

---

### Task 1: 新增数据接口和内容

**Files:**
- Modify: `src/data/content.ts`

- [ ] **Step 1: 在 content.ts 接口区域新增 DepartmentIntro 和 Responsibility 类型**

在 `PosterEvent` 接口后面插入：

```ts
export interface DepartmentIntro {
  summary: string
  highlights: { label: string; value: string }[]
}

export interface Responsibility {
  icon: string
  title: string
  description: string
  color: string
}
```

- [ ] **Step 2: 在 `posterEvents` 数组后面新增数据常量**

```ts
export const departmentIntro: DepartmentIntro = {
  summary:
    '临床科学编程室作为数据技术支持团队，现有7名核心成员（硕士2人、本科5人），融合药学、计算机科学与信息管理等专业背景。团队掌握 SAS、Python、JavaScript、SQL 等编程语言，负责部门端到端的数据工程交付、可视化分析以及定制化应用全栈开发。团队已构建"一仓一库"数据基础设施，累计赋能219个临床试验项目，高效运行近10条自动化数据管道，上线1个自研Web应用、运维约6个开源应用，并通过多次专项培训持续驱动部门技术能力提升，重点推进AI与工作流的深度融合。',
  highlights: [
    { label: '核心成员', value: '7名' },
    { label: '临床项目', value: '219+' },
    { label: '数据管道', value: '近10条' },
    { label: '自研应用', value: '1个' },
    { label: '开源应用', value: '约6个' },
  ],
}

export const responsibilities: Responsibility[] = [
  {
    icon: '📡',
    title: '数据工程与基础设施',
    description:
      '通过数据仓库 ClickHouse 整合 EDC、IRC、IRT、PV、eCOA、CTMS 等业务系统，构建端到端自动化数据管道；依托 SAS Viya 构建合规安全的数据访问平台。',
    color: '#8B5CF6',
  },
  {
    icon: '📈',
    title: '数据分析与决策支持',
    description:
      '深度解构业务逻辑，敏捷迭代报表与指标；搭建项目进度、数据质量等指标体系；依托 SAS Visual Analytics、Apache Superset 及 ClinMatrix Web 平台开发定制化交互看板。',
    color: '#F472B6',
  },
  {
    icon: '🧩',
    title: '应用开发与场景落地',
    description:
      '聚焦高频痛点与人工瓶颈，交付离群值智能检测、心电图智能编码、数据审核工作台等业务应用；积极引入 AI 工具赋能数据管理，降低人工审查成本。',
    color: '#34D399',
  },
  {
    icon: '🖥️',
    title: '开源应用与日常维护',
    description:
      '快速响应部门工具需求，完成多个开源应用的本地化部署；负责日常运维与故障排查，保障系统在业务中稳定运行。',
    color: '#FBBF24',
  },
  {
    icon: '🎓',
    title: '技术沉淀与内部赋能',
    description:
      '保持跟进数据科学领域知识与技术，团队成员先行消化并转换为实际工作技能；通过部门内部技术培训分享编程技巧与工具使用经验，协助提升团队整体效率。',
    color: '#8B5CF6',
  },
]
```

- [ ] **Step 3: 验证 TypeScript 编译**

Run: `pnpm exec vue-tsc --noEmit`
Expected: No new errors related to content.ts.

- [ ] **Step 4: Commit**

```bash
git add src/data/content.ts
git commit -m "feat: add department intro and responsibility data types"
```

---

### Task 2: 创建 IntroCard 组件

**Files:**
- Create: `src/components/department/IntroCard.vue`

- [ ] **Step 1: 创建组件文件**

```vue
<template>
  <div class="sticker-card relative rounded-2xl border-2 border-slate-800 bg-white p-8 shadow-sticker overflow-hidden">
    <!-- Decorative blob -->
    <div class="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-10" style="background-color: #FBBF24;" />
    <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-8" style="background-color: #8B5CF6;" />

    <p class="relative z-10 text-slate-600 text-base leading-relaxed mb-6 max-w-3xl">
      {{ summary }}
    </p>

    <!-- Highlight capsules -->
    <div class="relative z-10 flex flex-wrap gap-3">
      <span
        v-for="(h, idx) in highlights"
        :key="h.label"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border-2 border-slate-200 bg-slate-50 text-slate-700"
      >
        <span
          class="w-2 h-2 rounded-full flex-shrink-0"
          :style="{ backgroundColor: capsuleColors[idx % capsuleColors.length] }"
        />
        {{ h.label }}
        <strong class="text-slate-800">{{ h.value }}</strong>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  summary: string
  highlights: { label: string; value: string }[]
}>()

const capsuleColors = ['#8B5CF6', '#F472B6', '#34D399', '#FBBF24', '#8B5CF6']
</script>
```

- [ ] **Step 2: 验证 TypeScript 编译**

Run: `pnpm exec vue-tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/department/IntroCard.vue
git commit -m "feat: add IntroCard component for department overview"
```

---

### Task 3: 创建 ResponsibilityCard 组件

**Files:**
- Create: `src/components/department/ResponsibilityCard.vue`

- [ ] **Step 1: 创建组件文件**

```vue
<template>
  <div
    class="sticker-card group relative rounded-2xl border-2 border-slate-800 bg-white p-6 shadow-sticker"
  >
    <!-- Icon circle -->
    <div
      class="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4"
      :style="{ backgroundColor: color }"
    >
      {{ icon }}
    </div>

    <h3 class="font-heading text-base font-extrabold text-slate-800 mb-2">{{ title }}</h3>
    <p class="text-sm text-slate-500 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  color: string
}>()
</script>
```

- [ ] **Step 2: 验证 TypeScript 编译**

Run: `pnpm exec vue-tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/department/ResponsibilityCard.vue
git commit -m "feat: add ResponsibilityCard component"
```

---

### Task 4: 创建 DepartmentSection 容器组件

**Files:**
- Create: `src/components/department/DepartmentSection.vue`

- [ ] **Step 1: 创建容器组件**

```vue
<template>
  <section id="department" class="py-24 scroll-mt-16">
    <!-- Section 1: 部门简介 -->
    <SectionTitle title="关于我们" color="#8B5CF6" />
    <IntroCard :summary="departmentIntro.summary" :highlights="departmentIntro.highlights" />

    <!-- Section 2: 核心职责 -->
    <SectionTitle title="核心职责" color="#FBBF24" class="mt-24" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ResponsibilityCard
        v-for="(item, idx) in responsibilities"
        :key="item.title"
        v-bind="item"
        :class="idx === 3 ? 'lg:col-start-2' : ''"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { departmentIntro, responsibilities } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import IntroCard from './IntroCard.vue'
import ResponsibilityCard from './ResponsibilityCard.vue'
</script>
```

注意：下排 2 张卡片通过 `idx === 3` 时加 `lg:col-start-2` 实现居中，第 5 张 (idx=4) 自然跟随到第 3 列。

- [ ] **Step 2: 验证 TypeScript 编译**

Run: `pnpm exec vue-tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/department/DepartmentSection.vue
git commit -m "feat: add DepartmentSection container component"
```

---

### Task 5: 更新 App.vue 注册新 Section

**Files:**
- Modify: `src/App.vue`

- [ ] **Step 1: 添加导入和 sections 数组项**

在 `<script setup>` 中添加 import：

```ts
import DepartmentSection from './components/department/DepartmentSection.vue'
```

在 `sections` 数组头部插入：

```ts
const sections = [
  { id: 'department', component: DepartmentSection },
  { id: 'members', component: MembersSection },
  // ... 其余保持不变
]
```

- [ ] **Step 2: 验证 TypeScript 编译**

Run: `pnpm exec vue-tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/App.vue
git commit -m "feat: add DepartmentSection to page layout"
```

---

### Task 6: 更新 AppHeader 导航

**Files:**
- Modify: `src/components/layout/AppHeader.vue`

- [ ] **Step 1: 在 navItems 数组头部插入 "简介" 项**

```ts
const navItems = [
  { id: 'department', label: '简介' },
  { id: 'members', label: '成员' },
  // ... 其余保持不变
]
```

- [ ] **Step 2: 验证 TypeScript 编译**

Run: `pnpm exec vue-tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/AppHeader.vue
git commit -m "feat: add nav item for department section"
```

---

### Task 7: 启动开发服务器验证

- [ ] **Step 1: 启动 dev server**

Run: `pnpm dev`

- [ ] **Step 2: 浏览器验证清单**

  - [ ] 页面加载后，Hero 下方出现「关于我们」Section
  - [ ] 简介卡片包含完整团队概况段落
  - [ ] 5 个数据胶囊显示正确的数字和颜色圆点
  - [ ] blob 装饰正常渲染（右上 amber + 左下 violet）
  - [ ] 下方出现「核心职责」Section
  - [ ] 5 张职责卡片按 3+2 网格排列（桌面端）
  - [ ] 每张卡片有彩色圆底 emoji + 标题 + 描述
  - [ ] 卡片 hover 时触发 sticker-card wiggle 动画
  - [ ] 导航栏出现「简介」链接，点击可跳转
  - [ ] 滚动时导航高亮正确切换
  - [ ] 中等屏幕 (md) 卡片切换为 2 列
  - [ ] 小屏幕 (sm) 卡片切换为单列

- [ ] **Step 3: 如有视觉问题，修复后重新验证**
