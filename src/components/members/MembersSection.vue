<template>
  <section id="members" class="pb-24 scroll-mt-16">
    <SectionTitle title="团队成员" color="#8B5CF6" />

    <EmptyPlaceholder v-if="props.members.length === 0" />
    <div v-else class="relative">
      <div
        ref="scrollContainer"
        class="flex gap-5 overflow-x-auto overflow-y-visible pb-10 pt-6 px-4 scroll-smooth member-scroll"
        @mouseenter="stopAutoScroll"
        @mouseleave="startAutoScroll"
        @mousedown.stop="handleClick"
        @click.stop
        @scroll="updateFade"
      >
        <MemberCard
          v-for="(member, idx) in props.members"
          :key="member.name"
          :member="member"
          :shadow-color="shadowColors[idx % shadowColors.length]"
        />
      </div>
      <!-- Left fade -->
      <div
        class="pointer-events-none absolute left-0 top-0 bottom-0 w-5 transition-opacity duration-200"
        :class="showLeftFade ? 'opacity-100' : 'opacity-0'"
        style="background: linear-gradient(to right, #FFFDF5, transparent);"
      />
      <!-- Right fade -->
      <div
        class="pointer-events-none absolute right-0 top-0 bottom-0 w-5 transition-opacity duration-200"
        :class="showRightFade ? 'opacity-100' : 'opacity-0'"
        style="background: linear-gradient(to left, #FFFDF5, transparent);"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Member } from '@/data/types'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import MemberCard from './MemberCard.vue'

const props = withDefaults(defineProps<{ members: Member[] }>(), { members: () => [] })

const shadowColors = ['#F472B6', '#8B5CF6', '#FBBF24', '#34D399']

const scrollContainer = ref<HTMLElement | null>(null)
const showLeftFade = ref(false)
const showRightFade = ref(true)
let timerId: ReturnType<typeof setInterval> | null = null
let pauseTimer: ReturnType<typeof setTimeout> | null = null
let stopped = false

function updateFade() {
  const el = scrollContainer.value
  if (!el) return
  showLeftFade.value = el.scrollLeft > 4
  showRightFade.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 4
}

function handleClick() {
  stopped = true
  stopAutoScroll()
}

function startAutoScroll() {
  if (timerId || stopped) return
  timerId = setInterval(() => {
    const el = scrollContainer.value
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    if (maxScroll <= 0) return

    el.scrollLeft += 0.8
    updateFade()

    if (el.scrollLeft >= maxScroll) {
      stopAutoScroll()
      pauseTimer = setTimeout(() => {
        const el2 = scrollContainer.value
        if (!el2) return
        el2.scrollTo({ left: 0, behavior: 'instant' })
        updateFade()
        if (!stopped) startAutoScroll()
      }, 5000)
    }
  }, 16)
}

function stopAutoScroll() {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
  if (pauseTimer) {
    clearTimeout(pauseTimer)
    pauseTimer = null
  }
}

function resumeScroll() {
  stopped = false
  startAutoScroll()
}

onMounted(() => {
  startAutoScroll()
  document.addEventListener('click', resumeScroll)
})

onUnmounted(() => {
  stopAutoScroll()
  document.removeEventListener('click', resumeScroll)
})
</script>
