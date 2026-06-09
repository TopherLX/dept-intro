<template>
  <section id="tech">
    <SectionTitle title="技术架构全景" color="#7C3AED" />

    <div class="bg-white border-2 border-slate-200 rounded-2xl shadow-sticker p-6">
      <p class="text-slate-500 text-sm mb-6 text-center">
        四层技术架构支撑临床数据科学的全链路 — 从数据采集到智能分析
      </p>

      <div class="space-y-4">
        <div
          v-for="layer in techLayers"
          :key="layer.name"
          class="rounded-xl border-2 p-4 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
          :style="{
            borderColor: layer.color,
            backgroundColor: `${layer.color}08`,
            boxShadow: `3px 3px 0 ${layer.color}40`,
          }"
        >
          <div class="flex items-center gap-2 mb-3">
            <div class="w-3 h-3 rounded-full flex-shrink-0" :style="{ backgroundColor: layer.color }" />
            <span class="font-heading text-sm font-extrabold" :style="{ color: layer.color }">
              {{ layer.name }}
            </span>
          </div>
          <div class="flex flex-wrap gap-2">
            <n-popover
              v-for="item in layer.items"
              :key="item.name"
              trigger="hover"
              placement="top"
            >
              <template #trigger>
                <span
                  class="inline-block px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
                  :style="{
                    backgroundColor: `${layer.color}15`,
                    color: layer.color,
                    border: `1px solid ${layer.color}40`,
                  }"
                >
                  {{ item.name }}
                </span>
              </template>
              <div class="p-1">
                <p class="font-bold text-sm m-0">{{ item.name }}</p>
                <p class="text-xs text-slate-500 mt-1 m-0">{{ item.desc }}</p>
              </div>
            </n-popover>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/shared/SectionTitle.vue'
import { techLayers } from '@/data/content'
</script>
