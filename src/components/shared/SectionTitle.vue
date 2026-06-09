<template>
  <div class="flex items-center gap-3 mb-10">
    <div
      class="w-3 h-3 rounded-full flex-shrink-0"
      :style="{ backgroundColor: color }"
    />
    <h2 class="font-heading text-2xl font-extrabold text-slate-800 m-0">
      {{ title }}
    </h2>
    <div
      class="h-0.5 flex-1 rounded-full"
      :style="{ backgroundColor: color }"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  color: string
}>()
</script>
