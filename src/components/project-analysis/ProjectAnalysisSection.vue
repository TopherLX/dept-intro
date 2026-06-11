<template>
  <section id="project-analysis" class="scroll-mt-16 pb-24">
    <div class="flex items-end gap-4">
      <div class="flex-1 min-w-0 [&>div]:mb-0">
        <SectionTitle title="项目分析" color="#8B5CF6" />
      </div>
      <a
        :href="src"
        target="_blank"
        class="secondary-btn inline-flex items-center gap-1.5 rounded-full border-2 border-slate-800 px-3.5 py-1.5 font-heading font-bold text-xs text-slate-800 no-underline"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        新窗口打开
      </a>
    </div>
    <div class="mt-10">
      <div ref="placeholder" style="height: 90vh; min-height: 600px;">
        <iframe
          v-if="loaded"
          :src="src"
          class="w-full border-0 rounded-2xl"
          style="height: 90vh; min-height: 600px;"
          title="项目分析报告"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SectionTitle from '@/components/shared/SectionTitle.vue'

const props = withDefaults(defineProps<{ file?: string }>(), { file: 'cdm-team1-project-analysis.html' })
const src = `${import.meta.env.BASE_URL}${props.file}`

const loaded = ref(false)
const placeholder = ref<HTMLElement>()

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!placeholder.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        loaded.value = true
        observer?.disconnect()
      }
    },
    { rootMargin: '300px' }
  )
  observer.observe(placeholder.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
