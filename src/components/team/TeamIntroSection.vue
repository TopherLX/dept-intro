<template>
  <section class="pb-24 scroll-mt-16">
    <SectionTitle title="团队简介" color="#8B5CF6" />
    <EmptyPlaceholder v-if="!summary && highlights.length === 0" />
    <IntroCard v-else :summary="summary" :highlights="highlights" />
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/shared/SectionTitle.vue'
import IntroCard from './IntroCard.vue'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'

withDefaults(defineProps<{
  summary: string
  highlights: { label: string; value: string }[]
}>(), {
  summary: '',
  highlights: () => [],
})
</script>
