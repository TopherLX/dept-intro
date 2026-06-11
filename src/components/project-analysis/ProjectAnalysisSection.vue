<template>
  <section id="project-analysis" class="scroll-mt-16 pb-24">
    <SectionTitle title="项目分析" color="#8B5CF6" />
    <div class="mt-12">
      <iframe
        :src="`${import.meta.env.BASE_URL}project-analysis.html`"
        class="w-full border-0 rounded-2xl"
        style="height: 90vh; min-height: 600px;"
        title="项目分析报告"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/shared/SectionTitle.vue'
</script>
