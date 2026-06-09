<template>
  <section id="members">
    <SectionTitle title="团队成员" color="#8B5CF6" />
    <n-carousel
      :slides-per-view="slidesPerView"
      :space-between="16"
      draggable
      dot-type="line"
      :show-dots="true"
      class="pb-10"
    >
      <MemberCard
        v-for="(member, idx) in members"
        :key="member.name"
        :member="member"
        :shadow-color="shadowColors[idx % shadowColors.length]"
      />
    </n-carousel>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { members } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import MemberCard from './MemberCard.vue'

const shadowColors = ['#F472B6', '#8B5CF6', '#FBBF24', '#34D399']

const slidesPerView = computed(() => {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 768) return 1
  if (window.innerWidth < 1024) return 2
  return 3
})
</script>
