<template>
  <div class="flex flex-col items-center">
    <!-- Card -->
    <div
      class="bg-white border-2 border-[#1E293B] rounded-[14px] px-3.5 py-2 flex items-center gap-2.5 w-[140px] transition-all duration-200 hover:scale-105"
      :style="{ boxShadow: `4px 4px 0 ${shadowColor}` }"
    >
      <!-- Avatar -->
      <div
        class="w-9 h-9 rounded-full border-2 shrink-0 flex items-center justify-center"
        :class="[avatarBg, avatarBorder]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :stroke="iconColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 22c0-4 4-7 8-7s8 3 8 7" />
        </svg>
      </div>
      <div class="text-left min-w-0">
        <div class="font-heading font-bold text-[13px] text-[#1E293B] leading-tight truncate">{{ node.name }}</div>
        <div class="text-[10px] text-[#64748B] leading-tight truncate">{{ node.title }}</div>
      </div>
    </div>

    <!-- Children -->
    <template v-if="node.children && node.children.length">
      <!-- Vertical drop line -->
      <div class="w-0.5 h-5 bg-[#CBD5E1]"></div>
      <!-- Horizontal bar spanning children -->
      <div class="h-0.5 bg-[#CBD5E1] rounded-sm" :style="{ width: `${node.children.length * 148 - 8}px` }"></div>
      <!-- Drop lines to each child column -->
      <div class="flex" :style="{ width: `${node.children.length * 148 - 8}px` }">
        <div v-for="(_, i) in node.children" :key="i" class="flex flex-col items-center" style="flex: 1;">
          <div class="w-0.5 h-3.5 bg-[#CBD5E1]"></div>
        </div>
      </div>
      <!-- Children row -->
      <div class="flex gap-2">
        <div v-for="(child, i) in node.children" :key="i" class="flex flex-col items-center">
          <OrgTreeNode :node="child" :level="level + 1" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { OrgNode } from '@/data/types'
import { computed } from 'vue'

const props = defineProps<{
  node: OrgNode
  level: number
}>()

const levelConfig: Record<number, { shadow: string; avatarBg: string; avatarBorder: string; icon: string }> = {
  1: { shadow: '#8B5CF6', avatarBg: 'bg-gradient-to-br from-[#EDE9FE] to-[#C4B5FD]', avatarBorder: 'border-[#A78BFA]', icon: '#7C3AED' },
  2: { shadow: '#F472B6', avatarBg: 'bg-gradient-to-br from-[#FCE7F3] to-[#F9A8D4]', avatarBorder: 'border-[#F472B6]', icon: '#DB2777' },
  3: { shadow: '#FBBF24', avatarBg: 'bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A]', avatarBorder: 'border-[#FBBF24]', icon: '#D97706' },
}

const cfg = computed(() => levelConfig[props.level] ?? levelConfig[3])
const shadowColor = computed(() => cfg.value.shadow)
const avatarBg = computed(() => cfg.value.avatarBg)
const avatarBorder = computed(() => cfg.value.avatarBorder)
const iconColor = computed(() => cfg.value.icon)
</script>
