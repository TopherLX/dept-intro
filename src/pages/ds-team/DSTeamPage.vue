<template>
  <TeamPageLayout :data="dsTeamData">
    <template #extra>
      <div class="max-w-6xl mx-auto px-6">
        <TechSection />
        <WorkModeSection />
        <EventsSection />
      </div>
    </template>
  </TeamPageLayout>
</template>

<script setup lang="ts">
import TeamPageLayout from '@/components/layout/TeamPageLayout.vue'
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
