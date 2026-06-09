<template>
  <section id="events" class="pb-24 scroll-mt-16">
    <SectionTitle title="会议宣发" color="#F59E0B" />

    <div class="relative max-w-5xl mx-auto">
      <!-- Left arrow -->
      <button
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 w-10 h-10 rounded-full border-2 border-slate-800 bg-white shadow-pop flex items-center justify-center hover:bg-amber-light transition-colors cursor-pointer"
        @click="scroll(-1)"
      >
        <span class="text-slate-800 font-bold">←</span>
      </button>

      <!-- Cards container -->
      <div
        ref="galleryRef"
        class="flex items-center gap-4 overflow-x-auto !overflow-y-visible scroll-smooth pb-8 snap-x snap-mandatory px-12"
        style="scrollbar-width: none; perspective: 800px;"
        @scroll="onScroll"
      >
        <div
          v-for="(event, idx) in posterEvents"
          :key="event.title"
          :ref="(el) => setCardRef(idx, el as HTMLElement)"
          class="snap-center flex-shrink-0 transition-all duration-500 ease-out cursor-pointer"
          @click="scrollTo(idx)"
          :style="{
            width: '400px',
            transform: getCardTransform(idx),
            opacity: getCardOpacity(idx),
            zIndex: activeIdx === idx ? 10 : 0,
          }"
        >
          <div class="group/card">
            <div class="bg-white border-2 border-slate-800 rounded-xl overflow-hidden shadow-sticker-amber h-full flex flex-col transition-all duration-300 group-hover/card:scale-105 group-hover/card:-translate-y-1" style="transform-origin: center;">
              <div class="overflow-y-auto flex-1" style="max-height: 500px;">
                <img
                  :src="`${baseUrl}posters/${event.poster}`"
                  :alt="event.title"
                  class="w-full"
                />
              </div>
              <div class="p-3 flex-shrink-0 border-t-2 border-slate-100 flex items-baseline gap-2">
                <span class="text-amber-700 text-xs font-semibold flex-shrink-0">{{ event.date }}</span>
                <span class="text-slate-700 text-sm font-medium line-clamp-1">{{ event.title }}</span>
              <span v-if="event.speaker" class="text-amber-700 text-xs flex-shrink-0">— {{ event.speaker }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right arrow -->
      <button
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 w-10 h-10 rounded-full border-2 border-slate-800 bg-white shadow-pop flex items-center justify-center hover:bg-amber-light transition-colors cursor-pointer"
        @click="scroll(1)"
      >
        <span class="text-slate-800 font-bold">→</span>
      </button>
    </div>

    <!-- Dot indicators -->
    <div class="flex justify-center gap-2 mt-6">
      <button
        v-for="(_, idx) in posterEvents"
        :key="idx"
        class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
        :class="activeIdx === idx ? 'bg-amber w-6' : 'bg-slate-300 hover:bg-slate-400'"
        @click="scrollTo(idx)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { posterEvents } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'

const baseUrl = import.meta.env.BASE_URL
const galleryRef = ref<HTMLElement | null>(null)
const cardRefs = ref<Map<number, HTMLElement>>(new Map())
const activeIdx = ref(0)
const isProgrammaticScroll = ref(false)

function setCardRef(idx: number, el: HTMLElement | null) {
  if (el) cardRefs.value.set(idx, el)
}

function getCardTransform(idx: number): string {
  const diff = idx - activeIdx.value
  if (diff === 0) return 'scale(1)'
  if (Math.abs(diff) === 1) return 'scale(0.85)'
  return 'scale(0.7)'
}

function getCardOpacity(idx: number): number {
  const diff = Math.abs(idx - activeIdx.value)
  if (diff === 0) return 1
  if (diff === 1) return 0.6
  return 0.3
}

function scrollTo(idx: number) {
  const card = cardRefs.value.get(idx)
  const container = galleryRef.value
  if (!card || !container) return

  const containerCenter = container.offsetWidth / 2
  const cardCenter = card.offsetLeft + card.offsetWidth / 2
  const scrollTarget = cardCenter - containerCenter

  isProgrammaticScroll.value = true
  container.scrollTo({ left: scrollTarget, behavior: 'smooth' })
  activeIdx.value = idx
  setTimeout(() => { isProgrammaticScroll.value = false }, 600)
}

function scroll(dir: number) {
  const newIdx = activeIdx.value + dir
  if (newIdx >= 0 && newIdx < posterEvents.length) {
    scrollTo(newIdx)
  }
}

function onScroll() {
  if (isProgrammaticScroll.value) return

  const container = galleryRef.value
  if (!container) return

  const containerCenter = container.scrollLeft + container.offsetWidth / 2

  let closestIdx = 0
  let closestDist = Infinity

  cardRefs.value.forEach((card, idx) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2
    const dist = Math.abs(cardCenter - containerCenter)
    if (dist < closestDist) {
      closestDist = dist
      closestIdx = idx
    }
  })

  if (closestIdx !== activeIdx.value) {
    activeIdx.value = closestIdx
  }
}

onMounted(() => {
  nextTick(() => {
    if (posterEvents.length > 0) {
      scrollTo(0)
    }
  })
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
