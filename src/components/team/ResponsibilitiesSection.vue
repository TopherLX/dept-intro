<template>
  <section class="pb-24">
    <SectionTitle title="核心职责" color="#FBBF24" class="mt-24" />
    <EmptyPlaceholder v-if="responsibilities.length === 0" />
    <template v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ResponsibilityCard
          v-for="item in responsibilities.slice(0, 3)"
          :key="item.title"
          v-bind="item"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:max-w-2xl lg:mx-auto">
        <ResponsibilityCard
          v-for="item in responsibilities.slice(3, 5)"
          :key="item.title"
          v-bind="item"
        />
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import type { Responsibility } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import ResponsibilityCard from './ResponsibilityCard.vue'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'

withDefaults(defineProps<{
  responsibilities: Responsibility[]
}>(), {
  responsibilities: () => [],
})
</script>
