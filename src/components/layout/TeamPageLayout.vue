<template>
  <div class="max-w-6xl mx-auto px-6 pb-165">
    <HeroSection v-if="showHero" v-bind="data.hero" />
    <slot name="after-hero" />
    <TeamIntroSection
      v-if="showTeamIntro"
      :summary="data.teamIntro.summary"
      :highlights="data.teamIntro.highlights"
    />
    <slot name="after-intro" />
    <ResponsibilitiesSection
      v-if="showResponsibilities"
      :responsibilities="data.responsibilities"
    />
    <slot name="after-responsibilities" />
    <MembersSection v-if="showMembers" :members="data.members" />
    <slot name="after-members" />
    <ShowcaseSection v-if="showShowcase" :showcases="data.showcases" />
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

const showHero = computed(() => props.visibleSections.includes('hero'))
const showTeamIntro = computed(() => props.visibleSections.includes('teamIntro'))
const showResponsibilities = computed(() => props.visibleSections.includes('responsibilities'))
const afterSlots = ['topics', 'training']

const showMembers = computed(() => props.visibleSections.includes('members'))
const showShowcase = computed(() => props.visibleSections.includes('showcase'))
const afterShowcaseSections = computed(() =>
  props.visibleSections.filter(s => afterSlots.includes(s))
)
</script>
