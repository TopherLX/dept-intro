<template>
  <div class="max-w-6xl mx-auto px-6 pb-165">
    <template v-for="section in beforeShowcaseSections" :key="section">
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
      <slot name="after-members" />
      <ShowcaseSection v-if="section === 'showcase'" :showcases="data.showcases" />
    </template>
    <slot name="after-showcase" />
    <template v-for="section in afterShowcaseSections" :key="section">
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

import { computed } from 'vue'

export interface TeamPageData {
  hero: HeroData
  teamIntro: TeamIntro
  responsibilities: Responsibility[]
  members: Member[]
  showcases: Showcase[]
  topics: Topic[]
  trainings: Training[]
}

const props = withDefaults(defineProps<{
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

const beforeSlots = ['hero', 'teamIntro', 'responsibilities', 'members', 'showcase']
const afterSlots = ['topics', 'training']

const beforeShowcaseSections = computed(() =>
  props.visibleSections.filter(s => beforeSlots.includes(s))
)
const afterShowcaseSections = computed(() =>
  props.visibleSections.filter(s => afterSlots.includes(s))
)
</script>
