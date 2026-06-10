<template>
  <div class="max-w-6xl mx-auto px-6">
    <template v-for="section in visibleSections" :key="section">
      <HeroSection v-if="section === 'hero'" v-bind="data.hero" />
      <TeamIntroSection
        v-if="section === 'teamIntro'"
        :summary="data.teamIntro.summary"
        :highlights="data.teamIntro.highlights"
      />
      <ResponsibilitiesSection
        v-if="section === 'responsibilities'"
        :responsibilities="data.responsibilities"
      />
      <MembersSection v-if="section === 'members'" :members="data.members" />
      <ShowcaseSection v-if="section === 'showcase'" :showcases="data.showcases" />
      <TopicsSection v-if="section === 'topics'" :topics="data.topics" />
      <TrainingSection v-if="section === 'training'" :trainings="data.trainings" />
    </template>
    <slot name="extra" />
  </div>
</template>

<script setup lang="ts">
import type { HeroData, TeamIntro, Responsibility, Member, Showcase, Topic, Training } from '@/data/types'
import HeroSection from '@/components/hero/HeroSection.vue'
import TeamIntroSection from '@/components/team/TeamIntroSection.vue'
import ResponsibilitiesSection from '@/components/team/ResponsibilitiesSection.vue'
import MembersSection from '@/components/members/MembersSection.vue'
import ShowcaseSection from '@/components/showcase/ShowcaseSection.vue'
import TopicsSection from '@/components/knowledge/TopicsSection.vue'
import TrainingSection from '@/components/knowledge/TrainingSection.vue'

export interface TeamPageData {
  hero: HeroData
  teamIntro: TeamIntro
  responsibilities: Responsibility[]
  members: Member[]
  showcases: Showcase[]
  topics: Topic[]
  trainings: Training[]
}

withDefaults(defineProps<{
  data: TeamPageData
  visibleSections?: string[]
}>(), {
  visibleSections: () => [
    'hero',
    'teamIntro',
    'responsibilities',
    'members',
    'showcase',
    'topics',
    'training',
  ],
})
</script>
