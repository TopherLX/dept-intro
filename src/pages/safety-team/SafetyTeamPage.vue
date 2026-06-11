<template>
  <TeamPageLayout :data="teamData" :visible-sections="visibleSections">
    <template #after-hero>
      <BackgroundSection />
    </template>
    <template #after-intro>
      <MembersSection :members="teamData.members" />
    </template>
    <template #after-showcase>
      <ProjectAnalysisSection file="https://clinmatrix_test.cttq.com/" />
    </template>
  </TeamPageLayout>
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import MembersSection from '@/components/members/MembersSection.vue'
import BackgroundSection from '@/components/team/BackgroundSection.vue'
import ProjectAnalysisSection from '@/components/project-analysis/ProjectAnalysisSection.vue'
import { hero, teamIntro, responsibilities, members, showcases, topics, trainings } from '@/data/safety-team'

const visibleSections = ['hero', 'teamIntro', 'responsibilities']
const teamData = { hero, teamIntro, responsibilities, members, showcases: [], topics: [], trainings: [] }
</script>
