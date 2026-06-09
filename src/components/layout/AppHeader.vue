<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-slate-200">
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2 no-underline">
        <span class="font-heading text-xl font-extrabold text-violet">CDS</span>
        <span class="hidden sm:inline text-sm text-slate-500 font-medium">临床数据部 → 临床科学编程室</span>
      </a>

      <ul class="flex gap-1 list-none m-0 p-0">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="no-underline px-3 py-2 rounded-full text-sm font-medium transition-all duration-200"
            :class="activeSection === item.id
              ? 'bg-violet-light text-violet'
              : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'members', label: '成员' },
  { id: 'tech', label: '架构' },
  { id: 'workmode', label: '模式' },
  { id: 'topics', label: '课题' },
  { id: 'training', label: '培训' },
  { id: 'events', label: '会议' },
]

const activeSection = ref('')

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting)
      if (visible.length > 0) {
        activeSection.value = visible[0].target.id
      }
    },
    { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
  )
  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
