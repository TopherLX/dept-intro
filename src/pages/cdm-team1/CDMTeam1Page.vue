<template>
  <TeamPageLayout :data="teamData" :visible-sections="visibleSections">
    <template #after-members>
      <OrgChartSection :data="orgChart" />
      <WorkingGroupsSection :working-groups="workingGroups" />
      <CoreSkillsSection :skills="coreSkills" />
    </template>
    <template #after-showcase>
      <ProjectAnalysisSection />
      <ResearchTopicsSection :topics="researchTopics" :summary="topicsSummary" />
    </template>
  </TeamPageLayout>
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import OrgChartSection from '@/components/orgchart/OrgChartSection.vue'
import WorkingGroupsSection from '@/components/team/WorkingGroupsSection.vue'
import CoreSkillsSection from '@/components/team/CoreSkillsSection.vue'
import ProjectAnalysisSection from '@/components/project-analysis/ProjectAnalysisSection.vue'
import ResearchTopicsSection from '@/components/knowledge/ResearchTopicsSection.vue'
import { hero, teamIntro, responsibilities, members, showcases, topics, trainings, orgChart, workingGroups, coreSkills, researchTopics } from '@/data/cdm-team1'

const topicsSummary = `围绕数字化、标准化与智能化三大方向，共推进40余项创新课题，覆盖法律法规合规、标准体系建设、SOP体系重构、AI与系统智能化、Vibe Coding探索、EDC标准化培训等领域，整体形成"AI赋能 + 标准引领 + 工具落地"的创新驱动模式。`
const visibleSections = ['hero', 'teamIntro', 'responsibilities']
const teamData = { hero, teamIntro, responsibilities, members, showcases, topics, trainings }
</script>
