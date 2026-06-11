<template>
  <TeamPageLayout :data="dsTeamData" :visible-sections="visibleSections">
    <template #after-intro>
      <MembersSection :members="dsTeamData.members" />
    </template>
    <template #after-showcase>
      <EventsSection />
      <TechSection />
      <WorkModeSection />
    </template>
  </TeamPageLayout>
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
import MembersSection from '@/components/members/MembersSection.vue'
import TechSection from '@/components/tech/TechSection.vue'
import WorkModeSection from '@/components/workmode/WorkModeSection.vue'
import EventsSection from '@/components/knowledge/EventsSection.vue'
import {
  hero,
  teamIntro,
  responsibilities,
  members,
  showcases,
  topics,
  trainings,
} from '@/data/ds-team'

const visibleSections = ['hero', 'teamIntro', 'responsibilities', 'showcase', 'topics', 'training']
const dsTeamData = {
  hero,
  teamIntro,
  responsibilities,
  members,
  showcases,
  topics,
  trainings,
}
</script>
