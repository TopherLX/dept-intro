<template>
  <section id="topics" class="pb-24 scroll-mt-16">
    <SectionTitle title="研究课题" color="#8B5CF6" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(topic, idx) in sortedTopics"
        :key="topic.title"
        class="sticker-card group relative flex items-center gap-4 rounded-2xl border-2 border-slate-800 bg-white p-6 shadow-sticker hover:shadow-sticker-violet"
      >
        <!-- Floating photo circle -->
        <img
          :src="`${baseUrl}members/${topic.author}.png`"
          :alt="topic.author"
          class="h-14 w-14 rounded-full object-cover flex-shrink-0" style="box-shadow: 4px 4px 0 #E2E8F0"
        />
        <div class="flex flex-col flex-1 min-w-0">
          <h3 class="mb-1 font-heading font-extrabold text-slate-800 text-lg">{{ topic.title }}</h3>
          <p class="text-xs text-slate-400 font-medium mb-2">{{ topic.date }} · {{ topic.author }}</p>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="(tag, ti) in topic.tags"
              :key="tag"
              :class="`tag-${ti % 4} text-xs px-2.5 py-0.5 rounded-full font-medium`"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <!-- Corner decoration -->
        <div
          class="absolute top-0 right-0 h-8 w-8 rounded-bl-2xl border-slate-800 border-b-2 border-l-2"
          :class="['bg-amber', 'bg-pink', 'bg-mint'][idx % 3]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { topics } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'

const baseUrl = import.meta.env.BASE_URL

const sortedTopics = computed(() =>
  [...topics].sort((a, b) => b.date.localeCompare(a.date))
)
</script>
