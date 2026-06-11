# Department Overview Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** HubPage "临床数据部" 标题改为 candy-btn，点击路由到 `/department` 部门概览页（团队成员占位 + 工作模式变革）

**Architecture:** HubPage 标题改为 `<router-link>` 复用已有 `.candy-btn` 样式；新路由 `/department` 懒加载 DepartmentPage.vue；新页面直接复用 HeroSection、MembersSection（空数组占位）、WorkModeSection 三个已有组件

**Tech Stack:** Vue 3 + TypeScript + Vue Router + Naive UI（无新依赖）

---

### Task 1: Add `/department` route

**Files:**
- Modify: `src/router/index.ts`

- [ ] **Step 1: Add the route entry**

```ts
// src/router/index.ts — add after the '/' hub route
{
  path: '/department',
  name: 'department',
  component: () => import('@/pages/department/DepartmentPage.vue'),
},
```

- [ ] **Step 2: Verify route registration**

Run: `pnpm dev` and navigate to `/#/department` — page should 404 but route should be registered (check Vue devtools or browser console for missing chunk — this is expected before page file exists)

- [ ] **Step 3: Commit**

```bash
git add src/router/index.ts
git commit -m "feat: add /department route"
```

---

### Task 2: Create DepartmentPage.vue

**Files:**
- Create: `src/pages/department/DepartmentPage.vue`

- [ ] **Step 1: Create the page component**

```vue
<!-- src/pages/department/DepartmentPage.vue -->
<template>
  <div>
    <HeroSection
      badge="Clinical Data Department"
      title="部门概览"
      subtitle="临床科学编程室 · 团队总览"
      :primary-cta="undefined"
      :secondary-cta="undefined"
    />
    <MembersSection :members="[]" />
    <WorkModeSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/hero/HeroSection.vue'
import MembersSection from '@/components/members/MembersSection.vue'
import WorkModeSection from '@/components/workmode/WorkModeSection.vue'
</script>
```

- [ ] **Step 2: Verify page renders**

Run: `pnpm dev`, open `http://localhost:5173/#/department`

Expected: Hero with "部门概览" title → "团队成员" section with empty placeholder → "工作模式变革" with CDM/CDS cards + SVG

- [ ] **Step 3: Commit**

```bash
git add src/pages/department/DepartmentPage.vue
git commit -m "feat: add DepartmentPage with hero, members placeholder, workmode"
```

---

### Task 3: Change HubPage title to candy-btn router-link

**Files:**
- Modify: `src/pages/hub/HubPage.vue`

- [ ] **Step 1: Replace h1 with router-link**

Change this line in `src/pages/hub/HubPage.vue`:

```diff
-    <h1 class="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-violet leading-tight mb-5 text-center">
-      临床数据部
-    </h1>
+    <router-link to="/department" class="candy-btn inline-block no-underline font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-violet leading-tight mb-5 text-center border-2 border-transparent rounded-2xl px-4 py-2 hover:border-violet hover:shadow-pop-hover">
+      临床数据部
+    </router-link>
```

`.candy-btn` 类已在 `src/style.css` 中定义（bounce easing + hover/active 状态），这里追加 `border-2 border-transparent rounded-2xl px-4 py-2` 使标题区域有可点击的视觉边界，`hover:border-violet hover:shadow-pop-hover` 增加 hover 反馈。

- [ ] **Step 2: Verify HubPage**

Run: `pnpm dev`, open `http://localhost:5173/`

Expected: "临床数据部" 标题可点击，hover 上浮 + 紫色边框 + 阴影，点击跳转到 `/department`

- [ ] **Step 3: Commit**

```bash
git add src/pages/hub/HubPage.vue
git commit -m "feat: make hub title a candy-btn link to /department"
```

---

### Task 4: Register /department in AppHeader teamNames

**Files:**
- Modify: `src/components/layout/AppHeader.vue`

- [ ] **Step 1: Add department entry to teamNames**

In `src/components/layout/AppHeader.vue`, add one line to the `teamNames` record:

```diff
  const teamNames: Record<string, string> = {
    '/':             '临床数据部',
+   '/department':   '部门概览',
    '/ds-team':      '临床科学编程室',
    '/cdm-team1':    '临床数据管理一室',
    '/cdm-team2':    '临床数据管理二室',
    '/cm-team':      '中心化监查室',
    '/safety-team':  '药物安全组',
  }
```

Section auto-discovery 不需要改动 — `members` 和 `workmode` 已在 `sectionLabels` 中。

- [ ] **Step 2: Verify AppHeader on /department**

Run: `pnpm dev`, open `http://localhost:5173/#/department`

Expected: 导航左侧显示 "CDS 临床数据部 · 部门概览"，右侧 section nav 显示 "成员" / "模式"（自动发现），点击可滚动定位

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/AppHeader.vue
git commit -m "feat: add /department to AppHeader teamNames"
```

---

### Task 5: Integration smoke test

- [ ] **Step 1: Full flow test**

Run: `pnpm dev`

1. 首页 `/` — "临床数据部" 标题有 candy-btn hover 效果
2. 点击标题 → 跳转到 `/department`
3. 部门概览页 — Hero + Members 占位 + WorkModeSection 完整展示
4. AppHeader 显示 "部门概览"，section nav 正常
5. 点击 CDS logo 返回首页

- [ ] **Step 2: Commit (if any fixes needed)**

Only if adjustments were made during smoke test.
