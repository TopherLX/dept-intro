<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-slate-200">
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Left: page-aware label -->
      <span class="font-heading text-xl font-extrabold text-violet">
        {{ teamNames[routePath] ?? '临床数据部' }}
      </span>

      <!-- HubPage: 科室导航 dropdown -->
      <div v-if="routePath === '/'" class="relative">
        <button
          class="candy-btn inline-flex items-center gap-1.5 no-underline px-3 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all duration-200 cursor-pointer"
          @click.stop="toggleDropdown"
        >
          科室导航
          <svg
            class="w-3.5 h-3.5 transition-transform duration-200"
            :class="dropdownOpen ? 'rotate-180' : ''"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <Transition name="dropdown">
          <div
            v-if="dropdownOpen"
            class="absolute right-0 sm:left-0 top-full mt-2 w-56 bg-white rounded-xl border-2 border-slate-200 shadow-pop py-2 overflow-hidden z-50"
          >
            <router-link
              v-for="item in teamDropdownItems"
              :key="item.to"
              :to="item.to"
              class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-violet-light hover:text-violet transition-colors duration-150 no-underline"
              @click="dropdownOpen = false"
            >
              {{ item.label }}
            </router-link>
          </div>
        </Transition>
      </div>

      <!-- Team pages: section navigation -->
      <ul v-else class="flex gap-1 list-none m-0 p-0 overflow-x-auto">
        <li v-for="item in discoveredSections" :key="item.id" class="flex-shrink-0">
          <a
            :href="`#${item.id}`"
            class="no-underline px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
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
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// ── Team name mapping ──────────────────────────────────────────
const teamNames: Record<string, string> = {
  '/':             '临床数据部',
  '/ds-team':      '临床科学编程室',
  '/cdm-team1':    '临床数据管理一室',
  '/cdm-team2':    '临床数据管理二室',
  '/cm-team':      '中心化监查室',
  '/safety-team':  '药物安全组',
}

const routePath = ref(route.path)

// ── Dropdown state ─────────────────────────────────────────────
const dropdownOpen = ref(false)
const teamDropdownItems = [
  { label: '临床科学编程室',    to: '/ds-team' },
  { label: '临床数据管理一室',  to: '/cdm-team1' },
  { label: '临床数据管理二室',  to: '/cdm-team2' },
  { label: '中心化监查室',      to: '/cm-team' },
  { label: '药物安全组',        to: '/safety-team' },
]

function toggleDropdown(e: MouseEvent) {
  e.stopPropagation()
  dropdownOpen.value = !dropdownOpen.value
}

function onClickOutside() {
  dropdownOpen.value = false
}

// Register/remove click-outside only when dropdown is open
watch(dropdownOpen, (open) => {
  if (open) {
    document.addEventListener('click', onClickOutside)
  } else {
    document.removeEventListener('click', onClickOutside)
  }
})

// ── Section auto-discovery ─────────────────────────────────────
const sectionLabels: Record<string, string> = {
  team:     '团队简介',
  members:  '成员',
  showcase: '成果',
  events:   '会议',
  tech:     '架构',
  workmode: '模式',
  topics:   '课题',
  training: '培训',
}

const discoveredSections = ref<{ id: string; label: string }[]>([])
const activeSection = ref('')

function discoverSections() {
  const sectionEls = document.querySelectorAll<HTMLElement>('section[id]')
  const ids = Array.from(sectionEls)
    .map(el => el.id)
    .filter(id => id !== 'hero' && sectionLabels[id])
  discoveredSections.value = ids.map(id => ({ id, label: sectionLabels[id] }))
}

function onScroll() {
  const sections = discoveredSections.value
  if (sections.length === 0) {
    activeSection.value = ''
    return
  }
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i].id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= 120) {
      activeSection.value = sections[i].id
      return
    }
  }
  activeSection.value = ''
}

// ── Lifecycle ──────────────────────────────────────────────────
onMounted(() => {
  // Macrotask to wait for async route components to render
  setTimeout(() => {
    discoverSections()
    window.addEventListener('scroll', onScroll, { passive: true })
  }, 0)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
})

// ── Route change → re-discover ─────────────────────────────────
watch(() => route.path, (path) => {
  routePath.value = path
  activeSection.value = ''
  dropdownOpen.value = false
  nextTick(() => discoverSections())
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease-out;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
