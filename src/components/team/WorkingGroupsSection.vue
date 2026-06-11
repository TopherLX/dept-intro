<template>
  <section id="working-groups" class="scroll-mt-16 pb-24">
    <SectionTitle title="工作组" color="#34D399" />
    <div class="grid gap-6" :style="{ gridTemplateColumns: `repeat(${workingGroups.length}, minmax(0, 1fr))` }">
      <div
        v-for="item in workingGroups"
        :key="item.name"
        class="sticker-card group relative rounded-2xl border-2 border-slate-800 bg-white p-6 shadow-sticker"
      >
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4"
          :style="{ backgroundColor: item.color }"
        >
          {{ item.icon }}
        </div>
        <h3 class="font-heading text-base font-extrabold text-slate-800 mb-2">{{ item.name }}</h3>
        <p class="text-sm text-slate-500 leading-relaxed">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { WorkingGroup } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'

defineProps<{
  workingGroups: WorkingGroup[]
}>()
</script>
