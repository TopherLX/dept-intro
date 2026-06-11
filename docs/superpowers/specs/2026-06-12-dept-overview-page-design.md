# Department Overview Page Design

## Summary

HubPage 的 "临床数据部" 标题改为 candy-btn 路由入口，点击跳转到新页面 `/department`（部门概览），展示团队成员占位 + 工作模式变革（CDM → CDS）完整内容。

## Changes

### 1. HubPage — 标题改为路由入口

**File:** `src/pages/hub/HubPage.vue`

- `<h1>临床数据部</h1>` 替换为 `<router-link to="/department">`
- 添加 candy-btn 样式类（复用 `style.css` 中已有的 `.candy-btn` 动画：bounce + 硬阴影）
- hover 时上浮 + 阴影加深

### 2. 新路由

**File:** `src/router/index.ts`

```ts
{ path: '/department', name: 'department', component: () => import('@/pages/department/DepartmentPage.vue') }
```

### 3. 新页面 DepartmentPage.vue

**File:** `src/pages/department/DepartmentPage.vue`

页面结构（自上而下）：

- **AppHeader** — 复用现有导航栏，适配 `/department` 路由高亮
- **Hero 区** — 标题"部门概览"，副标题"临床科学编程室 · 团队总览"，复用 HeroSection 组件
- **MembersSection（占位）** — 复用 MembersSection 组件，数据为空数组，显示空状态占位卡片
- **WorkModeSection** — 直接复用 `@/components/workmode/WorkModeSection.vue`
- **AppFooter** — 复用现有页脚

### 4. AppHeader 导航适配

**File:** `src/components/layout/AppHeader.vue`

- `/department` 路由时，导航高亮逻辑适配（此页面不属于任一团队，可以不加 section 导航高亮）
- 标题/logo 提供返回首页入口

## Components Reused

| Component | Status |
|-----------|--------|
| AppHeader | 直接复用 |
| HeroSection | 直接复用（props: title, subtitle, badge） |
| MembersSection | 复用，传空数组触发 EmptyPlaceholder |
| WorkModeSection | 直接复用 |
| AppFooter | 直接复用 |

## New Files

| File | Purpose |
|------|---------|
| `src/pages/department/DepartmentPage.vue` | 部门概览页主组件 |

## Files Modified

| File | Change |
|------|--------|
| `src/pages/hub/HubPage.vue` | 标题改为 router-link + candy-btn |
| `src/router/index.ts` | 添加 /department 路由 |

## Not in Scope

- MembersSection 的实际数据填充（后续单独任务）
- 部门概览页的其他内容区块
