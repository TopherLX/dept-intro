<template>
  <section class="min-h-[85vh] flex items-center relative overflow-hidden dot-grid">
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

    <div class="flex flex-col lg:flex-row items-center gap-12 w-full relative z-10">
      <!-- Left: text -->
      <div class="flex-1 text-center lg:text-left">
        <span class="inline-block bg-amber-light text-amber-700 font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Clinical Data Science
        </span>
        <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-5">
          用数据科学<br />赋能临床研究
        </h1>
        <p class="text-slate-500 text-lg max-w-md leading-relaxed mb-8">
          以 AI 与自动化驱动数据洞察，构建从数据采集、治理到智能分析的完整技术生态。
        </p>
        <div class="flex gap-4 justify-center lg:justify-start flex-wrap">
          <a
            href="#members"
            class="candy-btn no-underline inline-flex items-center gap-2 bg-violet text-white font-bold text-sm px-6 py-3 rounded-full border-2 border-slate-800 shadow-pop"
          >
            了解团队
            <span class="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs">→</span>
          </a>
          <a
            href="#tech"
            class="secondary-btn no-underline inline-flex items-center gap-2 bg-white text-slate-800 font-bold text-sm px-6 py-3 rounded-full border-2 border-slate-200"
          >
            浏览架构
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

      <!-- Right: decorative blob -->
      <div class="flex-shrink-0">
        <div
          class="w-56 h-56 sm:w-72 sm:h-72 rounded-blob border-2 border-slate-800 shadow-pop flex items-center justify-center text-7xl"
          style="background: linear-gradient(135deg, #FCE7F3, #F472B6);"
        >
          🧬
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
