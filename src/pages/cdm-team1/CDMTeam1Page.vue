<template>
  <TeamPageLayout :data="teamData" :visible-sections="visibleSections">
    <template #after-members>
      <OrgChartSection :data="orgChart" />
    </template>
    <template #after-showcase>
      <ProjectAnalysisSection />
      <ResearchTopicsSection :topics="researchTopics" />
    </template>
  </TeamPageLayout>
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import OrgChartSection from '@/components/orgchart/OrgChartSection.vue'
import ProjectAnalysisSection from '@/components/project-analysis/ProjectAnalysisSection.vue'
import ResearchTopicsSection from '@/components/knowledge/ResearchTopicsSection.vue'
import { hero, teamIntro, responsibilities, members, showcases, topics, trainings, orgChart, researchTopics } from '@/data/cdm-team1'

const visibleSections = ['hero', 'teamIntro', 'responsibilities']
const teamData = { hero, teamIntro, responsibilities, members, showcases, topics, trainings }
</script>
