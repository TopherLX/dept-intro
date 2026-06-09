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
        class="max-w-6xl mx-auto px-6"
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

const sections = [
  { id: 'members', component: MembersSection },
  { id: 'tech', component: TechSection },
  { id: 'workmode', component: WorkModeSection },
  { id: 'topics', component: TopicsSection },
  { id: 'training', component: TrainingSection },
  { id: 'events', component: EventsSection },
]
</script>
