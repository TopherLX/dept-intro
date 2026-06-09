<template>
  <section id="topics">
    <SectionTitle title="研究课题" color="#8B5CF6" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="topic in topics"
        :key="topic.title"
        class="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sticker-violet transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5"
      >
        <p class="text-violet text-xs font-semibold mb-2">{{ topic.date }} · {{ topic.author }}</p>
        <h3 class="font-heading font-extrabold text-base text-slate-800 m-0 mb-3">{{ topic.title }}</h3>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in topic.tags"
            :key="tag"
            class="text-xs px-2.5 py-0.5 rounded-full bg-violet-light text-violet font-medium"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { topics } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'
</script>
