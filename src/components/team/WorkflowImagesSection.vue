<template>
  <section id="workflow" class="scroll-mt-16 pb-24">
    <SectionTitle title="工作推进" color="#34D399" />

    <div class="relative group mt-10">
      <div
        class="bg-white border-2 border-slate-800 rounded-2xl shadow-sticker p-4 sm:p-6 overflow-hidden cursor-pointer"
        @click="showModal = true"
      >
        <img
          :src="src"
          alt="推进过程"
          class="w-full rounded-xl"
        />
      </div>
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl bg-slate-800/5">
        <span class="bg-slate-800/80 text-white text-xs px-3 py-1.5 rounded-full">点击放大</span>
      </div>
    </div>

    <n-modal v-model:show="showModal" preset="card" title="推进过程 · 滚轮缩放" style="width:98vw;max-width:1600px" :mask-closable="true">
      <div class="overflow-auto" style="max-height:85vh;cursor:zoom-in" @wheel.prevent="onWheel">
        <div :style="{ transform: `scale(${scale})`, transformOrigin: 'top left', transition: 'transform 0.1s' }">
          <img :src="src" alt="推进过程" style="width:100%" />
        </div>
      </div>
    </n-modal>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionTitle from '@/components/shared/SectionTitle.vue'

const showModal = ref(false)
const scale = ref(1)

function onWheel(e: WheelEvent) {
  const delta = e.deltaY > 0 ? -0.1 : 0.1
  scale.value = Math.max(0.3, Math.min(3, scale.value + delta))
}

const src = `${import.meta.env.BASE_URL}cm/推进过程.png`
</script>
