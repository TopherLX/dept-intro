<template>
  <TeamPageLayout :data="teamData" :visible-sections="visibleSections">
    <template #after-members>
      <TimelineSection :timeline="timeline" />
      <WorkflowImagesSection />
    </template>
    <template #after-showcase>
      <ProjectAnalysisSection file="cm-team-project-analysis/traffic-light-kri.html" />
      <MonitoringReportSection />
    </template>
  </TeamPageLayout>
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import TimelineSection from '@/components/team/TimelineSection.vue'
import WorkflowImagesSection from '@/components/team/WorkflowImagesSection.vue'
import ProjectAnalysisSection from '@/components/project-analysis/ProjectAnalysisSection.vue'
import MonitoringReportSection from '@/components/project-analysis/MonitoringReportSection.vue'
import { hero, teamIntro, responsibilities, members, timeline } from '@/data/cm-team'

const visibleSections = ['hero', 'teamIntro', 'responsibilities', 'members']
const teamData = { hero, teamIntro, responsibilities, members, showcases: [], topics: [], trainings: [] }
</script>
