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

export interface TimelineEvent {
  title: string
  description: string
  color: string
}

export interface TechLayer {
  name: string
  color: string
  items: { name: string; desc: string }[]
}

export interface PosterEvent {
  date: string
  title: string
  poster: string
  speaker?: string
}

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

export const members: Member[] = [
  {
    name: '张力弦',
    title: '主任助理',
    bio: '2020届中国药科大学药物分析学硕士，具备临床监查与数据管理的业务背景，现深耕临床试验数据科学领域。核心工作涵盖数据仓库搭建与ELT流水线设计，以及多维度临床数据挖掘与可视化呈现，并主导核心业务指标体系的建设。同时，独立负责部门内部 Web 应用的全栈开发，统筹管理 SAS Viya 等核心应用服务器，保障百余项目对应业务的高效流转。目前正积极推进 AI 技术在敏捷开发与自动化运维中的落地实践，赋能团队向智能化转型。',
    tags: ['Python', 'ClickHouse', 'Vue3+Django', 'SAS Viya', 'AI'],
    photo: 'members/张力弦.png',
  },
  {
    name: '张浩',
    title: '助理科学编程经理',
    bio: '2022届南京中医药大学医学信息工程，现任职助理科学编程经理。拥有4年临床数据科学工作经验，深耕临床数据中台搭建，赋能DM全流程智能化建设。主导完成集中化离群值核查、质疑批量管理、心电图智能编码等业务系统。深度探索机器学习、深度学习、Dify与Fastgpt LLM工作流平台、AI-Agent的业务落地。受邀2025CMAC年会讲师，2026CMAC年中会议讲师。',
    tags: ['Dify', 'AI Agent', 'LLM', 'FastGPT', 'Python'],
    photo: 'members/张浩.png',
  },
  {
    name: '周锦阳',
    title: '科学编程员',
    bio: '2022届中国药科大学信息管理与信息系统专业，现任科学编程员。主要负责部门自研平台ClinMatrix的开发、部署与维护，以及DRS管理平台开发，并承担临床项目指标库整理与维护等工作。具备较好的技术学习和代码编程能力，性格沉稳，工作严谨细致，注重代码质量和问题闭环，持续为临床数据相关工作提供技术支持。',
    tags: ['Vue3', 'Django', 'ClinMatrix', 'TypeScript'],
    photo: 'members/周锦阳.png',
  },
  {
    name: '刘伟豪',
    title: '助理科学编程经理',
    bio: '2022届中国药科大学药学理科基地专业，现就职助理科学编程经理，主要负责数据可视化推进与自动化算法技术的落地应用。在Python数据生态、ClickHouse性能调优及前端网页制作方面拥有扎实的技术功底。近期负责推进原SAS程序向Python迭代和GitLab自动部署工作，并在SAS Viya 可视化工作中等关键项目中展现出出色的工程落地能力。日常工作中善于利用AI技术驱动业务流程优化，能够精准利用数据技术为业务增长和系统降本增效护航。',
    tags: ['Python', 'ClickHouse', 'SAS Viya', 'GitLab CI', '可视化'],
    photo: 'members/刘伟豪.png',
  },
  {
    name: '宋秋池',
    title: '科学编程员',
    bio: '2022届南京中医药大学计算机科学与技术专业毕业，现任职于临床数据部科学编程室。主要工作是为临床试验数据管理赋能，目前日常工作中负责配置维护负责项目的各个数据管理报表，聚焦底层数据梳理与入库，如ECOA数据同步，sftp数据传输，his系统数据传输，数据库间数据传输等。熟悉多种编程语言、多种数据库、主流AI工具及Docker部署，擅长用AI与自动化工作流替代重复劳动，提升工作效率。',
    tags: ['Docker', 'sFTP', 'ECOA', 'Python', 'AI'],
    photo: 'members/宋秋池.png',
  },
  {
    name: '王明鑫',
    title: '助理科学编程经理',
    bio: '2022届中国药科大学信息管理与信息系统专业，现任职助理科学编程经理。依托医药与信息交叉的专业背景，扎实开展科学编程相关工作。日常严格按照业务要求完成代码开发、数据处理与程序维护等任务；统筹科学编程相关项目，跟进进度、协调团队事务，把控工作质量；做事严谨细致、注重细节。工作中积极配合同事协作沟通，主动复盘总结经验，坚持学习行业新技术。后续也会继续夯实专业能力，认真履职，全力配合团队推进各项工作。',
    tags: ['飞书API', 'SAS Viya', 'Digital Data Flow', '自动化'],
    photo: 'members/王明鑫.png',
  },
  {
    name: '王若书',
    title: '科学编程经理',
    bio: '就读于大连医科大学2018届临床药学专业，2021届药理学专业，于2021年毕业后校招入职本公司，现任职科学编程经理。2022年由数据管理员转岗考核通过后，成为一名科学编程员，因此具有一年多的数据管理经验。目前已熟练掌握SAS、SQL编程及Viya、Superset可视化技术，熟悉Python、CSS编程、影刀RPA技术以及一些AI工具。',
    tags: ['SAS', 'SQL', 'Superset', 'SAS Viya', 'RPA'],
    photo: 'members/王若书.png',
  },
]

export const topics: Topic[] = [
  { date: '2025-03-31', author: '张浩', title: 'LLM本地化部署 + Dify', tags: ['AI', 'LLM', 'Dify'] },
  { date: '2025-04-30', author: '王若书', title: 'Dataset-json 数据标准', tags: ['数据标准', 'JSON'] },
  { date: '2025-03-07', author: '王明鑫', title: 'Digital Data Flow', tags: ['数据流', 'DDC'] },
  { date: '2025-04-30', author: '王明鑫', title: '飞书API + SAS Viya 自动化', tags: ['飞书', 'SAS Viya', 'API'] },
  { date: '2021-12-06', author: '张力弦', title: 'IRC与EDC疗效评估对比', tags: ['IRC', 'EDC', '疗效评估'] },
]

export const trainings: Training[] = [
  { date: '2026-06-04', instructor: '宋秋池', title: 'PostgreSQL 使用指南' },
  { date: '2026-05-22', instructor: '张力弦', title: 'Vibe Coding 环境部署',
    series: '系列课程',
    children: [
      { date: '第1期', instructor: '张力弦', title: '环境部署与模型配置' },
      { date: '第2期', instructor: '张浩', title: 'Claude Code 基础' },
    ]
  },
  { date: '2026-04-12', instructor: '王明鑫', title: 'Study Report V3.0 指标说明' },
  { date: '2026-04-03', instructor: '张浩', title: 'SKILL概念与定制' },
  {
    date: '2025-06-01', instructor: '张力弦', title: 'Visual Analytics 可视化教程',
    series: '系列课程',
    children: [
      { date: '第1期', instructor: '张力弦', title: '加载数据与基础对象的使用' },
      { date: '第2期', instructor: '刘伟豪', title: '数据窗格与点图、柱状图、线图' },
      { date: '第3期', instructor: '张浩', title: '条形图、蝴蝶图、瀑布图、盒形图、饼图' },
      { date: '第4期', instructor: '王若书', title: '容器使用与序列图、进度图、针状图' },
      { date: '第5期', instructor: '王明鑫', title: '参数、控件对象与部分图表' },
      { date: '第6期', instructor: '宋秋池', title: '地图对象和内容对象' },
    ],
  },
  { date: '2025-05-11', instructor: '王明鑫', title: '飞书多维表格自动化配置' },
]

export const posterEvents: PosterEvent[] = [
  { date: '2026-06', title: 'Vibe Coding 在临床试验典型应用场景的渐进式培训', poster: 'Vibe Coding在临床试验典型应用场景的渐进式培训_CMAC_20260625.jpg', speaker: "张力弦 · 张浩" },
  { date: '2026-04', title: '首届临床试验 AI 场景秀', poster: '首届临床试验AI场景秀_dTrial_20260418.JPG', speaker: "张力弦" },
  { date: '2026-03', title: '智能技术与 RBQM 的实战赋能与价值闭环', poster: '智能技术与RBQM的实战赋能与价值闭环_CMAC_20260320.jpg', speaker: "张浩" },
  { date: '2025-04', title: '数创未来 — SAS 生命科学行业会议', poster: '数创未来-SAS生命科学行业会议_SAS_20250420.JPG', speaker: "张力弦" },
  { date: '2025-03', title: 'AI 赋能临床数据科学：机遇与挑战', poster: 'AI赋能临床数据科学：机遇与挑战_CSDG_20250314.jpg', speaker: "张力弦" },
]

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

export const timelineItems: TimelineEvent[] = [
  {
    title: '过去 · CDM 传统模式',
    description: '人工从不同系统导出数据，格式与字段表述差异大，数据一致性核查复杂度高。CDM 忙于重复性导出、清洗与转换事务。',
    color: '#F472B6',
  },
  {
    title: '变革 · 基础设施重构',
    description: '引入数据仓库（ClickHouse + PostgreSQL）将数据问题前置处理。搭建现代化 IDE 协作平台，集成 AI 模型与插件能力。建设 sFTPGo 等数据传输平台，实现高效外部数据交换。',
    color: '#FBBF24',
  },
  {
    title: '未来 · CDS 数据科学',
    description: 'CDS 聚焦高维度数据分析：项目进展与质量分析、整体风险分析。依托生产级开发平台，利用 AI 将抽象想法落实为具体原型工具，最大化挖掘数据价值。',
    color: '#8B5CF6',
  },
]

export const techLayers: TechLayer[] = [
  {
    name: '应用层 Application',
    color: '#8B5CF6',
    items: [
      { name: 'Apache Superset', desc: '交互式 BI 仪表盘' },
      { name: 'SAS Visual Analytics', desc: '企业级可视化分析' },
      { name: 'ClinMatrix (Vue3+Django)', desc: '自研 Web 应用平台' },
      { name: 'SAS Viya 分析', desc: '云端统计计算引擎' },
      { name: '定制报表 Custom', desc: '项目级定制报表' },
      { name: '指标体系 Metrics', desc: '核心业务指标管理' },
      { name: '飞书 API 集成', desc: '自动化消息与数据同步' },
    ],
  },
  {
    name: '管道层 Data Pipeline',
    color: '#F59E0B',
    items: [
      { name: 'SAS Viya 计算引擎', desc: '分布式分析计算' },
      { name: 'Dolphin Scheduler', desc: 'ELT 任务调度编排' },
      { name: 'EDC/IRC/IRT', desc: '临床业务系统集成' },
      { name: 'eCoding/eCOA/CTMS', desc: '多源数据接入' },
    ],
  },
  {
    name: '数据层 Data Storage',
    color: '#10B981',
    items: [
      { name: 'ClickHouse 数仓', desc: '高性能列式 OLAP 引擎' },
      { name: 'PostgreSQL', desc: '高可靠主数据与配置存储' },
    ],
  },
  {
    name: '工具链 Toolchain',
    color: '#64748B',
    items: [
      { name: 'GitLab / GitHub', desc: '版本管理与 CI/CD' },
      { name: 'VS Code / SAS Viya', desc: '开发环境' },
      { name: 'Python / TypeScript / SAS', desc: '编程语言' },
      { name: 'ECharts / Python Viz / GTL', desc: '可视化技术' },
      { name: 'Claude Code', desc: 'AI 辅助编程' },
    ],
  },
]
