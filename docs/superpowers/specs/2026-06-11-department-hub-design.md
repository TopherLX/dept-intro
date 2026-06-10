# 部门首页（多团队入口）设计文档

## 概述

将当前单页团队介绍站点重构为多页面架构，新增总入口页（HubPage），将现有内容归入 DS Team 子页，同时为 CDM Team 1/2、CM Team、Safety Team 创建占位页面。

## 路由结构

Vue Router hash 模式（`createWebHashHistory`）：

| 路径 | 页面 | 数据源 |
|------|------|--------|
| `/` | HubPage 总入口 | 部门总览 |
| `/ds-team` | DS Team（现有内容） | `data/ds-team.ts` |
| `/cdm-team1` | CDM Team 1 | `data/cdm-team1.ts`（占位） |
| `/cdm-team2` | CDM Team 2 | `data/cdm-team2.ts`（占位） |
| `/cm-team` | CM Team | `data/cm-team.ts`（占位） |
| `/safety-team` | Safety Team | `data/safety-team.ts`（占位） |

## 组件架构

### 布局层

- **App.vue**：AppHeader + `<router-view />` + AppFooter
- AppHeader 导航按钮指向 HubPage 及各团队页（或通过 HubPage 入口）

### 共享 Section 组件（props 驱动）

所有组件从 `src/components/` 移至对应目录，改为纯 props 入参：

| 组件 | Props | 空状态 |
|------|-------|--------|
| `HeroSection` | `{ badge, title, subtitle, primaryCta, secondaryCta?, image }` | 无（始终展示） |
| `TeamIntroSection` | `{ summary, highlights }` | `"内容建设中"` 占位 |
| `ResponsibilitiesSection` | `{ responsibilities: Responsibility[] }` | `"🏗️ 内容建设中"` 占位卡片 |
| `MembersSection` | `{ members: Member[] }` | `"🏗️ 内容建设中"` 占位卡片 |
| `ShowcaseSection` | `{ showcases: Showcase[] }` | `"🏗️ 内容建设中"` 占位卡片 |
| `TopicsSection` | `{ topics: Topic[] }` | `"🏗️ 内容建设中"` 占位卡片 |
| `TrainingSection` | `{ trainings: Training[] }` | `"🏗️ 内容建设中"` 占位卡片 |

占位状态统一：dashed 边框卡片，居中显示 "🏗️ 内容建设中"。

### 页面层

```
src/pages/
├── hub/
│   └── HubPage.vue          # 总入口页
├── ds-team/
│   └── DSTeamPage.vue       # 组合共享 Section + 现有私有组件
├── cdm-team1/
│   └── CDMTeam1Page.vue     # 组合共享 Section，可加私有组件
├── cdm-team2/
│   └── CDMTeam2Page.vue
├── cm/
│   └── CMTeamPage.vue
└── safety/
    └── SafetyTeamPage.vue
```

团队页统一使用 TeamPageLayout 组件组合共享 Section，保证各团队页的 Section 顺序和间距一致。每个团队可在自己目录下添加私有组件。

### DS Team 私有组件

除 7 个共享 Section 外，DS Team 额外保留以下私有 Section（不纳入共享池）：
- `TechSection` — 技术架构（SVG + modal 缩放）
- `WorkModeSection` — 工作模式（CDM/CDS 双卡 + 示意图）
- `EventsSection` — 会议宣发（coverflow 画廊）

## 数据结构

```
src/data/
├── types.ts              # 共享类型定义（Member, Topic, Training 等接口，从 content.ts 提取）
├── ds-team.ts            # DS Team 真实数据（现有 content.ts 内容）
├── cdm-team1.ts          # CDM Team 1 占位数据（空数组 + 占位 hero）
├── cdm-team2.ts          # CDM Team 2 占位数据
├── cm-team.ts            # CM Team 占位数据
└── safety-team.ts        # Safety Team 占位数据
```

- 类型定义共享，保证组件契约统一
- 数据文件私有，各团队独立维护

### 占位数据模板

```ts
import type { Member, Topic, Training, Showcase, Responsibility, TeamIntro } from './types'

export const teamIntro: TeamIntro = {
  summary: '内容建设中，敬请期待。',
  highlights: [],
}

export const responsibilities: Responsibility[] = []
export const members: Member[] = []
export const showcases: Showcase[] = []
export const topics: Topic[] = []
export const trainings: Training[] = []

export const hero = {
  badge: 'CDM Team 1',
  title: '临床数据管理一队',
  subtitle: '内容建设中，敬请期待。',
  primaryCta: { text: '了解更多', href: '#team' },
  image: `${import.meta.env.BASE_URL}hero/card.svg`,
}
```

## HubPage 设计

总入口页包含：
- 部门名称 + 一句话概述
- 5 张团队入口卡片（3+2 网格）
- DS Team 卡片展示真实数据（7 人 · 220+ 项目），其他展示 "🏗️ 建设中"
- 点击卡片跳转对应团队页

## TeamPageLayout 组合规范

`TeamPageLayout.vue` 共享布局组件，固定 Section 顺序和间距：

```
<HeroSection v-bind="data.hero" />
<TeamIntroSection v-bind="data.teamIntro" />
<ResponsibilitiesSection :responsibilities="data.responsibilities" />
<MembersSection :members="data.members" />
<ShowcaseSection :showcases="data.showcases" />
<TopicsSection :topics="data.topics" />
<TrainingSection :trainings="data.trainings" />
<!-- 私有 Section 插槽 -->
<slot name="extra" />
```

各团队页只需传入数据对象，无需关心布局。私有内容通过 `<slot name="extra">` 注入（如 DS Team 的 TechSection / WorkModeSection / EventsSection）。

## Section 组件现有耦合分析

| 组件 | 当前状态 | 改动范围 |
|------|----------|----------|
| `HeroSection` | 硬编码所有数据 | 全部改为 props |
| `TeamSection` | 直接导入 `teamIntro` + `responsibilities` | 拆为 TeamIntroSection + ResponsibilitiesSection，改 props |
| `MembersSection` | 直接导入 `members` | 改 props，子组件 MemberCard 不变 |
| `ShowcaseSection` | 直接导入 `showcases` | 改 props，子组件 ShowcaseCard 不变 |
| `TopicsSection` | 直接导入 `topics` | 改 props，加空状态 |
| `TrainingSection` | 直接导入 `trainings` | 改 props，加空状态 |

## 新增依赖

- `vue-router` — 路由

## 不在范围内

- AppHeader 导航改造（后续按需调整）
- 各团队页面的自定义布局（当前统一使用共享 Section 顺序）
- 数据管理后台
