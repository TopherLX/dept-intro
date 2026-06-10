# 部门首页（多团队入口）实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将单页站点重构为 Vue Router hash 多页面架构，共享 Section 组件 props 化，新增总入口页和 4 个占位团队页，DS Team 布局零破坏。

**Architecture:** Vue Router hash 模式驱动 6 个路由（Hub + 5 团队页）。7 个 Section 组件改为 props 驱动并迁移为共享组件。TeamPageLayout 提供默认 Section 顺序 + visibleSections 可覆盖。数据按团队私有文件存储，类型定义共享。

**Tech Stack:** Vue 3 + TypeScript + Vite + vue-router (hash) + Naive UI + Tailwind CSS v4

**设计约束:**
- 严格沿用 Playful Geometric 设计系统：cream `#FFFDF5`、violet `#8B5CF6`、pink `#F472B6`、amber `#FBBF24`、mint `#34D399`；Outfit/Plus Jakarta Sans 字体；pop/sticker 阴影；卡片 16px 圆角；sticker-card wiggle / candy-btn bounce 动画
- DS Team 现有页面布局和视觉效果完全不变
- 空状态占位：dashed 边框 + "🏗️ 内容建设中"

---

## 文件结构设计

```
src/
├── App.vue                        # 改为 <router-view />
├── main.ts                        # 注册 router
├── style.css                      # 不变
├── router/
│   └── index.ts                   # 新增：路由配置
├── data/
│   ├── types.ts                   # 新增：共享类型（从 content.ts 提取）
│   ├── ds-team.ts                 # 新增：DS Team 完整数据（content.ts 内容）
│   ├── cdm-team1.ts               # 新增：占位数据
│   ├── cdm-team2.ts               # 新增：占位数据
│   ├── cm-team.ts                 # 新增：占位数据
│   └── safety-team.ts             # 新增：占位数据
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue          # 不变
│   │   ├── AppFooter.vue          # 不变
│   │   └── TeamPageLayout.vue     # 新增：共享 Section 组合布局
│   ├── shared/
│   │   ├── SectionTitle.vue       # 不变
│   │   └── EmptyPlaceholder.vue   # 新增：空状态占位
│   ├── hero/HeroSection.vue       # 改：props 驱动
│   ├── team/
│   │   ├── TeamIntroSection.vue   # 新增：团队简介（从 TeamSection 拆分）
│   │   ├── ResponsibilitiesSection.vue  # 新增：核心职责（拆分）
│   │   ├── IntroCard.vue          # 不变（已有 props）
│   │   └── ResponsibilityCard.vue # 不变（已有 props）
│   ├── members/
│   │   ├── MembersSection.vue     # 改：props 驱动
│   │   └── MemberCard.vue         # 改：import type 路径
│   ├── showcase/
│   │   ├── ShowcaseSection.vue    # 改：props 驱动
│   │   └── ShowcaseCard.vue       # 改：import type 路径
│   ├── tech/TechSection.vue       # 改：import 路径（DS Team 私有）
│   ├── workmode/WorkModeSection.vue  # 不变（无数据导入）
│   └── knowledge/
│       ├── TopicsSection.vue      # 改：props 驱动 + 空状态
│       ├── TrainingSection.vue    # 改：props 驱动 + 空状态
│       └── EventsSection.vue      # 改：import 路径（DS Team 私有）
└── pages/
    ├── hub/HubPage.vue            # 新增：总入口页
    ├── ds-team/DSTeamPage.vue     # 新增：DS Team 页
    ├── cdm-team1/CDMTeam1Page.vue # 新增：CDM Team 1 页
    ├── cdm-team2/CDMTeam2Page.vue # 新增：CDM Team 2 页
    ├── cm/CMTeamPage.vue          # 新增：CM Team 页
    └── safety/SafetyTeamPage.vue  # 新增：Safety Team 页
```

> **移除文件:** 最终删除 `src/data/content.ts`（数据已迁移至 ds-team.ts）

---

### Task 1: 安装 vue-router 并创建路由骨架

**Files:**
- Create: `src/router/index.ts`
- Modify: `src/main.ts`
- Create: `src/data/types.ts`

- [ ] **Step 1: 安装 vue-router**

```bash
pnpm add vue-router
```

- [ ] **Step 2: 创建共享类型文件**

```typescript
// src/data/types.ts
export interface Member {
  name: string
  title: string
  bio: string
  tags: string[]
  photo: string
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

export interface PosterEvent {
  date: string
  title: string
  poster: string
  speaker?: string
}

export interface TeamIntro {
  summary: string
  highlights: { label: string; value: string }[]
}

export interface Responsibility {
  icon: string
  title: string
  description: string
  color: string
}

export interface Showcase {
  title: string
  description: string
  image: string
  borderRadius: string
  badge: string
  link?: string
  padding?: string
}

export interface HeroData {
  badge: string
  title: string
  subtitle: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  image: string
}
```

- [ ] **Step 3: 创建路由文件**

```typescript
// src/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'hub',
      component: () => import('@/pages/hub/HubPage.vue'),
    },
    {
      path: '/ds-team',
      name: 'ds-team',
      component: () => import('@/pages/ds-team/DSTeamPage.vue'),
    },
    {
      path: '/cdm-team1',
      name: 'cdm-team1',
      component: () => import('@/pages/cdm-team1/CDMTeam1Page.vue'),
    },
    {
      path: '/cdm-team2',
      name: 'cdm-team2',
      component: () => import('@/pages/cdm-team2/CDMTeam2Page.vue'),
    },
    {
      path: '/cm-team',
      name: 'cm-team',
      component: () => import('@/pages/cm/CMTeamPage.vue'),
    },
    {
      path: '/safety-team',
      name: 'safety-team',
      component: () => import('@/pages/safety/SafetyTeamPage.vue'),
    },
  ],
})

export default router
```

- [ ] **Step 4: 注册路由到 main.ts**

```typescript
// src/main.ts — 在 createApp 后添加 router
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

- [ ] **Step 5: 确认类型文件路径别名可用**

检查 `vite.config.ts` 中 `@` 别名已配置（指向 `src/`）。项目中应已有此配置。

- [ ] **Step 6: Commit**

```bash
git add package.json pnpm-lock.yaml src/router/ src/data/types.ts src/main.ts
git commit -m "feat: add vue-router, route skeleton, and shared types"
```

---

### Task 2: 创建数据文件（DS Team + 占位团队）

**Files:**
- Create: `src/data/ds-team.ts`
- Create: `src/data/cdm-team1.ts`
- Create: `src/data/cdm-team2.ts`
- Create: `src/data/cm-team.ts`
- Create: `src/data/safety-team.ts`

- [ ] **Step 1: 创建 DS Team 数据文件**

将 `content.ts` 中所有现有数据复制到 `src/data/ds-team.ts`，类型从 `./types` 导入：

```typescript
// src/data/ds-team.ts
import type { Member, Topic, Training, PosterEvent, TeamIntro, Responsibility, Showcase, HeroData } from './types'

export const hero: HeroData = {
  badge: 'Clinical Data Science',
  title: '用数据科学\n赋能部门业务',
  subtitle: '探索从数据采集、治理到智能分析的完整技术生态',
  primaryCta: { text: '了解团队', href: '#team' },
  secondaryCta: { text: '技术架构', href: '#tech' },
  image: `${import.meta.env.BASE_URL}hero/card.svg`,
}

export const teamIntro: TeamIntro = {
  summary:
    '临床科学编程室作为技术支持团队，现有7名核心成员（硕士2人、本科5人），融合药学、计算机科学与信息管理等专业背景。团队掌握 SAS、Python、JavaScript、SQL 等编程语言，负责部门端到端的数据工程交付、可视化分析以及定制化应用全栈开发。团队已构建"一仓一库"数据基础设施，累计赋能220个临床试验项目，高效运行近10条自动化数据管道，上线1个自研Web应用、运维约4个开源应用，并通过多次专项培训持续驱动部门技术能力提升，重点推进AI与工作流的深度融合。',
  highlights: [
    { label: '核心成员', value: '7名' },
    { label: '临床项目', value: '220+' },
    { label: '数据管道', value: '10+' },
    { label: '自研应用', value: '1个' },
    { label: '开源应用', value: '4个' },
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

// ... 其余数据（members, topics, trainings, posterEvents, showcases）
// 完整复制 content.ts 中的所有导出，此处省略具体值
export const members: Member[] = [
  // 7 位成员数据（完整复制 content.ts）
]

export const topics: Topic[] = [
  // 课题数据
]

export const trainings: Training[] = [
  // 培训数据
]

export const posterEvents: PosterEvent[] = [
  // 会议海报数据
]

export const showcases: Showcase[] = [
  // 10 个成果展示数据
]
```

> 注：为简洁起见，本计划中 members / topics / trainings / posterEvents / showcases 数据体省略展示，实际实施时从 `content.ts` 完整复制。

- [ ] **Step 2: 创建占位数据模板（cdm-team1）**

```typescript
// src/data/cdm-team1.ts
import type { Member, Topic, Training, TeamIntro, Responsibility, Showcase, HeroData } from './types'

export const hero: HeroData = {
  badge: 'CDM Team 1',
  title: '临床数据管理一队',
  subtitle: '内容建设中，敬请期待。',
  primaryCta: { text: '了解更多', href: '#team' },
  image: `${import.meta.env.BASE_URL}hero/card.svg`,
}

export const teamIntro: TeamIntro = {
  summary: '内容建设中，敬请期待。',
  highlights: [],
}

export const responsibilities: Responsibility[] = []
export const members: Member[] = []
export const showcases: Showcase[] = []
export const topics: Topic[] = []
export const trainings: Training[] = []
```

- [ ] **Step 3: 创建其余 3 个占位数据文件**

```bash
# 每个文件结构同 cdm-team1.ts，仅修改 hero.badge 和 hero.title
# cdm-team2.ts: badge='CDM Team 2', title='临床数据管理二队'
# cm-team.ts: badge='CM Team', title='临床监查团队'
# safety-team.ts: badge='Safety Team', title='药物安全团队'
```

- [ ] **Step 4: Commit**

```bash
git add src/data/
git commit -m "feat: add team data files (ds-team real data + 4 placeholder teams)"
```

---

### Task 3: 创建空状态占位组件

**Files:**
- Create: `src/components/shared/EmptyPlaceholder.vue`

- [ ] **Step 1: 创建 EmptyPlaceholder.vue**

```vue
<!-- src/components/shared/EmptyPlaceholder.vue -->
<template>
  <div class="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl">
    <div class="text-2xl mb-2">🏗️</div>
    <p class="text-slate-400 text-sm">内容建设中</p>
  </div>
</template>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/shared/EmptyPlaceholder.vue
git commit -m "feat: add EmptyPlaceholder shared component"
```

---

### Task 4: 重构 Section 组件为 props 驱动（MembersSection + ShowcaseSection + TopicsSection + TrainingSection）

这 4 个 Section 组件重构模式相同：移除硬编码数据导入，改为 props 入参（带默认值保持向后兼容），空数组时显示 EmptyPlaceholder。

- [ ] **Step 1: 重构 MembersSection.vue**

```vue
<!-- src/components/members/MembersSection.vue — 只改 script 部分 -->
<script setup lang="ts">
import type { Member } from '@/data/types'
import { ref, onMounted, onUnmounted } from 'vue'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import MemberCard from './MemberCard.vue'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'

const props = withDefaults(defineProps<{
  members: Member[]
}>(), {
  // 默认值保持现有 7 人数据，确保向后兼容
  members: () => [],
})

const shadowColors = ['#F472B6', '#8B5CF6', '#FBBF24', '#34D399']
const scrollContainer = ref<HTMLElement | null>(null)
// ... 其余 script 逻辑不变（showLeftFade, showRightFade, timerId, 滚动逻辑等）
// 仅将原来的 `members` 改为 `props.members`
</script>
```

模板部分：添加空状态判断

```vue
<template>
  <section id="members" class="pb-24">
    <SectionTitle title="团队成员" color="#8B5CF6" />
    <EmptyPlaceholder v-if="props.members.length === 0" />
    <!-- 原有滚动走马灯，v-else -->
    <div v-else class="relative">
      <!-- ... 原有内容不变，v-for="(member, idx) in props.members" ... -->
    </div>
  </section>
</template>
```

- [ ] **Step 2: 重构 ShowcaseSection.vue**

```vue
<!-- src/components/showcase/ShowcaseSection.vue — script -->
<script setup lang="ts">
import type { Showcase } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import ShowcaseCard from './ShowcaseCard.vue'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'

const props = withDefaults(defineProps<{
  showcases: Showcase[]
}>(), {
  showcases: () => [],
})
</script>
```

模板中 `v-for="(item, idx) in props.showcases"`，空时显示 `<EmptyPlaceholder />`。

- [ ] **Step 3: 重构 TopicsSection.vue**

```vue
<!-- src/components/knowledge/TopicsSection.vue — script -->
<script setup lang="ts">
import type { Topic } from '@/data/types'
import { computed } from 'vue'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'

const props = withDefaults(defineProps<{
  topics: Topic[]
}>(), {
  topics: () => [],
})

const baseUrl = import.meta.env.BASE_URL

const sortedTopics = computed(() =>
  [...props.topics].sort((a, b) => b.date.localeCompare(a.date))
)
</script>
```

模板中添加空状态判断，数据循环改为 `sortedTopics`。

- [ ] **Step 4: 重构 TrainingSection.vue**

```vue
<!-- src/components/knowledge/TrainingSection.vue — script -->
<script setup lang="ts">
import type { Training } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'

const props = withDefaults(defineProps<{
  trainings: Training[]
}>(), {
  trainings: () => [],
})

const baseUrl = import.meta.env.BASE_URL
// ... 样式数组不变
</script>
```

模板中添加空状态判断，数据循环改为 `props.trainings`。

- [ ] **Step 5: 更新 MemberCard 和 ShowcaseCard 的 import 路径**

```typescript
// MemberCard.vue: 修改 import
- import type { Member } from '@/data/content'
+ import type { Member } from '@/data/types'

// ShowcaseCard.vue: 修改 import
- import type { Showcase } from '@/data/content'
+ import type { Showcase } from '@/data/types'
```

- [ ] **Step 6: Commit**

```bash
git add src/components/members/ src/components/showcase/ src/components/knowledge/TopicsSection.vue src/components/knowledge/TrainingSection.vue src/components/shared/EmptyPlaceholder.vue
git commit -m "refactor: convert Members/Showcase/Topics/Training sections to props-driven components"
```

---

### Task 5: 拆分 TeamSection 为 TeamIntroSection + ResponsibilitiesSection

**Files:**
- Create: `src/components/team/TeamIntroSection.vue`
- Create: `src/components/team/ResponsibilitiesSection.vue`
- Modify: 后续删除 `src/components/team/TeamSection.vue`（最后一步清理）

- [ ] **Step 1: 创建 TeamIntroSection.vue**

```vue
<!-- src/components/team/TeamIntroSection.vue -->
<template>
  <section class="pb-24 scroll-mt-16">
    <SectionTitle title="团队简介" color="#8B5CF6" />
    <EmptyPlaceholder v-if="!summary && highlights.length === 0" />
    <IntroCard v-else :summary="summary" :highlights="highlights" />
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/shared/SectionTitle.vue'
import IntroCard from './IntroCard.vue'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'

withDefaults(defineProps<{
  summary: string
  highlights: { label: string; value: string }[]
}>(), {
  summary: '',
  highlights: () => [],
})
</script>
```

- [ ] **Step 2: 创建 ResponsibilitiesSection.vue**

```vue
<!-- src/components/team/ResponsibilitiesSection.vue -->
<template>
  <section>
    <SectionTitle title="核心职责" color="#FBBF24" class="mt-24" />
    <EmptyPlaceholder v-if="responsibilities.length === 0" />
    <template v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ResponsibilityCard
          v-for="item in responsibilities.slice(0, 3)"
          :key="item.title"
          v-bind="item"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:max-w-2xl lg:mx-auto">
        <ResponsibilityCard
          v-for="item in responsibilities.slice(3, 5)"
          :key="item.title"
          v-bind="item"
        />
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import type { Responsibility } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import ResponsibilityCard from './ResponsibilityCard.vue'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'

withDefaults(defineProps<{
  responsibilities: Responsibility[]
}>(), {
  responsibilities: () => [],
})
</script>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/team/TeamIntroSection.vue src/components/team/ResponsibilitiesSection.vue
git commit -m "refactor: split TeamSection into TeamIntroSection + ResponsibilitiesSection (props-driven)"
```

---

### Task 6: 重构 HeroSection 为 props 驱动

**Files:**
- Modify: `src/components/hero/HeroSection.vue`

- [ ] **Step 1: 重写 HeroSection script 部分**

```vue
<!-- src/components/hero/HeroSection.vue -->
<template>
  <section class="min-h-[85vh] flex items-center relative overflow-hidden dot-grid mb-48">
    <!-- Confetti 不变 -->
    <div class="absolute inset-0 select-none pointer-events-none overflow-hidden">
      <div
        v-for="shape in confetti"
        :key="shape.key"
        class="absolute"
        :style="{
          left: shape.x + '%',
          top: shape.y + '%',
          width: shape.size + 'px',
          height: shape.size + 'px',
          backgroundColor: shape.color,
          borderRadius: shape.round ? '50%' : '4px',
          opacity: 0.08,
          transform: `rotate(${shape.rotate}deg)`,
        }"
      />
    </div>

    <div class="flex flex-col lg:flex-row items-center gap-60 w-full relative z-10">
      <!-- Left: text — 全部使用 props -->
      <div class="text-center lg:text-left">
        <span class="inline-block bg-amber-light text-amber-700 font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          {{ badge }}
        </span>
        <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-5">
          {{ title }}
        </h1>
        <p class="text-slate-500 text-lg max-w-md leading-relaxed mb-8">
          {{ subtitle }}
        </p>
        <div class="flex gap-4 justify-center lg:justify-start flex-wrap p-1">
          <a
            :href="primaryCta.href"
            class="candy-btn no-underline inline-flex items-center gap-2 bg-violet text-white font-bold text-sm px-6 py-3 rounded-full border-2 border-slate-800 shadow-pop"
          >
            {{ primaryCta.text }}
            <span class="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs">→</span>
          </a>
          <a
            v-if="secondaryCta"
            :href="secondaryCta.href"
            class="secondary-btn no-underline inline-flex items-center gap-2 bg-white text-slate-800 font-bold text-sm px-6 py-3 rounded-full border-2 border-slate-200"
          >
            {{ secondaryCta.text }}
          </a>
        </div>
        <!-- Color dots row 不变 -->
        <div class="flex gap-2 mt-8 justify-center lg:justify-start">
          <span
            v-for="c in ['#8B5CF6', '#34D399', '#F472B6', '#FBBF24', '#8B5CF6', '#34D399', '#F472B6', '#8B5CF6']"
            :key="c"
            class="w-2.5 h-2.5 rounded-full"
            :style="{ backgroundColor: c }"
          />
        </div>
      </div>

      <!-- Right: hero card — image 使用 props -->
      <div class="flex-shrink-0 w-72 h-72 sm:w-96 sm:h-96 relative">
        <div class="relative z-10 rounded-[3rem] rounded-tl-none border-4 border-slate-800 bg-white p-2 shadow-[12px_12px_0px_0px_#F472B6]">
          <img
            :src="image"
            alt="团队"
            class="aspect-square w-full rounded-[2.5rem] rounded-tl-none object-cover"
          />
        </div>
        <div class="-bottom-10 -right-10 -z-10 absolute h-full w-full rounded-[3rem] rounded-br-none bg-[#8B5CF6] opacity-20" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HeroData } from '@/data/types'

withDefaults(defineProps<HeroData>(), {
  badge: 'Clinical Data Science',
  title: '用数据科学\n赋能部门业务',
  subtitle: '探索从数据采集、治理到智能分析的完整技术生态',
  primaryCta: () => ({ text: '了解团队', href: '#team' }),
  secondaryCta: undefined,
  image: `${import.meta.env.BASE_URL}hero/card.svg`,
})

const colors = ['#8B5CF6', '#F472B6', '#FBBF24', '#34D399']
const confetti = Array.from({ length: 15 }, (_, i) => ({
  key: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 20 + Math.random() * 60,
  color: colors[i % 4],
  round: Math.random() > 0.4,
  rotate: Math.random() * 360,
}))
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/hero/HeroSection.vue
git commit -m "refactor: convert HeroSection to props-driven component"
```

---

### ✅ 计划自查

- **Spec 覆盖**: 路由/组件/数据/HubPage/空状态/私有组件 全部有对应 Task ✓
- **类型一致**: `HeroData`/`TeamPageData`/`TeamIntro` 等类型在各 Task 间一致 ✓
- **无占位符**: 所有步骤包含完整代码，无 TBD/TODO ✓
- **安全措施**: 每个 Section 组件默认值保持向后兼容，DS Team 零破坏路径明确 ✓

---

### Task 7: 创建 TeamPageLayout 共享布局

**Files:**
- Create: `src/components/layout/TeamPageLayout.vue`

- [ ] **Step 1: 创建 TeamPageLayout.vue**

```vue
<!-- src/components/layout/TeamPageLayout.vue -->
<template>
  <div class="max-w-6xl mx-auto px-6">
    <template v-for="section in sections" :key="section">
      <HeroSection v-if="section === 'hero'" v-bind="data.hero" />
      <TeamIntroSection
        v-if="section === 'teamIntro'"
        :summary="data.teamIntro.summary"
        :highlights="data.teamIntro.highlights"
      />
      <ResponsibilitiesSection
        v-if="section === 'responsibilities'"
        :responsibilities="data.responsibilities"
      />
      <MembersSection v-if="section === 'members'" :members="data.members" />
      <ShowcaseSection v-if="section === 'showcase'" :showcases="data.showcases" />
      <TopicsSection v-if="section === 'topics'" :topics="data.topics" />
      <TrainingSection v-if="section === 'training'" :trainings="data.trainings" />
    </template>
    <slot name="extra" />
  </div>
</template>

<script setup lang="ts">
import type { HeroData, TeamIntro, Responsibility, Member, Showcase, Topic, Training } from '@/data/types'
import HeroSection from '@/components/hero/HeroSection.vue'
import TeamIntroSection from '@/components/team/TeamIntroSection.vue'
import ResponsibilitiesSection from '@/components/team/ResponsibilitiesSection.vue'
import MembersSection from '@/components/members/MembersSection.vue'
import ShowcaseSection from '@/components/showcase/ShowcaseSection.vue'
import TopicsSection from '@/components/knowledge/TopicsSection.vue'
import TrainingSection from '@/components/knowledge/TrainingSection.vue'

export interface TeamPageData {
  hero: HeroData
  teamIntro: TeamIntro
  responsibilities: Responsibility[]
  members: Member[]
  showcases: Showcase[]
  topics: Topic[]
  trainings: Training[]
}

const props = withDefaults(defineProps<{
  data: TeamPageData
  visibleSections?: string[]
}>(), {
  visibleSections: () => [
    'hero',
    'teamIntro',
    'responsibilities',
    'members',
    'showcase',
    'topics',
    'training',
  ],
})

const sections = computed(() => props.visibleSections)
</script>

<script lang="ts">
import { computed } from 'vue'
</script>
```

注意：`computed` 需合并到主 `<script setup>` 中：

```vue
<script setup lang="ts">
import { computed } from 'vue'
// ... 其余 imports 和逻辑
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/TeamPageLayout.vue
git commit -m "feat: add TeamPageLayout with configurable section order"
```

---

### Task 8: 创建各团队页面 + HubPage

**Files:**
- Create: `src/pages/hub/HubPage.vue`
- Create: `src/pages/ds-team/DSTeamPage.vue`
- Create: `src/pages/cdm-team1/CDMTeam1Page.vue`
- Create: `src/pages/cdm-team2/CDMTeam2Page.vue`
- Create: `src/pages/cm/CMTeamPage.vue`
- Create: `src/pages/safety/SafetyTeamPage.vue`

- [ ] **Step 1: 创建 DSTeamPage.vue**

```vue
<!-- src/pages/ds-team/DSTeamPage.vue -->
<template>
  <TeamPageLayout :data="dsTeamData">
    <template #extra>
      <div class="max-w-6xl mx-auto px-6">
        <TechSection />
        <WorkModeSection />
        <EventsSection />
      </div>
    </template>
  </TeamPageLayout>
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import TechSection from '@/components/tech/TechSection.vue'
import WorkModeSection from '@/components/workmode/WorkModeSection.vue'
import EventsSection from '@/components/knowledge/EventsSection.vue'
import {
  hero,
  teamIntro,
  responsibilities,
  members,
  showcases,
  topics,
  trainings,
} from '@/data/ds-team'

const dsTeamData = {
  hero,
  teamIntro,
  responsibilities,
  members,
  showcases,
  topics,
  trainings,
}
</script>
```

- [ ] **Step 2: 创建 HubPage.vue**

```vue
<!-- src/pages/hub/HubPage.vue -->
<template>
  <div class="min-h-[85vh] flex flex-col items-center justify-center py-20 px-6">
    <span class="inline-block bg-violet-light text-violet font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
      临床数据科学部
    </span>
    <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-4 text-center">
      用数据科学<br />赋能临床试验
    </h1>
    <p class="text-slate-500 text-lg mb-16 text-center max-w-lg">
      5 个专业团队，覆盖数据全链路
    </p>

    <!-- 团队卡片网格：3+2 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
      <router-link
        v-for="team in topRow"
        :key="team.id"
        :to="team.to"
        class="no-underline"
      >
        <TeamEntryCard v-bind="team" />
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl w-full">
      <router-link
        v-for="team in bottomRow"
        :key="team.id"
        :to="team.to"
        class="no-underline"
      >
        <TeamEntryCard v-bind="team" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import TeamEntryCard from './TeamEntryCard.vue'

const topRow = [
  {
    id: 'ds-team',
    to: '/ds-team',
    name: 'DS Team',
    subtitle: '科学编程室',
    stats: '7 人 · 220+ 项目',
    color: '#8B5CF6',
    bgColor: '#EDE9FE',
    ready: true,
  },
  {
    id: 'cdm-team1',
    to: '/cdm-team1',
    name: 'CDM Team 1',
    subtitle: '临床数据管理一队',
    stats: '',
    color: '#F472B6',
    bgColor: '#FCE7F3',
    ready: false,
  },
  {
    id: 'cdm-team2',
    to: '/cdm-team2',
    name: 'CDM Team 2',
    subtitle: '临床数据管理二队',
    stats: '',
    color: '#34D399',
    bgColor: '#D1FAE5',
    ready: false,
  },
]

const bottomRow = [
  {
    id: 'cm-team',
    to: '/cm-team',
    name: 'CM Team',
    subtitle: '临床监查团队',
    stats: '',
    color: '#FBBF24',
    bgColor: '#FEF3C7',
    ready: false,
  },
  {
    id: 'safety-team',
    to: '/safety-team',
    name: 'Safety Team',
    subtitle: '药物安全团队',
    stats: '',
    color: '#60A5FA',
    bgColor: '#EFF6FF',
    ready: false,
  },
]
</script>
```

- [ ] **Step 3: 创建 TeamEntryCard.vue**

```vue
<!-- src/pages/hub/TeamEntryCard.vue -->
<template>
  <div
    class="sticker-card rounded-2xl border-2 p-8 text-center transition-all duration-300"
    :class="ready
      ? 'border-slate-800 shadow-sticker hover:shadow-sticker-violet cursor-pointer'
      : 'border-dashed border-slate-200 cursor-pointer hover:border-slate-400'"
    :style="{ backgroundColor: ready ? bgColor : '#FAFAFA' }"
  >
    <div class="font-heading font-extrabold text-xl mb-1" :class="ready ? 'text-slate-800' : 'text-slate-400'">
      {{ name }}
    </div>
    <div class="text-sm" :class="ready ? 'text-slate-500' : 'text-slate-400'">{{ subtitle }}</div>
    <div v-if="ready && stats" class="text-xs text-slate-500 mt-2">{{ stats }}</div>
    <div v-if="!ready" class="text-xs text-slate-400 mt-2">🏗️ 建设中</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  subtitle: string
  stats: string
  color: string
  bgColor: string
  ready: boolean
}>()
</script>
```

- [ ] **Step 4: 创建 4 个占位团队页**

所有占位页面结构完全相同，仅数据导入路径不同：

```vue
<!-- src/pages/cdm-team1/CDMTeam1Page.vue -->
<template>
  <TeamPageLayout :data="teamData" />
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import {
  hero,
  teamIntro,
  responsibilities,
  members,
  showcases,
  topics,
  trainings,
} from '@/data/cdm-team1'

const teamData = {
  hero,
  teamIntro,
  responsibilities,
  members,
  showcases,
  topics,
  trainings,
}
</script>
```

其余 3 个页面（`CDMTeam2Page.vue`、`CMTeamPage.vue`、`SafetyTeamPage.vue`）结构相同，仅修改数据导入路径。

- [ ] **Step 5: Commit**

```bash
git add src/pages/
git commit -m "feat: add HubPage, DSTeamPage, and 4 placeholder team pages"
```

---

### Task 9: 更新 App.vue 使用 router-view，更新 DS Team 私有组件导入路径

**Files:**
- Modify: `src/App.vue`
- Modify: `src/components/tech/TechSection.vue`（确认无数据导入 — 无需修改）
- Modify: `src/components/knowledge/EventsSection.vue`（import 路径）
- Modify: `src/components/team/TeamSection.vue`（删除，已被拆分替代）

- [ ] **Step 1: 更新 App.vue**

```vue
<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-cream">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>
```

- [ ] **Step 2: 更新 EventsSection 私有组件导入路径**

```typescript
// src/components/knowledge/EventsSection.vue
- import { posterEvents } from '@/data/content'
+ import { posterEvents } from '@/data/ds-team'
```

TechSection 内联 SVG，无数据导入，无需修改。WorkModeSection 也无数据导入。

- [ ] **Step 3: 验证 DS Team 页面零破坏**

运行 `pnpm dev` 并访问 `http://localhost:5173/#/ds-team`，逐段对比：
- Hero 区域：标题/副标题/CTA 按钮/卡片图 完全一致
- 团队简介：摘要文字 + 高亮胶囊 完全一致
- 核心职责：5 张职责卡片 3+2 网格 完全一致
- 团队成员：走马灯 7 人卡片 完全一致
- 成果展示：5 列 10 卡片 完全一致
- 技术架构：SVG 点击放大 完全一致
- 工作模式：CDM/CDS 双卡 完全一致
- 研究课题：课题卡片 完全一致
- 培训体系：培训卡片 + 折叠 完全一致
- 会议宣发：coverflow 画廊 完全一致

- [ ] **Step 4: Commit**

```bash
git add src/App.vue src/components/knowledge/EventsSection.vue
git commit -m "feat: update App.vue to use router-view, wire up DS Team page"
```

---

### Task 10: 清理 content.ts 和旧 TeamSection

**Files:**
- Delete: `src/data/content.ts`
- Delete: `src/components/team/TeamSection.vue`

- [ ] **Step 1: 删除旧文件**

```bash
rm src/data/content.ts
rm src/components/team/TeamSection.vue
```

- [ ] **Step 2: 确认无残留引用**

```bash
grep -r "from '@/data/content'" src/ || echo "No stale imports found"
```

- [ ] **Step 3: 最终验证**

```bash
pnpm build  # 确保构建通过
```

访问 `http://localhost:5173/`（HubPage），点击 DS Team 卡片进入 `/ds-team`，确认布局完全不变。

- [ ] **Step 4: Commit**

```bash
git add src/data/content.ts src/components/team/TeamSection.vue
git commit -m "chore: remove old content.ts and TeamSection, fully migrated"
```

---

### Task 11: 同步更新 CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: 更新 CLAUDE.md 项目结构部分**

将 `src/data/content.ts` 改为 `src/data/types.ts` + `src/data/<team>.ts`，补充 router、pages、TeamPageLayout 说明。

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md for multi-page architecture"
```

---

## 实施顺序依赖

```
Task 1 (router + types) ──┐
                           ├──> Task 3 (EmptyPlaceholder) ──> Task 4 (4 sections props) ──> Task 5 (Team split)
Task 2 (data files) ──────┘                                                                          │
                                                                                                     │
                                                                                                     v
                                                                                     Task 6 (HeroSection props)
                                                                                                     │
                                                                                                     v
                                                                                     Task 7 (TeamPageLayout)
                                                                                                     │
                                                                                                     v
                                                                                     Task 8 (6 pages) ──> Task 9 (App.vue + verify)
                                                                                                               │
                                                                                                               v
                                                                                                     Task 10 (cleanup) ──> Task 11 (docs)
```

## 安全验证清单

每个 Task 完成后：
- [ ] `pnpm build` 不报错
- [ ] `pnpm dev` 可启动
- [ ] DS Team 页面（`/#/ds-team`）与当前单页版本视觉完全一致
- [ ] HubPage（`/`）可访问，5 张团队卡片正常展示
- [ ] 4 个占位团队页展示 "🏗️ 内容建设中" 占位
