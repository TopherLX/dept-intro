<template>
  <section id="members" class="py-24">
    <SectionTitle title="团队成员" color="#8B5CF6" />

    <div class="relative">
      <div
        ref="scrollContainer"
        class="flex gap-5 overflow-x-auto overflow-y-visible pb-6 pt-3 scroll-smooth member-scroll"
        @mouseenter="stopAutoScroll"
        @mouseleave="startAutoScroll"
      >
        <MemberCard
          v-for="(member, idx) in members"
          :key="member.name"
          :member="member"
          :shadow-color="shadowColors[idx % shadowColors.length]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { members } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import MemberCard from './MemberCard.vue'

const shadowColors = ['#F472B6', '#8B5CF6', '#FBBF24', '#34D399']

const scrollContainer = ref<HTMLElement | null>(null)
let rafId: number | null = null
let resetting = false

function scroll() {
  const el = scrollContainer.value
  if (!el || resetting) {
    rafId = requestAnimationFrame(scroll)
    return
  }

  el.scrollLeft += 0.8

  const maxScroll = el.scrollWidth - el.clientWidth
  if (el.scrollLeft >= maxScroll) {
    resetting = true
    el.scrollTo({ left: 0, behavior: 'smooth' })
    setTimeout(() => { resetting = false }, 600)
  }

  rafId = requestAnimationFrame(scroll)
}

function startAutoScroll() {
  if (rafId) return
  rafId = requestAnimationFrame(scroll)
}

function stopAutoScroll() {
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>
