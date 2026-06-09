<template>
  <div
    class="bg-white border-2 border-slate-200 rounded-2xl p-5 w-72 flex-shrink-0 transition-all duration-300 hover:-translate-y-1"
    :style="{ boxShadow: `4px 4px 0 ${shadowColor}` }"
  >
    <img
      :src="member.photo"
      :alt="member.name"
      class="w-24 h-24 rounded-full border-3 border-slate-200 object-cover mx-auto mb-4"
    />
    <h3 class="font-heading text-lg font-extrabold text-center m-0">{{ member.name }}</h3>
    <p class="text-violet text-sm font-semibold text-center mt-1 mb-3">{{ member.title }}</p>
    <p class="text-slate-500 text-xs leading-relaxed line-clamp-5 mb-4">{{ member.bio }}</p>
    <div class="flex flex-wrap gap-1.5 justify-center">
      <span
        v-for="tag in member.tags"
        :key="tag"
        class="text-xs px-2.5 py-0.5 rounded-full font-medium bg-violet-light text-violet"
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
</script>
