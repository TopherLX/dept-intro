<template>
  <div class="sticker-card group relative rounded-2xl border-2 border-slate-800 bg-white p-6 shadow-sticker">
    <!-- Icon circle -->
    <div
      class="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4"
      :style="{ backgroundColor: color }"
    >
      {{ icon }}
    </div>

    <h3 class="font-heading text-base font-extrabold text-slate-800 mb-2">{{ title }}</h3>
    <p class="text-sm text-slate-500 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  color: string
}>()
</script>
