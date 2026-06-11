import type { Member, Topic, Training, TeamIntro, Responsibility, Showcase, HeroData, PosterEvent, TimelineItem } from './types'

export const hero: HeroData = {
  badge: 'Center Monitoring',
  title: '中心化监查室',
  subtitle: '内容建设中，敬请期待。',
  primaryCta: { text: '了解更多', href: '#team' },
  image: '',
}

export const teamIntro: TeamIntro = {
  summary:
    '中心化监查室于2026年正式成立，是临床试验基于风险质量管理重要的一环，依托统计编程与数据可视化手段，对多中心临床试验进行跨中心、跨维度的近实时的风险识别与驱动式监查，当前共7人,复合型团队，包括运营、建库、数据管理等职能，全员熟悉SAS/Python编程，JMP PRO操作，了解基础统计知识，熟悉ICHE6(R3)、E8(R1)等法规，从2025年开始对在研的III期项目进行中心化监查活动,人均覆盖2-3个项目，总计运行11 个项目。无RBQM系统，所有可视化及计算均为手动编程产出，后续计划通过AI编程，将所有基础监查框架标准化，当前标准化工具产出1个。',
  highlights: [
    { label: '核心成员', value: '7名' },
    { label: '在研项目', value: '12个' },
    { label: '人均覆盖', value: '2-3个' },
    { label: '标准化工具', value: '1个' },
  ],
}

export const responsibilities: Responsibility[] = [
  {
    icon: '🎯',
    title: '关键质量因素监测',
    description:
      '对关键数据与关键流程进行全局及中心级监测，覆盖主要终点、入排标准、安全性等核心维度，确保临床试验质量符合预期标准。',
    color: '#8B5CF6',
  },
  {
    icon: '🔍',
    title: '风险信号识别与分析',
    description:
      '通过数据异常行为分析、数据趋势分析、中心间对比等方法，系统性识别临床试验中的风险信号并进行深入分析。',
    color: '#F472B6',
  },
  {
    icon: '⚖️',
    title: 'QTL/KRI 制定与管理',
    description:
      '参与风险识别与评估，制定并分层管理QTL（质量容忍限度，触发即升级）与KRI（关键风险指标，用于预警），按固定频次进行监测。',
    color: '#34D399',
  },
  {
    icon: '🔬',
    title: '系统性问题根因追踪',
    description:
      '发现数据质量的系统性问题，深入追踪至根因，针对性地制定纠正和预防措施，从根本上提升质量管理水平。',
    color: '#FBBF24',
  },
  {
    icon: '🤝',
    title: '跨职能沟通与质控引导',
    description:
      '定期向项目组汇报中心化监查发现，对异常系统性问题引导针对性极强的现场质控，保障受试者安全和数据可靠性。',
    color: '#8B5CF6',
  },
  {
    icon: '🔄',
    title: '反馈与动态优化',
    description:
      '将监查发现反馈回风险评估环节，动态优化监查计划，通过系统性风险管理大幅减少严重质量问题的发生概率。',
    color: '#F472B6',
  },
  {
    icon: '💡',
    title: '新兴技术与可视化探索',
    description:
      '探索新兴技术与数据可视化在中心化监查中的应用，推动从手动编程向智能化、标准化方向演进。',
    color: '#34D399',
  },
]

export const members: Member[] = [
  {
    name: '蒋骆',
    title: '主任助理',
    bio: '2019年毕业于南京医科大学临床药学专业，7月加入正大天晴研究院临床中心临床数据部，负责肿瘤研究的临床数据管理工作，期间负责10余项临床研究，参与及质控项目30余项，NDA项目3项，结题若干，了解临床试验流程及相关法律法规；熟悉CDISC标准，掌握SAS、JMP Clinical、JMP Pro软件及AI使用，2024年4月从临床数据管理内部建立中心化监查小组，从事CM（中心化监查）算法开发、推动RBQM（基于风险的质量管理）工作流落地、可视化开发等工作。',
    tags: ['SAS', 'JMP Clinical', 'JMP Pro', 'CDISC', 'RBQM'],
    photo: 'members/蒋骆.png',
  },
  {
    name: '顾晋铨',
    title: '助理中心化监查经理',
    bio: '毕业于南京医科大学，先后从事临床运营、数据管理和中心化监查等工作，经手主导项目30余项。推动批量质疑落地，从0搭建包括算法、可视化、工作流等RBQM全体系。擅长SAS、JMP等数据清理和分析工具。',
    tags: ['SAS', 'JMP', 'RBQM', '数据清理'],
    photo: 'members/顾晋铨.png',
  },
  {
    name: '盛炜',
    title: '中心化监查经理',
    bio: '2020年毕业于南京医科大学生物统计专业，从事临床数据相关工作6年，先后就职于辉瑞、正大天晴。负责过global项目与local项目20+，作为LDM核心负责1项国内首仿关键注册项目成功获批。2024年下半年开始作为中心化监查小组核心成员，推动部门中心化监查实施落地与RBM推广。将中心化监查方法落地应用于3个关键注册项目，与多职能团队紧密协同，识别数据欺诈、流程执行不规范等多项核心风险点，实现数据管理与中心化监查的深度融合。',
    tags: ['SAS', '生物统计', 'Global项目', 'RBM'],
    photo: 'members/盛炜.png',
  },
  {
    name: '饶响书',
    title: '助理中心化监查经理',
    bio: '2022年7月毕业于成都中医药大学，入职正大天晴，从事数据管理，2025年7月加入中心化监查工作组。期间负责和辅助项目10余项，其中，中心化监查项目3项。较熟悉CDISC标准，擅长SAS编程，可视化。',
    tags: ['SAS', 'CDISC', '可视化'],
    photo: 'members/饶响书.png',
  },
  {
    name: '尹默',
    title: '中心化监查员',
    bio: '2023年硕士毕业于日本东京大学，6月加入正大天晴研究院临床运营部门，从事CRA（临床监查员）工作，期间参与多项III期临床项目现场监查、项目内部质控及稽查，曾参与国家局现场核查1次，了解临床试验各阶段流程及相关法律法规；2025年1月转岗至临床数据部，加入中心化监查小组，开始学习并从事CM相关工作，目前负责两个III期项目的中心化监查运行。',
    tags: ['CRA', 'III期项目', '现场核查'],
    photo: 'members/尹默.png',
  },
  {
    name: '龚奕鸣',
    title: '中心化监查员',
    bio: '2025年毕业于南京医科大学，于2025年6月加入正大天晴临床数据部，从事质疑管理、逻辑核查等数据管理工作，熟悉了临床试验流程，相关法律法规和EDC系统功能配置；能够熟练使用SAS，JMP Pro等统计分析工具；于2025年10月加入中心化监查室，从事肿瘤项目的中心化监查报告撰写更新等工作。',
    tags: ['SAS', 'JMP Pro', 'EDC', '质疑管理'],
    photo: 'members/龚奕鸣.png',
  },
  {
    name: '陈曦',
    title: '助理中心化监查经理',
    bio: '2020年毕业于沈阳药科大学，毕业后从事药物分析研发工作。2022年6月加入正大天晴，负责EDC建库工作。期间累计独立负责建库项目20余项，覆盖实体瘤、免疫、血液瘤等多个适应症，涉及I期至III期临床试验；同时完成系统升级任务40余次，实施交叉质控项目30余项。深入理解临床试验方案设计，熟练掌握泰格、太美、Medidata等EDC及eCOA系统的功能配置、逻辑校验与自定义函数编写。2026年初转岗至中心化监查，逐渐学习掌握SAS编写，结合统计知识和对临床试验理解，进一步拓展临床试验数据监查能力。',
    tags: ['EDC建库', 'SAS', 'Medidata', 'eCOA'],
    photo: 'members/陈曦.png',
  },
]

export const showcases: Showcase[] = []
export const topics: Topic[] = []
export const trainings: Training[] = []
export const posterEvents: PosterEvent[] = []

export const timeline: TimelineItem[] = [
  {
    date: '2013',
    title: 'FDA/EMA 倡导 RBM',
    description: 'FDA与EMA倡导基于风险的监查（RBM），强调质量源于设计（QbD）、聚焦质量关键要素（CtQ），确保数据可信可靠以回答科学问题、保障受试者权益。',
  },
  {
    date: 'ICH E6(R2)',
    title: 'RBQM 理念正式引入',
    description: 'ICH E6(R2)正式引入RBQM（基于风险的质量管理）理念，将风险评估与管理嵌入临床试验全生命周期，推动行业从传统100% SDV向基于风险的监查策略转型。',
  },
  {
    date: '2026.03',
    title: 'ICH E6(R3) 中国实施',
    description: '中国正式实施ICH E6(R3)，进一步强化基于风险与相称性的监查策略，中心化监查室应运而生，为临床试验质量保障体系提供核心支撑。',
  },
]
