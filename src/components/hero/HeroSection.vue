<template>
  <section class="min-h-[85vh] flex items-center relative mb-48">
    <!-- Decorative confetti shapes -->
    <div class="absolute inset-0 select-none pointer-events-none overflow-hidden">
      <div
        v-for="shape in confetti"
        :key="shape.key"
        class="absolute"
        :style="{
          left: shape.x + '%',
          top: shape.y + '%',
          width: shape.size + 'px',
          height: shape.size + 'px',
          backgroundColor: shape.color,
          borderRadius: shape.round ? '50%' : '4px',
          opacity: 0.08,
          transform: `rotate(${shape.rotate}deg)`,
        }"
      />
    </div>

    <div class="flex flex-col lg:flex-row items-center lg:justify-between w-full relative z-10 pr-10 pb-10">
      <!-- Left: text -->
      <div class="text-center lg:text-left lg:min-w-[320px]">
        <span class="inline-block bg-amber-light text-amber-700 font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          {{ badge }}
        </span>
        <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-5" style="white-space: pre-line;">
          {{ title }}
        </h1>
        <p class="text-slate-500 text-lg max-w-md leading-relaxed mb-8">
          {{ subtitle }}
        </p>
        <div class="flex gap-4 justify-center lg:justify-start flex-wrap p-1">
          <a
            :href="primaryCta.href"
            class="candy-btn no-underline inline-flex items-center gap-2 bg-violet text-white font-bold text-sm px-6 py-3 rounded-full border-2 border-slate-800 shadow-pop"
            @click.prevent="handleCtaClick(primaryCta.href)"
          >
            {{ primaryCta.text }}
            <span class="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs">→</span>
          </a>
          <a
            v-if="secondaryCta"
            :href="secondaryCta.href"
            class="secondary-btn no-underline inline-flex items-center gap-2 bg-white text-slate-800 font-bold text-sm px-6 py-3 rounded-full border-2 border-slate-200"
            @click.prevent="handleCtaClick(secondaryCta.href)"
          >
            {{ secondaryCta.text }}
          </a>
        </div>
        <!-- Color dots row -->
        <div class="flex gap-2 mt-8 justify-center lg:justify-start">
          <span
            v-for="c in ['#8B5CF6', '#34D399', '#F472B6', '#FBBF24', '#8B5CF6', '#34D399', '#F472B6', '#8B5CF6']"
            :key="c"
            class="w-2.5 h-2.5 rounded-full"
            :style="{ backgroundColor: c }"
          />
        </div>
      </div>

      <!-- Right: hero card -->
      <div v-if="image" class="flex-shrink-0 w-72 h-72 sm:w-96 sm:h-96 relative">
        <div class="relative z-10 rounded-[3rem] rounded-tl-none border-4 border-slate-800 bg-white p-2 shadow-[12px_12px_0px_0px_#F472B6]">
          <img
            :src="image"
            alt="团队"
            class="aspect-square w-full rounded-[2.5rem] rounded-tl-none object-cover"
          />
        </div>
        <div class="-bottom-10 -right-10 -z-10 absolute h-full w-full rounded-[3rem] rounded-br-none bg-[#8B5CF6] opacity-20" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HeroData } from '@/data/types'

withDefaults(defineProps<HeroData>(), {
  badge: 'Clinical Data Science',
  title: '待建设',
  subtitle: '待建设',
  primaryCta: () => ({ text: '了解团队', href: '#team' }),
  secondaryCta: undefined,
  image: `${import.meta.env.BASE_URL}hero/card.svg`,
})

function handleCtaClick(href: string) {
  if (href.startsWith('#')) {
    const el = document.getElementById(href.slice(1))
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  } else {
    window.open(href, '_blank')
  }
}

const colors = ['#8B5CF6', '#F472B6', '#FBBF24', '#34D399']
const confetti = Array.from({ length: 15 }, (_, i) => ({
  key: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 20 + Math.random() * 60,
  color: colors[i % 4],
  round: Math.random() > 0.4,
  rotate: Math.random() * 360,
}))
</script>
