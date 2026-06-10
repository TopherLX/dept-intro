<template>
  <article class="flex flex-col">
    <a
      v-if="item.link"
      :href="item.link"
      target="_blank"
      class="group relative mb-4 aspect-[4/3] overflow-hidden border-2 border-slate-800 bg-white shadow-[4px_4px_0px_0px_#1E293B] hover:shadow-[8px_8px_0px_0px_#FBBF24] transition-all block no-underline"
    >
      <div
        class="absolute inset-0 border-slate-800 border-b-2 overflow-hidden pb-3"
        :class="item.borderRadius"
        :style="item.image ? {} : { backgroundColor: placeholderColors[glowIdx] }"
      >
        <img
          v-if="item.image"
          :src="`${baseUrl}${item.image}`"
          :alt="item.title"
          :class="['h-full w-full transition-transform duration-500 group-hover:scale-110', item.padding || (item.image.endsWith('.svg') ? 'object-contain p-10' : 'object-contain p-14')]"
        />
        <div
          v-else
          class="h-full w-full flex items-center justify-center text-4xl"
        >
          {{ ['🖥️', '📊', '📡', '🎓', '📋', '🔐', '📝', '📚', '🧱', '🗄️'][glowIdx] }}
        </div>
      </div>
      <div
        class="absolute right-4 bottom-4 rotate-3 rounded-md border-2 border-slate-800 bg-white px-3 py-1 font-bold text-xs shadow-[2px_2px_0px_0px_#1E293B]"
      >
        {{ item.badge }}
      </div>
    </a>
    <div
      v-else
      class="group relative mb-4 aspect-[4/3] overflow-hidden border-2 border-slate-800 bg-white shadow-[4px_4px_0px_0px_#1E293B] hover:shadow-[8px_8px_0px_0px_#FBBF24] transition-all"
    >
      <div
        class="absolute inset-0 border-slate-800 border-b-2 overflow-hidden pb-3"
        :class="item.borderRadius"
        :style="item.image ? {} : { backgroundColor: placeholderColors[glowIdx] }"
      >
        <img
          v-if="item.image"
          :src="`${baseUrl}${item.image}`"
          :alt="item.title"
          :class="['h-full w-full transition-transform duration-500 group-hover:scale-110', item.padding || (item.image.endsWith('.svg') ? 'object-contain p-10' : 'object-contain p-14')]"
        />
        <div
          v-else
          class="h-full w-full flex items-center justify-center text-4xl"
        >
          {{ ['🖥️', '📊', '📡', '🎓', '📋', '🔐', '📝', '📚', '🧱', '🗄️'][glowIdx] }}
        </div>
      </div>
      <div
        class="absolute right-4 bottom-4 rotate-3 rounded-md border-2 border-slate-800 bg-white px-3 py-1 font-bold text-xs shadow-[2px_2px_0px_0px_#1E293B]"
      >
        {{ item.badge }}
      </div>
    </div>
    <h3 class="mb-2 font-heading font-extrabold text-lg text-slate-800 leading-tight">
      {{ item.title }}
    </h3>
    <p class="mb-4 line-clamp-2 text-slate-500 text-sm leading-relaxed">
      {{ item.description }}
    </p>
  </article>
</template>

<script setup lang="ts">
import type { Showcase } from '@/data/types'

const baseUrl = import.meta.env.BASE_URL
const placeholderColors = ['#EDE9FE', '#FCE7F3', '#D1FAE5', '#FEF3C7', '#E0E7FF', '#FEE2E2', '#F3E8FF', '#E0F2FE', '#FEF9C3', '#FFE4E6']

defineProps<{ item: Showcase; glowIdx: number }>()
</script>
