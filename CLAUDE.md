# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

临床数据科学部（CDS）团队介绍单页网站。展示团队成员、技术架构、工作模式、研究课题、培训体系和会议宣发。

**线上地址**: https://topherlx.github.io/team-intro/

## 常用命令

```bash
pnpm install          # 安装依赖
pnpm setup            # 安装 Git 钩子（首次使用需执行）
pnpm dev              # 启动开发服务器（HMR 热更新，无需手动构建）
pnpm build            # 生产构建到 dist/
pnpm preview          # 预览生产构建
```

## 技术栈

| 层面 | 选型 | 用途 |
|------|------|------|
| 框架 | Vue 3 + TypeScript + Vite | 组件化开发 |
| UI 组件 | Naive UI（按需自动导入） | Modal、Collapse、Image |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite`） | Playful Geometric 设计系统 |
| 包管理 | pnpm | TypeScript 依赖 |
| Python | uv（`uv venv` + `uv pip install`） | docx 解析等脚本 |
| 部署 | GitHub Pages（GitHub Actions） | push main 自动构建部署 |

## 项目结构

```
src/
├── App.vue                    # 主容器，各板块垂直排列
├── main.ts / style.css        # 入口 + 设计 Token（颜色/字体/阴影/动画）
├── data/content.ts            # 全部静态数据（部门简介/成员/课题/培训/会议/时间线/技术层）
├── components/
│   ├── layout/   AppHeader.vue（sticky + 滚动高亮）, AppFooter.vue
│   ├── hero/     HeroSection.vue（blob 装饰 + dot-grid + confetti）
│   ├── team/      TeamSection.vue（团队简介 + 5 职责卡片 3+2 网格）, IntroCard.vue, ResponsibilityCard.vue
│   ├── members/  MembersSection.vue（横向滚动走马灯）, MemberCard.vue
│   ├── showcase/ ShowcaseSection.vue（成果展示 4 列卡片）, ShowcaseCard.vue
│   ├── tech/     TechSection.vue（SVG 内嵌 + 点击放大 + 滚轮缩放）
│   ├── workmode/ WorkModeSection.vue（CDM/CDS 双卡 + 示意图 SVG + 放大缩放）
│   ├── knowledge/ TopicsSection.vue（成员头像 + 三色轮换）, TrainingSection.vue（头像 + 三色轮换 + 折叠）, EventsSection.vue（coverflow 画廊）
│   └── shared/   SectionTitle.vue（圆点 + 标题 + 装饰线）
└── public/       posters/（海报图片）, members/（成员照片）
```

## 设计系统

**Playful Geometric**（温暖活泼方向）：
- 色彩：cream `#FFFDF5`、violet `#8B5CF6`、pink `#F472B6`、amber `#FBBF24`、mint `#34D399`
- 字体：Outfit（标题 700/800）、Plus Jakarta Sans（正文 400/500）
- 阴影：pop（4px 硬阴影）、sticker（8px 彩色阴影）、灰色照片阴影 `4px 4px 0 #E2E8F0`
- 圆角：卡片 16px、按钮/胶囊 9999px、blob `24px 24px 24px 4px`
- 动画：sticker-card wiggle（旋转+缩放）、candy-btn bounce、pop-in、hover-wiggle

## 关键交互

- **TencentSection**：rolling in inline SVG + click -> modal + soft scroll zoom (0.3x~3x)
- **WorkModeSection**：rolling in inline SVG + click -> modal + soft scroll zoom
- **MembersSection**：`requestAnimationFrame` 自动滚动到头回弹
- **EventsSection**：coverflow 画廊 + 点击跳转 + snap 吸附
- **AppHeader**：IntersectionObserver 滚动高亮

## 组件命名 Conventions

- SectionTitle: `title: string, color: string`
- 卡片 hover：`sticker-card`（wiggle）或 `hover:scale-105`（纯放大）
- 图片路径：`${import.meta.env.BASE_URL}members/xxx.png`
- 三色循环：`['bg-mint', 'bg-violet', 'bg-amber'][idx % 3]`

## 数据更新

所有内容在 `src/data/content.ts`，修改后 HMR 即时生效：
- `teamIntro` — 团队概况 + 数据亮点
- `responsibilities[]` — 5 大核心职责（标题/描述/图标/颜色）
- `members[]` — 姓名/职位/简介/标签/照片
- `topics[]` — 日期/作者/标题/标签
- `trainings[]` — 日期/讲师/标题/系列子课程
- `posterEvents[]` — 日期/标题/海报文件名/讲者
- `timelineItems[]` — 工作模式时间线
- `techLayers[]` — 技术架构四层

## refs/ 目录

原始参考资料，已加入 `.gitignore`，仅存本地，不入仓库。
- `部门成员简介.docx` — 成员数据源（照片通过 python-docx 提取）
- `部门技术架构全景图.svg` — 技术架构 SVG 源
- `工作模式革新/` — CDS 工作模式文档 + 示意图
- `课题/`、`培训/`、`会议宣发公众号/` — PPTX、PDF、海报 JPG

## Git 钩子

`scripts/pre-commit.sh` — 提交前提醒检查 CLAUDE.md 和 README.md 是否需要同步更新。
首次使用时运行 `pnpm setup` 安装。
