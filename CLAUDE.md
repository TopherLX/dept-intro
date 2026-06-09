# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

临床数据科学部（CDS）团队介绍网页。展示部门成员、技术架构、工作模式、研究课题、培训体系和会议宣发等内容。

## 技术栈

- **前端**: TypeScript + Vue 3 + Vite
- **UI 组件**: Naive UI（按需自动导入）— Carousel、Popover、Timeline、Collapse、Modal、Image
- **样式**: Tailwind CSS v4 + `@tailwindcss/vite`（Playful Geometric 设计系统）
- **包管理器**: pnpm（TypeScript）、uv（Python）
- **部署**: GitHub Pages（静态构建产物 `dist/`）

## 常用命令

```bash
pnpm install          # 安装依赖
pnpm dev              # 启动开发服务器（默认 http://localhost:5173）
pnpm build            # 生产构建到 dist/
pnpm preview          # 预览生产构建
```

## 参考资料目录

```
refs/
├── 部门成员简介.docx        # 7位成员：张力弦、张浩、周锦阳、刘伟豪、宋秋池、王明鑫、王若书
├── 技术框架全景.svg          # 四层架构图：应用层/管道层/数据层/工具链
├── 工作模式变革/
│   ├── CDS工作模式变革.docx  # CDM→CDS转型理念
│   └── CDS工作模式.svg       # 数据流转示意图
├── 课题/                    # 研究课题 PPTX
├── 培训/                    # 培训材料（VA教程、SKILL、Study Report等）
└── 会议宣发公众号/           # 会议海报图片（JPG）
```

## 架构说明

单页滚动应用，7 个板块：

1. **HeroSection** — 首屏标题 + CTA + blob 装饰
2. **MembersSection** — Naive UI Carousel，7 张成员卡片
3. **TechSection** — 四层技术架构交互卡片 + Popover 热点
4. **WorkModeSection** — Naive UI Timeline，CDM→CDS 转型叙事
5. **TopicsSection** — 研究课题卡片网格（violet 主题色）
6. **TrainingSection** — 培训卡片网格 + Collapse 折叠（mint 主题色）
7. **EventsSection** — 会议海报画廊（amber 主题色，Image 预览）

共享组件：`SectionTitle.vue`（彩色圆点 + 标题 + 装饰线）
布局组件：`AppHeader.vue`（sticky + IntersectionObserver 滚动高亮）、`AppFooter.vue`
所有内容数据集中在 `src/data/content.ts`

## 设计系统

Playful Geometric（温暖活泼方向）：
- 色彩：cream #FFFDF5、violet #8B5CF6、pink #F472B6、amber #FBBF24、mint #34D399
- 字体：Outfit（标题）、Plus Jakarta Sans（正文）
- 阴影：硬阴影系统（pop 4px/sticker 8px）
- 圆角：卡片 16px、按钮 9999px、blob 特殊形状
