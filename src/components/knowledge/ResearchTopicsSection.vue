<template>
  <section id="topics" class="scroll-mt-16 pb-24">
    <SectionTitle title="研究课题" color="#8B5CF6" />
    <p v-if="summary" class="mt-6 text-lg text-slate-800 leading-relaxed">{{ summary }}</p>
    <div class="mt-12 space-y-16">
      <div v-for="group in groupedTopics" :key="group.category">
        <button
          class="flex items-center gap-3 w-full text-left mb-6 group cursor-pointer"
          @click="toggle(group.category)"
        >
          <div
            class="w-6 h-6 rounded-full border-2 border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300"
            :class="{ 'rotate-90': expanded.has(group.category) }"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          <h3 class="font-heading font-bold text-xl text-slate-800">
            {{ group.category }}
            <span class="text-sm text-slate-400 font-normal ml-2">({{ group.topics.length }})</span>
          </h3>
        </button>
        <div v-show="expanded.has(group.category)" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="topic in group.topics"
            :key="topic.title"
            class="sticker-card group relative rounded-2xl border-2 border-slate-800 bg-white p-6 shadow-sticker hover:shadow-sticker-violet"
          >
            <p class="font-heading font-bold text-slate-800 text-base mb-2 leading-snug">{{ topic.title }}</p>
            <p class="text-sm text-slate-500 mb-3 leading-relaxed">{{ topic.description }}</p>
            <div class="flex items-center gap-2 mt-auto pt-3 border-t border-slate-100">
              <span class="text-xs text-slate-400">负责人</span>
              <span class="text-xs font-medium text-violet">{{ topic.owner }}</span>
            </div>
            <!-- Corner decoration -->
            <div
              class="absolute top-0 right-0 h-8 w-8 rounded-bl-2xl border-slate-800 border-b-2 border-l-2"
              :class="['bg-amber', 'bg-pink', 'bg-mint'][group.topics.indexOf(topic) % 3]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ResearchTopic } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'

const props = defineProps<{ topics: ResearchTopic[]; summary?: string }>()

const expanded = ref(new Set<string>(['AI & 系统智能化']))

function toggle(category: string) {
  if (expanded.value.has(category)) {
    expanded.value.delete(category)
  } else {
    expanded.value.add(category)
  }
}

const groupedTopics = computed(() => {
  const groups: { category: string; topics: ResearchTopic[] }[] = []
  const seen = new Set<string>()
  for (const t of props.topics) {
    if (!seen.has(t.category)) {
      seen.add(t.category)
      groups.push({ category: t.category, topics: [] })
    }
    groups.find(g => g.category === t.category)!.topics.push(t)
  }
  return groups
})
</script>
