# 部门简介 & 职位描述 设计说明

## 背景

将科学编程室 JD（`docs/科学编程室JD.md`）中的团队概况与核心职责内容集成到网站中，遵循现有 Playful Geometric 设计系统。

## 页面位置

Hero 下方、Members 上方，形成「部门总览 → 团队成员 → ...」的总-分结构。

## 内容结构

### Section 1 — 部门简介

- SectionTitle: `title="关于我们"`, `color="#8B5CF6"` (violet)
- 简介卡片 (sticker card):
  - 团队概况段落（从 JD 第 5 行提取，适当精简）
  - 装饰 blob（amber 半透明圆，右上角）
  - 数据亮点胶囊行：7名核心成员 / 219+ 临床项目 / 近10条数据管道 / 1个自研应用 / 6个开源应用
- 数据来源: `src/data/content.ts` 新增 `departmentIntro` 字段

### Section 2 — 核心职责

- SectionTitle: `title="核心职责"`, `color="#FBBF24"` (amber)
- 5 张 sticker card，3+2 网格（上排 3，下排 2 居中）
- 每张卡片:
  - 彩色圆底 emoji 图标（遵循"图标封在形状里"原则）
  - 职责标题 (Outfit Bold)
  - 简短描述 (Plus Jakarta Sans, slate-500)
  - 彩影轮换: violet → pink → mint → amber → violet
- hover: sticker-card wiggle 动画（已有）
- 响应式: <md 时卡片 2 列 → <sm 时单列

## 数据建模

```ts
// content.ts 新增
export interface DepartmentIntro {
  summary: string
  highlights: { label: string; value: string }[]
}

export interface Responsibility {
  icon: string       // emoji
  title: string
  description: string
  color: string      // 彩影颜色
}
```

## 组件

### 新建: `src/components/department/DepartmentSection.vue`

容器组件，包含简介子区块和职责子区块，统一管理滚动高亮的 `id="department"`。

### 新建: `src/components/department/IntroCard.vue`

简介卡片。Props: `summary: string`, `highlights: array`.

### 新建: `src/components/department/ResponsibilityCard.vue`

单张职责卡片。Props: `icon`, `title`, `description`, `color`.

## App.vue 修改

`sections` 数组头部插入 `{ id: 'department', component: DepartmentSection }`.

## 样式

- 复用现有 Tailwind token（`bg-cream`, `shadow-pop`, `sticker-card`, `font-heading`）
- 卡片边框 `border-2 border-slate-800`
- 彩影使用现有设计 token 色值
- 无需新增全局样式

## AppHeader 导航

`navItems` 数组头部插入 `{ id: 'department', label: '简介' }`。

## 技术约束

- Vue 3 + TypeScript + Naive UI（按需自动导入）
- 不引入新依赖
- 数据放在 `src/data/content.ts`，遵循现有 pattern
