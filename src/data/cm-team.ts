import type { Member, Topic, Training, TeamIntro, Responsibility, Showcase, HeroData, PosterEvent } from './types'

export const hero: HeroData = {
  badge: 'Center Monitoring',
  title: '中心化监查室',
  subtitle: '内容建设中，敬请期待。',
  primaryCta: { text: '了解更多', href: '#team' },
  image: '',
}

export const teamIntro: TeamIntro = {
  summary:
    '中心化监查室于2026年正式成立，是临床试验基于风险质量管理重要的一环，依托统计编程与数据可视化手段，对多中心临床试验进行跨中心、跨维度的近实时的风险识别与驱动式监查，当前共7人，复合型团队，包括运营、建库、数据管理等职能，全员熟悉SAS/Python编程，JMP PRO操作，了解基础统计知识，熟悉ICHE6(R3)、E8(R1)等法规，从2025年开始对在研的III期项目进行中心化监查活动，人均覆盖2-3个项目，总计12个项目正在运行。无RBQM系统，所有可视化及计算均为手动编程产出，后续计划通过AI编程，将所有基础监查框架标准化，当前标准化工具产出1个。',
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
    title: '助理临床数据管理经理',
    bio: '',
    tags: [],
    photo: 'members/顾晋铨.png',
  },
  {
    name: '盛炜',
    title: '临床数据管理经理',
    bio: '',
    tags: [],
    photo: 'members/盛炜.png',
  },
  {
    name: '饶响书',
    title: '助理临床数据管理经理',
    bio: '',
    tags: [],
    photo: 'members/饶响书.png',
  },
  {
    name: '尹默',
    title: '助理科学编程经理',
    bio: '',
    tags: [],
    photo: 'members/尹默.png',
  },
  {
    name: '龚奕鸣',
    title: '科学编程员',
    bio: '',
    tags: [],
    photo: 'members/龚奕鸣.png',
  },
  {
    name: '陈曦',
    title: '助理临床数据库设计经理',
    bio: '',
    tags: [],
    photo: 'members/陈曦.png',
  },
]

export const showcases: Showcase[] = []
export const topics: Topic[] = []
export const trainings: Training[] = []
export const posterEvents: PosterEvent[] = []
