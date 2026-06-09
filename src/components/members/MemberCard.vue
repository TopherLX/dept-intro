<template>
  <div
    class="sticker-card group bg-white border-2 border-slate-800 rounded-2xl p-6 w-80 flex-shrink-0"
    :style="{ boxShadow: `6px 6px 0 ${shadowColor}` }"
  >
    <img
      :src="`${baseUrl}${member.photo}`"
      :alt="member.name"
      class="w-28 h-28 rounded-full object-cover mx-auto mb-4" style="box-shadow: 4px 4px 0 #E2E8F0"
    />
    <h3 class="font-heading text-lg font-extrabold text-center m-0">{{ member.name }}</h3>
    <p class="text-violet text-sm font-semibold text-center mt-1 mb-3">{{ member.title }}</p>
    <p class="text-slate-500 text-xs leading-relaxed line-clamp-5 group-hover:line-clamp-none mb-4 transition-all duration-300">{{ member.bio }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Member } from '@/data/content'

const baseUrl = import.meta.env.BASE_URL

defineProps<{
  member: Member
  shadowColor: string
}>()
</script>
