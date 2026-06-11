import type { Member, Topic, Training, TeamIntro, Responsibility, Showcase, HeroData } from './types'

export const hero: HeroData = {
  badge: 'Safety Team',
  title: '药物安全组',
  subtitle: '',
  primaryCta: { text: '了解更多', href: '#team' },
  image: '',
}

export const teamIntro: TeamIntro = {
  summary:
    '小组成员共3人，成员均持有医学编码证书、精通SAS编程。团队掌握从医学编码到安全性分析再到信号挖掘的完整工作流程，以标准化保障数据规范性，以深度分析提升风险识别精准度，以可视化增强洞察效率，共同为药物安全监测与临床决策提供高效、可靠的支持。',
  highlights: [
    { label: '核心成员', value: '3名' },
    { label: '编码证书', value: '全员持有' },
    { label: '掌握工具', value: 'SAS + eCoding' },
    { label: '能力覆盖', value: '编码→分析→可视化' },
  ],
}

export const responsibilities: Responsibility[] = [
  {
    icon: '🏥',
    title: '医学编码标准化',
    description:
      '利用MedDRA和WHODrug字典，将复杂的医疗信息编码为标准医学术语，为数据分析奠定基础，保障数据规范性与一致性。',
    color: '#8B5CF6',
  },
  {
    icon: '🔬',
    title: '安全性信号挖掘与分析',
    description:
      '运用统计与机器学习方法深度挖掘药物不良反应等信号，评估风险关联，提升风险识别的科学性与精准度。',
    color: '#F472B6',
  },
  {
    icon: '📊',
    title: '安全数据可视化',
    description:
      '利用临床安全性分析平台将分析结果转化为动态图表与交互式仪表盘，直观呈现出安全趋势与异常信号，增强洞察效率。',
    color: '#34D399',
  },
  {
    icon: '🛡️',
    title: '标准化质量保障',
    description:
      '通过标准化保障数据的规范性，根据深度分析提升风险识别的科学性与精准度，借助可视化增强洞察效率，共同为药物安全监测与临床决策提供高效、可靠的支持。',
    color: '#FBBF24',
  },
]

export const members: Member[] = [
  {
    name: '匡健',
    title: '科学编程经理',
    bio: '2015年中国药科大学药理学硕士，2019年4月加入正大天晴临床数据部，统筹全项目的医学编码、字典运营、同义词维护、DSUR汇总、编码SOP体系落地。依托SAS开发出自动化医学编码MedDRA和WHODrug，参与eCoding系统开发；对标FDA SSTF 2025安全图表规范，用SAS GTL搭建合规申报级安全图表库；受MSSO邀请，汇报《从MedDRA医学编码到安全数据分析可视化的方法与实践》。',
    tags: ['SAS', 'MedDRA', 'WHODrug', 'eCoding', 'SAS GTL'],
    photo: 'members/匡健.png',
  },
  {
    name: '宋玮',
    title: '科学编程员',
    bio: '2019届沈阳药科大学药学专业，2021年10月加入天晴，加入临床数据部前从事临床监察员工作，具有丰富临床经验。 负责医学编码，字典同义词维护，DSUR数据收集，临床项目安全性分析，编码SOP体系落地。优化SAS自动化医学编码WHODrug程序，深度优化安全性分析程序，参与ecoding系统开发，是系统使用后调试与迭代主要负责与沟通人。开发安全性可视化图表韦恩图等。',
    tags: [],
    photo: 'members/宋玮.png',
  },
  {
    name: '李明雪',
    title: '临床数据管理员',
    bio: '2023届复旦大学药学专业学士，现任安全数据管理员。主要负责医学编码、安全性数据分析及DSUR数据收集工作，负责近百个临床项目（涵盖I-III期）的医学编码及结题编码数据交付，年均高质量交付人工编码数据超两万条。在业务标准化建设方面，推动优化医学编码SOP体系，独立撰写医学编码指南。具备扎实的数据分析技能，通过SAS Base认证，并助力团队建设不良事件分析可视化工具。具备高效的业务落地及协调能力，积极应用AI工具赋能业务效率，为临床项目的高质量数据交付提供坚实保障。',
    tags: [],
    photo: 'members/李明雪.png',
  },
]

export const showcases: Showcase[] = []
export const topics: Topic[] = []
export const trainings: Training[] = []
