# 添加团队内容指南

当你需要为某个团队（如 CDM Team 1/2、CM Team、Safety Team）填充真实内容时，按此文档操作。

## 所属文件

每个团队对应一个独立数据文件：

| 团队 | 数据文件 | 页面文件 |
|------|----------|----------|
| DS Team | `src/data/ds-team.ts` | `src/pages/ds-team/DSTeamPage.vue` |
| CDM Team 1 | `src/data/cdm-team1.ts` | `src/pages/cdm-team1/CDMTeam1Page.vue` |
| CDM Team 2 | `src/data/cdm-team2.ts` | `src/pages/cdm-team2/CDMTeam2Page.vue` |
| CM Team | `src/data/cm-team.ts` | `src/pages/cm-team/CMTeamPage.vue` |
| Safety Team | `src/data/safety-team.ts` | `src/pages/safety-team/SafetyTeamPage.vue` |

## 数据导出清单

每个数据文件需导出以下 7 个变量，类型定义见 `src/data/types.ts`：

### 1. `hero` — Hero 首屏区

```ts
export const hero: HeroData = {
  badge: '英文标语',              // 胶囊标签
  title: '团队中文名',             // 主标题
  subtitle: '一句话描述',          // 副标题
  primaryCta: { text: '按钮', href: '#team' },    // 主按钮（href 以 # 开头为页内锚点）
  secondaryCta: { text: '按钮', href: '#xxx' },   // 副按钮（可选）
  image: `${import.meta.env.BASE_URL}hero/card.svg`, // 右侧卡片图
}
```

### 2. `teamIntro` — 团队简介

```ts
export const teamIntro: TeamIntro = {
  summary: '团队概况描述文字（1-2 段）',
  highlights: [
    { label: '指标名', value: '数值' },
    // 建议 3-5 个
  ],
}
```

### 3. `responsibilities` — 核心职责（5 个推荐）

```ts
export const responsibilities: Responsibility[] = [
  {
    icon: '📡',              // emoji 图标
    title: '职责名称',
    description: '职责描述',
    color: '#8B5CF6',        // 可选用 violet/pink/mint/amber
  },
  // 建议 5 个
]
```

### 4. `members` — 团队成员

```ts
export const members: Member[] = [
  {
    name: '姓名',
    title: '职位',
    bio: '个人简介',
    tags: ['技能标签1', '技能标签2'],
    photo: 'members/姓名.png',  // 照片放 public/members/ 下
  },
]
```

### 5. `showcases` — 成果展示

```ts
export const showcases: Showcase[] = [
  {
    title: '成果名称',
    description: '简要说明',
    image: 'showcase/xxx.svg',    // Logo 放 public/showcase/ 下
    borderRadius: 'rounded-[2rem] rounded-tr-none',
    badge: '分类标签',
    link: 'https://...',           // 可选
  },
]
```

### 6. `topics` — 研究课题

```ts
export const topics: Topic[] = [
  {
    date: '2026-06-01',           // YYYY-MM-DD 格式
    author: '讲师姓名',            // 需与 members 中的 name 一致，头像自动匹配
    title: '课题标题',
    tags: ['标签1', '标签2'],
  },
]
```

### 7. `trainings` — 培训体系

```ts
export const trainings: Training[] = [
  {
    date: '2026-06-01',           // YYYY-MM-DD 格式
    instructor: '讲师姓名',        // 需与 members 中的 name 一致，头像自动匹配
    title: '培训标题',
    series: '系列课程',            // 可选，有子课程时填写
    children: [                   // 可选，系列课程子项
      { date: '第1期', instructor: '讲师', title: '子课程标题' },
    ],
  },
]
```

## 可选扩展：DS Team 私有组件

DS Team 额外有 3 个私有 Section（`src/pages/ds-team/DSTeamPage.vue` 中通过 `#after-showcase` 插槽注入）：

| 组件 | 文件 | 说明 |
|------|------|------|
| TechSection | `src/components/tech/TechSection.vue` | 内嵌 SVG 技术架构图（数据在组件内） |
| WorkModeSection | `src/components/workmode/WorkModeSection.vue` | CDM/CDS 工作模式对比（数据在组件内） |
| EventsSection | `src/components/knowledge/EventsSection.vue` | 会议宣发海报 coverflow（数据需 `posterEvents` 导出） |

其中 EventsSection 需要数据文件额外导出：

```ts
export const posterEvents: PosterEvent[] = [
  {
    date: '2026-06',
    title: '会议标题',
    poster: 'posters/xxx.jpg',     // 海报放 public/posters/ 下
    speaker: '讲者姓名',           // 可选
  },
]
```

如需其他团队也添加这些私有组件，在其页面文件的 `<TeamPageLayout>` 中加入对应插槽即可。

## 照片/图片存放位置

| 类型 | 路径 | 说明 |
|------|------|------|
| 成员照片 | `public/members/<姓名>.png` | 数据中引用 `members/姓名.png` |
| 成果 Logo | `public/showcase/<xxx>.svg` 或 `.png` | 数据中引用 `showcase/xxx.svg` |
| 会议海报 | `public/posters/<xxx>.jpg` | 数据中引用 `posters/xxx.jpg` |
| Hero 卡片图 | `public/hero/card.svg` | 所有团队共用 |

## 快速启动

1. 打开对应团队的 `src/data/<team>.ts`
2. 将空数组 `[]` 替换为真实数据（参考 `src/data/ds-team.ts` 格式）
3. 保存后 HMR 即时生效，`pnpm dev` 中刷新即可预览
