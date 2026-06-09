<template>
  <section id="events" class="pb-24">
    <SectionTitle title="会议宣发" color="#F59E0B" />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      <div
        v-for="event in posterEvents"
        :key="event.title"
        class="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-sticker-amber transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer group"
      >
        <div class="aspect-[3/4] bg-amber-light/30 flex items-center justify-center overflow-hidden">
          <n-image
            :src="`/posters/${event.poster}`"
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
</script>
