<template>
  <section id="events" class="py-24 scroll-mt-16">
    <SectionTitle title="会议宣发" color="#F59E0B" />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      <div
        v-for="event in posterEvents"
        :key="event.title"
        class="sticker-card bg-white border-2 border-slate-800 rounded-xl overflow-hidden shadow-sticker-amber cursor-pointer group"
      >
        <div class="aspect-[3/4] bg-amber-light/30 flex items-center justify-center overflow-hidden">
          <n-image
            :src="`${baseUrl}posters/${event.poster}`"
            :alt="event.title"
            class="w-full h-full object-cover"
            preview-disabled
          />
        </div>
        <div class="p-3">
          <p class="text-amber-700 text-xs font-semibold mb-1">{{ event.date }}</p>
          <p class="text-slate-700 text-xs font-medium line-clamp-2 leading-snug">{{ event.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { posterEvents } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'

const baseUrl = import.meta.env.BASE_URL
</script>
