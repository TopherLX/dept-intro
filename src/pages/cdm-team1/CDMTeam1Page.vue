<template>
  <TeamPageLayout :data="teamData">
    <template #after-showcase>
      <OrgChartSection :data="orgChart" />
    </template>
  </TeamPageLayout>
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import OrgChartSection from '@/components/orgchart/OrgChartSection.vue'
import { hero, teamIntro, responsibilities, members, showcases, topics, trainings, orgChart } from '@/data/cdm-team1'

const teamData = { hero, teamIntro, responsibilities, members, showcases, topics, trainings }
</script>
