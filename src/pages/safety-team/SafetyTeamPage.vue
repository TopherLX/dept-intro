<template>
  <TeamPageLayout :data="teamData" />
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import { hero, teamIntro, responsibilities, members, showcases, topics, trainings } from '@/data/safety-team'

const teamData = { hero, teamIntro, responsibilities, members, showcases, topics, trainings }
</script>
