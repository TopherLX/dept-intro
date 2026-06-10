<template>
  <div
    class="sticker-card rounded-2xl border-2 p-8 text-center transition-all duration-300"
    :class="ready
      ? 'border-slate-800 shadow-sticker hover:shadow-sticker-violet cursor-pointer'
      : 'border-dashed border-slate-200 cursor-pointer hover:border-slate-400'"
    :style="{ backgroundColor: ready ? bgColor : '#FAFAFA' }"
  >
    <div class="font-heading font-extrabold text-xl mb-1" :class="ready ? 'text-slate-800' : 'text-slate-400'">
      {{ name }}
    </div>
    <div class="text-sm" :class="ready ? 'text-slate-500' : 'text-slate-400'">{{ subtitle }}</div>
    <div v-if="ready && stats" class="text-xs text-slate-500 mt-2">{{ stats }}</div>
    <div v-if="!ready" class="text-xs text-slate-400 mt-2">🏗️ 建设中</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  subtitle: string
  stats: string
  color: string
  bgColor: string
  ready: boolean
}>()
</script>
