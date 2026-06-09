<template>
  <div class="min-h-screen bg-cream">
    <AppHeader />
    <main>
      <div class="max-w-6xl mx-auto px-6">
        <HeroSection />
      </div>
      <div
        v-for="section in sections"
        :key="section.id"
        :id="section.id"
        class="max-w-6xl mx-auto px-6 scroll-mt-20"
      >
        <component :is="section.component" />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/hero/HeroSection.vue'
import MembersSection from './components/members/MembersSection.vue'
import TechSection from './components/tech/TechSection.vue'
import WorkModeSection from './components/workmode/WorkModeSection.vue'
import TopicsSection from './components/knowledge/TopicsSection.vue'
import TrainingSection from './components/knowledge/TrainingSection.vue'
import EventsSection from './components/knowledge/EventsSection.vue'
import TeamSection from './components/team/TeamSection.vue'

const sections = [
  { id: 'team', component: TeamSection },
  { id: 'members', component: MembersSection },
  { id: 'events', component: EventsSection },
  { id: 'tech', component: TechSection },
  { id: 'workmode', component: WorkModeSection },
  { id: 'topics', component: TopicsSection },
  { id: 'training', component: TrainingSection },
]
</script>
