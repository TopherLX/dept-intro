<template>
  <section id="workmode">
    <SectionTitle title="工作模式变革" color="#D97706" />

    <div class="max-w-3xl mx-auto">
      <p class="text-slate-500 text-center mb-10">
        从数据管理者（CDM）到数据科学家（CDS）的转型之路
      </p>

      <n-timeline>
        <n-timeline-item
          v-for="item in timelineItems"
          :key="item.title"
          :color="item.color"
          :title="item.title"
        >
          <template #default>
            <p class="text-slate-500 text-sm leading-relaxed m-0">{{ item.description }}</p>
          </template>
        </n-timeline-item>
      </n-timeline>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/shared/SectionTitle.vue'
import { timelineItems } from '@/data/content'
</script>
