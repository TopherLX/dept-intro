<template>
  <div class="min-h-[85vh] flex flex-col items-center justify-center py-20 px-6 relative">
    <span class="inline-block bg-amber-light text-amber-700 font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
      Clinical Data Department
    </span>
    <h1 class="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-violet leading-tight mb-5 text-center">
      临床数据部
    </h1>
    <p class="text-slate-500 text-lg mb-16 text-center max-w-lg">
      5 个专业团队，覆盖数据全链路
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
      <router-link v-for="team in topRow" :key="team.id" :to="team.to" class="no-underline">
        <TeamEntryCard v-bind="team" />
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl w-full">
      <router-link v-for="team in bottomRow" :key="team.id" :to="team.to" class="no-underline">
        <TeamEntryCard v-bind="team" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import TeamEntryCard from './TeamEntryCard.vue'

const topRow = [
  {
    id: 'ds-team', to: '/ds-team', name: '临床科学编程室', subtitle: '',
    stats: '', color: '#8B5CF6', bgColor: '#EDE9FE', ready: true,
  },
  {
    id: 'cdm-team1', to: '/cdm-team1', name: '临床数据管理一室', subtitle: '',
    stats: '', color: '#F472B6', bgColor: '#FCE7F3', ready: true,
  },
  {
    id: 'cdm-team2', to: '/cdm-team2', name: '临床数据管理二室', subtitle: '',
    stats: '', color: '#34D399', bgColor: '#D1FAE5', ready: true,
  },
]

const bottomRow = [
  {
    id: 'cm-team', to: '/cm-team', name: '中心化监查室', subtitle: '',
    stats: '', color: '#FBBF24', bgColor: '#FEF3C7', ready: true,
  },
  {
    id: 'safety-team', to: '/safety-team', name: '药物安全组', subtitle: '',
    stats: '', color: '#60A5FA', bgColor: '#EFF6FF', ready: true,
  },
]
</script>
