# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

临床科学编程室团队介绍多页网站 —— 首页（hub）汇聚 6 个子团队入口，每个团队独立页面展示其部门简介、团队成员、成果展示、研究课题、培训体系等内容。

**线上地址**: https://topherlx.github.io/team-intro/

## 常用命令

```bash
pnpm install          # 安装依赖
pnpm setup            # 安装 Git 钩子（首次使用需执行）
pnpm dev              # 启动开发服务器（HMR 热更新，无需手动构建） — 首页 /，团队页 /#/ds-team 等（hash 路由）
pnpm build            # 生产构建到 dist/
pnpm preview          # 预览生产构建
```

## 技术栈

| 层面 | 选型 | 用途 |
|------|------|------|
| 框架 | Vue 3 + TypeScript + Vite + Vue Router | 组件化 + 多页路由 |
| UI 组件 | Naive UI（按需自动导入） | Modal、Collapse、Image |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite`） | Playful Geometric 设计系统 |
| 包管理 | pnpm | TypeScript 依赖 |
| Python | uv（`uv venv` + `uv pip install`） | docx 解析等脚本 |
| 部署 | GitHub Pages（GitHub Actions） | push main 自动构建部署 |

## 项目结构

```
src/
├── App.vue                    # 主容器：AppHeader + <router-view /> + AppFooter
├── main.ts / style.css        # 入口 + 设计 Token（颜色/字体/阴影/动画）
├── router/index.ts            # Vue Router hash 模式路由：/（hub）+ /ds-team /cdm-team1 /cdm-team2 /cm-team /safety-team
├── data/
│   ├── types.ts               # 共享 TypeScript 类型（Member, Topic, Training, Showcase, TeamIntro 等）
│   ├── ds-team.ts             # DS 团队数据
│   ├── cdm-team1.ts           # CDM Team1 数据
│   ├── cdm-team2.ts           # CDM Team2 数据
│   ├── cm-team.ts             # CM 团队数据
│   └── safety-team.ts         # Safety 团队数据
├── pages/
│   ├── hub/
│   │   ├── HubPage.vue        # 首页：6 个团队入口卡片
│   │   └── TeamEntryCard.vue  # 团队入口卡片组件
│   ├── ds-team/DSTeamPage.vue          # DS 团队页
│   ├── cdm-team1/CDMTeam1Page.vue      # CDM Team1 页
│   ├── cdm-team2/CDMTeam2Page.vue      # CDM Team2 页
│   ├── cm-team/CMTeamPage.vue          # CM 团队页
│   └── safety-team/SafetyTeamPage.vue  # Safety 团队页
├── components/
│   ├── layout/   AppHeader.vue（sticky + 滚动高亮）, AppFooter.vue, TeamPageLayout.vue（props 驱动通用排版）
│   ├── hero/     HeroSection.vue（blob 装饰 + dot-grid + confetti，props 驱动）
│   ├── team/     TeamIntroSection.vue, IntroCard.vue, ResponsibilitiesSection.vue, ResponsibilityCard.vue（均 props 驱动）
│   ├── members/  MembersSection.vue（横向滚动走马灯，props 驱动）, MemberCard.vue
│   ├── showcase/ ShowcaseSection.vue（成果展示卡片网格，props 驱动）, ShowcaseCard.vue
│   ├── tech/     TechSection.vue（SVG 内嵌 + 点击放大 + 滚轮缩放）
│   ├── workmode/ WorkModeSection.vue（CDM/CDS 双卡 + 示意图 SVG + 放大缩放）
│   ├── knowledge/ TopicsSection.vue, TrainingSection.vue（均 props 驱动）, EventsSection.vue（coverflow 画廊）
│   └── shared/   SectionTitle.vue（圆点 + 标题 + 装饰线）, EmptyPlaceholder.vue
└── public/       posters/, members/, showcase/（成果 Logo）, hero/（Hero 卡片 SVG）
```

## 设计系统

**Playful Geometric**（温暖活泼方向）：
- 色彩：cream `#FFFDF5`、violet `#8B5CF6`、pink `#F472B6`、amber `#FBBF24`、mint `#34D399`
- 字体：Outfit（标题 700/800）、Plus Jakarta Sans（正文 400/500）
- 阴影：pop（4px 硬阴影）、sticker（8px 彩色阴影）、灰色照片阴影 `4px 4px 0 #E2E8F0`
- 圆角：卡片 16px、按钮/胶囊 9999px、blob `24px 24px 24px 4px`
- 动画：sticker-card wiggle（旋转+缩放）、candy-btn bounce、pop-in、hover-wiggle

## 关键交互

- **TechSection**：内嵌 SVG + click -> modal + 滚轮缩放 (0.3x~3x)
- **WorkModeSection**：CDM/CDS 双卡 + 示意图 SVG + click -> modal + zoom
- **MembersSection**：`setInterval` 自动滚动，到末尾停 5s 回弹，click 停止/恢复
- **EventsSection**：coverflow 画廊 + 点击跳转 + snap 吸附
- **AppHeader**：scroll 事件监听滚动高亮

## 组件命名 Conventions

- SectionTitle: `title: string, color: string`
- 卡片 hover：`sticker-card`（wiggle）或 `hover:scale-105`（纯放大）
- 图片路径：`${import.meta.env.BASE_URL}members/xxx.png`
- 三色循环：`['bg-mint', 'bg-violet', 'bg-amber'][idx % 3]`

## 数据更新

所有团队内容按文件拆分在 `src/data/<team>.ts` 中，修改后 HMR 即时生效。每个数据文件导出相同结构的变量：

- `hero` — Hero 区数据（badge/title/subtitle/CTA）
- `teamIntro` — 团队概况 + 数据亮点
- `responsibilities[]` — 核心职责（标题/描述/图标/颜色）
- `members[]` — 姓名/职位/简介/标签/照片
- `showcases[]` — 成果展示（标题/描述/图片/链接/样式）
- `topics[]` — 日期/作者/标题/标签
- `trainings[]` — 日期/讲师/标题/系列子课程

共享类型定义在 `src/data/types.ts` 中（Member, Topic, Training, Showcase, TeamIntro 等）。

## refs/ 目录

原始参考资料，已加入 `.gitignore`，仅存本地，不入仓库。
- `部门成员简介.docx` — 成员数据源（照片通过 python-docx 提取）
- `部门技术架构全景图.svg` — 技术架构 SVG 源
- `工作模式革新/` — CDS 工作模式文档 + 示意图
- `课题/`、`培训/`、`会议宣发公众号/` — PPTX、PDF、海报 JPG

## Git 钩子

`scripts/pre-commit.sh` — 提交前提醒检查 CLAUDE.md 和 README.md 是否需要同步更新。
首次使用时运行 `pnpm setup` 安装。
