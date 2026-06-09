<template>
  <div
    class="bg-white border-2 border-slate-800 rounded-2xl p-6 mx-2 transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5"
    :style="{ boxShadow: `4px 4px 0 ${shadowColor}` }"
  >
    <div
      class="w-16 h-16 rounded-full border-2 border-slate-800 mx-auto mb-4"
      :style="{ background: member.gradient }"
    />
    <h3 class="font-heading text-lg font-extrabold text-center m-0">{{ member.name }}</h3>
    <p class="text-violet text-sm font-semibold text-center mt-1 mb-3">{{ member.title }}</p>
    <p class="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">{{ member.bio }}</p>
    <div class="flex flex-wrap gap-1.5 justify-center">
      <span
        v-for="tag in member.tags"
        :key="tag"
        class="text-xs px-2.5 py-0.5 rounded-full font-medium"
        :class="tagClasses[Math.floor(Math.random() * tagClasses.length)]"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Member } from '@/data/content'

defineProps<{
  member: Member
  shadowColor: string
}>()

const tagClasses = [
  'bg-violet-light text-violet',
  'bg-pink-light text-pink',
  'bg-amber-light text-amber-700',
  'bg-mint-light text-emerald-700',
  'bg-blue-50 text-blue-600',
]
</script>
