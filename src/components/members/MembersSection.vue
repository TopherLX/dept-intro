<template>
  <section id="members" class="py-24">
    <SectionTitle title="团队成员" color="#8B5CF6" />

    <div class="relative">
      <!-- Scroll container with visible scrollbar -->
      <div
        ref="scrollContainer"
        class="flex gap-5 overflow-x-auto pb-6 scroll-smooth member-scroll"
        @mouseenter="stopAutoScroll"
        @mouseleave="startAutoScroll"
      >
        <MemberCard
          v-for="(member, idx) in members"
          :key="member.name"
          :member="member"
          :shadow-color="shadowColors[idx % shadowColors.length]"
        />
        <!-- Duplicate cards for seamless infinite scroll -->
        <MemberCard
          v-for="(member, idx) in members"
          :key="`dup-${member.name}`"
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
let autoScrollTimer: ReturnType<typeof setInterval> | null = null

function startAutoScroll() {
  const el = scrollContainer.value
  if (!el) return

  autoScrollTimer = setInterval(() => {
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 0
    } else {
      el.scrollLeft += 1
    }
  }, 30)
}

function stopAutoScroll() {
  if (autoScrollTimer) {
    clearInterval(autoScrollTimer)
    autoScrollTimer = null
  }
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>
