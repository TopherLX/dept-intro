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
        :ref="(el) => setSectionRef(section.id, el as HTMLElement)"
        class="max-w-6xl mx-auto px-6 transition-all duration-700"
        :class="visibleSections.has(section.id)
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'"
      >
        <component :is="section.component" />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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

const visibleSections = ref(new Set<string>())
const sectionRefs = ref<Map<string, HTMLElement>>(new Map())

function setSectionRef(id: string, el: HTMLElement | null) {
  if (el) sectionRefs.value.set(id, el)
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id
        if (entry.isIntersecting && id) {
          visibleSections.value = new Set([...visibleSections.value, id])
        }
      })
    },
    { threshold: 0.1 },
  )
  sectionRefs.value.forEach((el) => observer!.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>
