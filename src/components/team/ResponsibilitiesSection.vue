<template>
  <section id="responsibilities" class="scroll-mt-16 pb-24">
    <SectionTitle title="核心职责" color="#FBBF24" />
    <EmptyPlaceholder v-if="responsibilities.length === 0" />
    <template v-else>
      <div class="grid gap-6" :style="row1Style">
        <ResponsibilityCard
          v-for="item in row1"
          :key="item.title"
          v-bind="item"
        />
      </div>
      <div v-if="row2.length" class="grid gap-6 mt-6" :style="row2Style">
        <ResponsibilityCard
          v-for="item in row2"
          :key="item.title"
          v-bind="item"
        />
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Responsibility } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import ResponsibilityCard from './ResponsibilityCard.vue'
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder.vue'

const props = withDefaults(defineProps<{
  responsibilities: Responsibility[]
}>(), {
  responsibilities: () => [],
})

const half = computed(() => Math.ceil(props.responsibilities.length / 2))
const row1 = computed(() => props.responsibilities.slice(0, half.value))
const row2 = computed(() => props.responsibilities.slice(half.value))

const row1Style = computed(() => ({
  gridTemplateColumns: `repeat(${half.value}, minmax(0, 1fr))`,
}))

const row2Style = computed(() => {
  if (!row2.value.length) return {}
  return {
    gridTemplateColumns: `repeat(${row2.value.length}, minmax(0, 1fr))`,
    maxWidth: `${(row2.value.length / half.value) * 100}%`,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})
</script>
