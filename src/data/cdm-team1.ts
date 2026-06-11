import type { Member, Topic, Training, TeamIntro, Responsibility, Showcase, HeroData, OrgNode } from './types'

export const hero: HeroData = {
  badge: 'Clinical Data Management · #1',
  title: '临床数据管理一室',
  subtitle: '内容建设中，敬请期待。',
  primaryCta: { text: '了解更多', href: '#team' },
  image: '',
}

export const teamIntro: TeamIntro = {
  summary:
    '当前团队共18人，临床数据管理经验均超3年，是一支融合药学、信息管理与信息系统、护理学等专业人才的复合型核心业务团队。团队汇聚数据管理、临床监查、临床协调三类经验的人才，兼具标准化数据治理功底与一线临床实操经验。全员掌握SAS编程核心工具，全员熟悉Vibe Coding等数据管理技术，运用编程进行数据清理、数据可视化展示、数理基础分析等业务，现阶段团队作为主要的业务执行团队，人均负责5-6个临床项目以及其他研发课题，项目经验充足、质控成效稳定，科研赋能扎实、课题深耕精进。',
  highlights: [
    { label: '核心成员', value: '18名' },
    { label: '人均项目', value: '5-6个' },
    { label: '数据管理经验', value: '3年+' },
    { label: '掌握技能', value: 'SAS + Vibe Coding' },
  ],
}

export const responsibilities: Responsibility[] = [
  {
    icon: '🧬',
    title: '临床数据治理与标准化管理',
    description:
      '聚焦各类I/II期创新药临床试验、早期临床研究项目、III期确证性临床试验等，承担前端临床数据源头治理、标准化管理核心工作，负责规模化、标准化、高复杂度临床数据管理，是公司核心商业化、申报类临床项目的数据核心支撑科室。',
    color: '#8B5CF6',
  },
  {
    icon: '📋',
    title: '数据方案落地与全流程管控',
    description:
      '负责各期临床项目数据方案落地、病例报告表（CRF）设计与优化、数据录入跟进、问题数据清理、受试者数据全流程管控；承接临床项目数据合规审核、问题整改跟进，建立标准化临床数据管理体系；配合项目组完成阶段性数据复盘、结题数据梳理，保障临床数据零合规风险、零数据偏差。',
    color: '#F472B6',
  },
  {
    icon: '📐',
    title: 'SOP 体系化建设',
    description:
      'SOPs工作组完成全部门 SOP 体系化重构，优化现有管理制度，补齐流程短板，完善部门内控管理体系，推动数据管理标准化建设。',
    color: '#34D399',
  },
  {
    icon: '📏',
    title: '临床数据标准统一',
    description:
      'CCG标准工作组统筹制定临床数据通用标准体系，统一全部门数据口径与业务规范，筑牢部门业务底层标准底座。',
    color: '#FBBF24',
  },
  {
    icon: '📊',
    title: '可视化与决策支持',
    description:
      '可视化需求小组搭建项目数据可视化看板体系，实现项目进度、数据状态实时可视，支撑管理层高效决策，保障大型临床项目数据完整性、一致性、合规性，全力支撑项目结题、申报及核查工作。',
    color: '#8B5CF6',
  },
]
export const members: Member[] = []
export const showcases: Showcase[] = []
export const topics: Topic[] = []
export const trainings: Training[] = []

export const orgChart: OrgNode = {
  name: '周敏',
  title: '高级主任',
  children: [
    {
      name: '孙萍',
      title: '主任助理',
      children: [
        { name: '贾潘丽', title: '数据经理' },
        { name: '李元晶', title: '助理数据经理' },
        { name: '丁福洋', title: '助理数据经理' },
      ],
    },
    {
      name: '杨俐娴',
      title: '主任助理',
      children: [
        { name: '史庆秀', title: '助理数据经理' },
        { name: '曹郡颖', title: '助理数据经理' },
      ],
    },
    {
      name: '谢庭益',
      title: '数据经理',
      children: [
        { name: '俞婷', title: '助理数据经理' },
        { name: '李倩楠', title: '数据员' },
      ],
    },
    {
      name: '陈帆',
      title: '数据经理',
      children: [
        { name: '徐燕', title: '数据经理' },
        { name: '屠乐琪', title: '助理数据经理' },
      ],
    },
    {
      name: '王今歌',
      title: '资深数据经理',
      children: [
        { name: '陈宇洁', title: '数据经理' },
        { name: '王宇嘉', title: '助理数据经理' },
        { name: '朱心蓓', title: '助理数据经理' },
      ],
    },
  ],
}
