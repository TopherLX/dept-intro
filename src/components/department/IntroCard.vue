<template>
  <div class="sticker-card relative rounded-2xl border-2 border-slate-800 bg-white p-8 shadow-sticker overflow-hidden">
    <!-- Decorative blob -->
    <div class="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-10" style="background-color: #FBBF24;" />
    <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-8" style="background-color: #8B5CF6;" />

    <p class="relative z-10 text-slate-600 text-base leading-relaxed mb-6 max-w-3xl">
      {{ summary }}
    </p>

    <!-- Highlight capsules -->
    <div class="relative z-10 flex flex-wrap gap-3">
      <span
        v-for="(h, idx) in highlights"
        :key="h.label"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border-2 border-slate-200 bg-slate-50 text-slate-700"
      >
        <span
          class="w-2 h-2 rounded-full flex-shrink-0"
          :style="{ backgroundColor: capsuleColors[idx % capsuleColors.length] }"
        />
        {{ h.label }}
        <strong class="text-slate-800">{{ h.value }}</strong>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  summary: string
  highlights: { label: string; value: string }[]
}>()

const capsuleColors = ['#8B5CF6', '#F472B6', '#34D399', '#FBBF24', '#8B5CF6']
</script>
