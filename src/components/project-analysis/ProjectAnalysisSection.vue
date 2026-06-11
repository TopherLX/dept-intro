<template>
  <section id="project-analysis" class="scroll-mt-16 pb-24">
    <div class="flex items-center justify-between">
      <SectionTitle title="项目分析" color="#8B5CF6" />
      <a
        :href="src"
        target="_blank"
        class="secondary-btn inline-flex items-center gap-2 rounded-full border-2 border-slate-800 px-5 py-2.5 font-heading font-bold text-sm text-slate-800 no-underline"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        新窗口打开
      </a>
    </div>
    <div class="mt-8">
      <iframe
        :src="src"
        class="w-full border-0 rounded-2xl"
        style="height: 90vh; min-height: 600px;"
        title="项目分析报告"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/shared/SectionTitle.vue'

const src = `${import.meta.env.BASE_URL}project-analysis.html`
</script>
