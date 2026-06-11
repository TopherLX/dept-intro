<template>
  <TeamPageLayout :data="teamData" :visible-sections="visibleSections">
    <template #after-intro>
      <OrgChartSection :data="orgChart" />
    </template>
    <template #after-members>
      <WorkingGroupsSection :working-groups="workingGroups" />
    </template>
    <template #after-showcase>
      <ProjectAnalysisSection file="cdm-team2-project-analysis.html" />
    </template>
  </TeamPageLayout>
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import OrgChartSection from '@/components/orgchart/OrgChartSection.vue'
import WorkingGroupsSection from '@/components/team/WorkingGroupsSection.vue'
import ProjectAnalysisSection from '@/components/project-analysis/ProjectAnalysisSection.vue'
import { hero, teamIntro, responsibilities, members, showcases, topics, trainings, orgChart, workingGroups } from '@/data/cdm-team2'

const visibleSections = ['hero', 'teamIntro', 'responsibilities']
const teamData = { hero, teamIntro, responsibilities, members, showcases, topics, trainings }
</script>
