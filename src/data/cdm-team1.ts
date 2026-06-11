import type { Member, Topic, Training, TeamIntro, Responsibility, Showcase, HeroData, OrgNode, ResearchTopic } from './types'

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
    { label: '掌握技能', value: 'SAS + AI' },
  ],
}

export const responsibilities: Responsibility[] = [
  {
    icon: '🧬',
    title: '数据质量全生命周期管理',
    description:
      '统筹上市前各阶段临床研究项目的数据质量全生命周期管理，重点管控主要/次要终点、入排标准、疗效指标、安全性数据、重大方案偏离等核心数据，严守各关键流程合规要求。',
    color: '#8B5CF6',
  },
  {
    icon: '📋',
    title: '数据方案落地与全流程管控',
    description:
      '推动各期临床项目数据方案落地实施，开展病例报告表（CRF）设计与优化，跟进数据录入进度、完成异常数据清理，实现受试者数据全流程管控。',
    color: '#F472B6',
  },
  {
    icon: '🔍',
    title: '数据质量风险识别与根因分析',
    description:
      '开展数据质量风险识别与分析，核查数据完整性、一致性，排查逻辑异常，统筹质疑管理并输出数据管理报告；针对系统性数据问题开展根本原因分析（RCA），落实整改闭环。',
    color: '#34D399',
  },
  {
    icon: '🤝',
    title: '跨部门协同与质量保障',
    description:
      '做好跨部门协同沟通，定期向运营、医学、统计团队同步数据质量情况，对接临床质量保证部门，针对系统性、高风险问题推进中心稽查与源数据质量管控。',
    color: '#FBBF24',
  },
  {
    icon: '✅',
    title: '合规审核与结题保障',
    description:
      '落实临床项目数据合规审核，跟进问题整改，搭建并完善标准化临床数据管理体系；配合完成项目阶段性复盘与结题数据梳理，保障数据完整、一致、合规，全力支撑项目结题、申报及核查工作。',
    color: '#8B5CF6',
  },
  {
    icon: '🏗️',
    title: '数据管理标准化建设',
    description:
      'SOPs工作组以流程图+表格可视化统一操作标准，降低培训成本、缩短胜任周期；CCG标准工作组依托EDC标准库搭建统一填写指南模板，消除填写差异；可视化需求小组基于SAS Viya Visual Analytics搭建一体化项目数据看板体系。三组协同推动标准化、合规化、智能化升级。',
    color: '#F472B6',
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
        { name: '李倩楠', title: '数据管理员' },
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

export const researchTopics: ResearchTopic[] = [
  { category: 'AI & 系统智能化', title: '利用 prompt 技巧玩转通用大语言模型 (General-LLM-AI)', description: '沉淀大模型实操方法论，落地 AI 工具通用使用能力，为全部门 AI 赋能提供基础支撑', owner: '杨俐娴' },
  { category: 'AI & 系统智能化', title: 'OpenClaw 入门指南', description: '完成专业数据处理工具落地指引，实现工具标准化上手，大幅提升批量数据处理效率', owner: '杨俐娴' },
  { category: 'AI & 系统智能化', title: '联合数创部门开发 CCG AI 问答机器人', description: '自研业务智能答疑工具，覆盖高频业务问题，大幅减少人工重复答疑工作量，释放人力', owner: '杨俐娴' },
  { category: 'AI & 系统智能化', title: '联合科编开发 EDC 质疑智能开关', description: '实现 EDC 系统数据质疑自动化触发，降低人工数据核查成本，提升数据质控效率与准确性', owner: '杨俐娴' },
  { category: 'AI & 系统智能化', title: '数据进展可视化需求小组', description: '搭建项目数据可视化看板体系，实现项目进度、数据状态实时可视，支撑管理层高效决策', owner: '周敏' },
  { category: 'AI & 系统智能化', title: '方案偏离定义和系统搭建', description: '完成方案偏离管理体系与配套系统搭建，实现方案偏离事件全流程标准化管控，降低合规风险', owner: '孙萍' },
  { category: 'AI & 系统智能化', title: '临床数据管理与统计分析 timeline 模板搭建', description: '搭建全项目周期标准化时间线模板，统一全部门项目管控节奏，提升项目管理标准化水平', owner: '孙萍' },
  { category: '国内外法规合规', title: '不同地区的伦理审查要求对数据管理的影响', description: '完成多区域伦理审查规则全面梳理，明确各地数据管理合规要求，前置规避多中心项目伦理合规风险', owner: '杨俐娴' },
  { category: '国内外法规合规', title: '隐私保护文章：去中心化临床试验中的受试者数据隐私保护', description: '形成去中心化临床试验隐私保护成文方案，匹配国内外隐私法规要求，完善受试者数据全流程保护体系', owner: '杨俐娴' },
  { category: '国内外法规合规', title: 'FDA_研究技术一致性指南', description: '完成 FDA 核心技术指南拆解与落地指引，对标欧美监管要求，为公司海外临床试验项目合规落地提供支撑', owner: '李元晶' },
  { category: '国内外法规合规', title: 'HL7 FHIR 介绍与数据结构解析', description: '完成国际通用医疗数据标准深度解析，明确数据结构规范，接轨全球临床试验数据标准，支撑国际化业务', owner: '李元晶' },
  { category: '标准体系建设', title: 'CCG 标准工作组', description: '统筹制定临床数据通用标准体系，统一全部门数据口径与业务规范，筑牢部门业务底层标准底座', owner: '周敏' },
  { category: '标准体系建设', title: 'EPOCH 项目 EDC 治疗期处置事件表单数据录入建议', description: '制定长周期项目 EDC 表单录入专项规范，优化数据录入标准，提升长周期项目数据质量与一致性', owner: '杨俐娴' },
  { category: '标准体系建设', title: 'PCWG3 评估标准的标准 eCRF、CCG 与 DVP 设计与撰写', description: '完成核心评估标准的配套文档编制，统一试验表单设计规范，实现全项目表单设计标准化、可复用', owner: '杨俐娴' },
  { category: '项目模板资产沉淀', title: 'Clinflash 批量数据审核冻结文档制作模板', description: '沉淀批量数据审核冻结标准化模板与操作手册，固化项目结题核心流程，大幅缩短项目结题周期', owner: '李元晶' },
  { category: '项目模板资产沉淀', title: '(盲态) 数据审核报告 (DRR) 模板搭建', description: '完成盲态数据审核报告标准化模板搭建，统一项目数据审核输出规范，提升报告出具效率与质量', owner: '孙萍' },
  { category: '项目模板资产沉淀', title: '量表采买经验与可靠量表积累维护', description: '汇总全项目成熟量表资源，搭建部门量表知识库，实现新项目量表资源直接复用，降低项目采买与调研成本', owner: '谢庭益' },
  { category: '内部培训赋能', title: 'EDC 培训通用培训视频', description: '制作 EDC 系统标准化培训视频，搭建新人标准化培训体系，实现新人快速上手，降低部门培训成本', owner: '孙萍' },
  { category: 'SOP & 知识库搭建', title: '主导临床数据部 SOP 的体系化重构', description: '完成全部门 SOP 体系化重构，优化现有管理制度，补齐流程短板，完善部门内控管理体系', owner: '王今歌' },
  { category: 'Vibe Coding 探索', title: 'TQB3616-III-03 事件数追踪工具', description: '追踪 IDFS、DRFS 录入情况，提醒关键数据及时录入 EDC，查看项目基本情况与治疗结束状态分布', owner: '杨俐娴' },
  { category: 'Vibe Coding 探索', title: 'Excel 文档比对工具', description: '追踪问题 Listing 解决情况，自动检测文件共同字段，支持自定义 key 进行比对', owner: '杨俐娴' },
  { category: 'Vibe Coding 探索', title: '访视计划日期计算器', description: '计算理论访视时间段，辅助临床试验访视排程', owner: '杨俐娴' },
  { category: 'Vibe Coding 探索', title: 'TQB3473-III-01 进展及疗效指标看板', description: '查看项目进展、入组人群特征、疗效指标变化趋势、个体血小板变化趋势、预测因素分析等', owner: '杨俐娴' },
  { category: 'Vibe Coding 探索', title: 'SAS Viya 数据管理报表自动化运行与通知', description: '自动化批量运行多项目 SAS Viya 报表、监测运行状态、下载并上传至云文档，启用机器人通知', owner: '杨俐娴' },
  { category: 'Vibe Coding 探索', title: '项目可视化报告', description: '涉及 Study Report、EDC 和 IRT 数据展示分析，包含入组情况、受试者分布、筛败原因、基线分析、疗效泳道图', owner: '王宇嘉' },
  { category: 'Vibe Coding 探索', title: 'Study Report 新旧报告比对', description: '导入两版 Study Report 生成比对文件，供各方参考数据改善情况，督促未改进中心', owner: '王宇嘉' },
  { category: 'Vibe Coding 探索', title: '新旧 Excel 比对工具', description: '导入两次 Excel 后比较，变动字段标黄色，新增行标蓝色，便于查看更新数据', owner: '王宇嘉' },
  { category: 'Vibe Coding 探索', title: 'OS 事件数跟踪工具', description: 'EDC OS 事件数与项目组 Excel 比对，生成不一致问题，包括缺失和日期不一致，便于追踪事件数', owner: '王宇嘉' },
  { category: 'Vibe Coding 探索', title: '受试者剂量分布情况图表', description: '利用 Vibe Coding 生成图表，查看受试者每周使用剂量分布情况', owner: '李元晶' },
  { category: 'Vibe Coding 探索', title: 'eCOA 填报依从性监测报表', description: '跟踪受试者 eCOA 填报时效、完成率、漏填及延迟数据，汇总各中心依从指标，支撑项目及时督促整改', owner: '李元晶' },
  { category: 'Vibe Coding 探索', title: '受试者分布情况桑基图', description: '依托入组分层数据构建桑基图，直观展示筛选、入组、脱落各环节流向与损耗情况', owner: '李元晶' },
  { category: 'Vibe Coding 探索', title: '项目待处理任务报表汇总及明细', description: '生成待处理任务报表，用于项目组跟进各中心待处理任务情况', owner: '贾潘丽' },
  { category: 'Vibe Coding 探索', title: 'Excel 数据比对工具', description: '利用 Vibe Coding 制作 Excel 比对工具，用于数据核查', owner: '孙萍' },
  { category: 'Vibe Coding 探索', title: 'TQC3721-III-01 安全性分析工具', description: '利用 Vibe Coding 开发依托于项目的小工具，辅助安全性分析', owner: '孙萍' },
  { category: 'Vibe Coding 探索', title: 'TQC3721-III-01 访视日期计算器', description: '利用 Vibe Coding 开发依托于项目的小工具，辅助访视排程', owner: '孙萍' },
  { category: 'Vibe Coding 探索', title: '新旧 SAS 数据集比对工具', description: '导入两个文件夹内 SAS 数据集，生成两次数据变化情况，追踪临床数据录入情况', owner: '陈帆' },
  { category: 'Vibe Coding 探索', title: '实验室检查范围审核工具', description: '导入运营填写的实验室范围和模板文件，迅速核查文件是否符合要求，减免 DM 审查时间', owner: '谢庭益' },
  { category: 'Vibe Coding 探索', title: 'VSCode+Cline 质疑分析工具', description: '生成质疑分析报告，查看 CRA 与 CRC 不同角色的质疑情况，协助数据清理', owner: '周敏' },
  { category: 'Vibe Coding 探索', title: 'VSCode+Claude 外部数据转换工具', description: '将第三方检测 Excel 数据转换为 Dataset.json 标准数据，含基本验证功能，传输至 sFTP', owner: '周敏' },
  { category: 'Vibe Coding 探索', title: 'Unique CRF 与 SDS 访视流程图自动生成合并工具', description: '根据 SDS 文件快速实现访视流程图生成并与 Unique CRF 拼接', owner: '周敏' },
]
