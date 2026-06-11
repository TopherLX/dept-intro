<template>
  <section id="timeline" class="scroll-mt-16">
    <SectionTitle title="发展阶段" color="#8B5CF6" class="mt-24" />
    <div class="relative mt-10">
      <!-- Horizontal line -->
      <div class="absolute left-0 right-0 top-[22px] h-0.5 rounded-full bg-slate-200" />
      <div class="grid gap-8" :style="{ gridTemplateColumns: `repeat(${timeline.length}, minmax(0, 1fr))` }">
        <div
          v-for="(item, idx) in timeline"
          :key="item.date"
          class="relative pt-14"
        >
          <!-- Dot on line -->
          <div
            class="absolute left-1/2 top-[18px] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-800 bg-white z-10"
            :style="{ backgroundColor: colors[idx % colors.length] }"
          />
          <!-- Connecting line from dot upward -->
          <div class="absolute left-1/2 top-[18px] w-0.5 h-3.5 -translate-x-1/2 rounded-full" :style="{ backgroundColor: colors[idx % colors.length] }" />
          <!-- Card -->
          <div class="sticker-card rounded-2xl border-2 border-slate-800 bg-white p-5 shadow-sticker text-center">
            <span class="inline-block rounded-full px-3 py-0.5 text-[11px] font-extrabold text-white mb-3" :style="{ backgroundColor: colors[idx % colors.length] }">
              {{ item.date }}
            </span>
            <h3 class="font-heading text-sm font-extrabold text-slate-800 mb-1.5">{{ item.title }}</h3>
            <p class="text-xs text-slate-500 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative group mt-10">
      <div
        class="bg-white border-2 border-slate-800 rounded-2xl shadow-sticker p-4 overflow-hidden cursor-pointer"
        @click="showModal = true"
      >
        <img
          :src="painPointSrc"
          alt="核心痛点"
          class="w-full rounded-xl"
        />
      </div>
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl bg-slate-800/5">
        <span class="bg-slate-800/80 text-white text-xs px-3 py-1.5 rounded-full">点击放大</span>
      </div>
    </div>

    <n-modal v-model:show="showModal" preset="card" title="核心痛点 · 滚轮缩放" style="width:98vw;max-width:1600px" :mask-closable="true">
      <div class="overflow-auto" style="max-height:85vh;cursor:zoom-in" @wheel.prevent="onWheel">
        <div :style="{ transform: `scale(${scale})`, transformOrigin: 'top left', transition: 'transform 0.1s' }">
          <img :src="painPointSrc" alt="核心痛点" style="width:100%" />
        </div>
      </div>
    </n-modal>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TimelineItem } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'

defineProps<{
  timeline: TimelineItem[]
}>()

const showModal = ref(false)
const scale = ref(1)

function onWheel(e: WheelEvent) {
  const delta = e.deltaY > 0 ? -0.1 : 0.1
  scale.value = Math.max(0.3, Math.min(3, scale.value + delta))
}

const colors = ['#8B5CF6', '#F472B6', '#34D399']
const painPointSrc = `${import.meta.env.BASE_URL}cm/核心痛点.png`
</script>
