<template>
  <TeamIntroSection :summary="teamIntro.summary" :highlights="teamIntro.highlights" />
  <ResponsibilitiesSection :responsibilities="responsibilities" />
</template>

<script setup lang="ts">
import { teamIntro, responsibilities } from '@/data/content'
import TeamIntroSection from './TeamIntroSection.vue'
import ResponsibilitiesSection from './ResponsibilitiesSection.vue'
</script>
