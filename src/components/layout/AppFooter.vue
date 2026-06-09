<template>
  <footer class="bg-slate-800 text-slate-400 py-12">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <div class="font-heading text-lg font-bold text-white mb-2">CDS</div>
      <p class="text-sm mb-1">临床数据部 · 临床科学编程室</p>
      <p class="text-xs">数据即洞察，即行动</p>
      <div class="flex justify-center gap-3 mt-4">
        <span
          v-for="c in ['#8B5CF6', '#F472B6', '#FBBF24', '#34D399']"
          :key="c"
          class="w-2.5 h-2.5 rounded-full"
          :style="{ backgroundColor: c }"
        />
      </div>
    </div>
  </footer>
</template>
