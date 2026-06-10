<template>
  <div class="min-h-[85vh] flex flex-col items-center justify-center py-20 px-6">
    <span class="inline-block bg-violet-light text-violet font-bold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
      临床数据科学部
    </span>
    <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-4 text-center">
      用数据科学<br />赋能临床试验
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
    id: 'ds-team', to: '/ds-team', name: 'DS Team', subtitle: '科学编程室',
    stats: '7 人 · 220+ 项目', color: '#8B5CF6', bgColor: '#EDE9FE', ready: true,
  },
  {
    id: 'cdm-team1', to: '/cdm-team1', name: 'CDM Team 1', subtitle: '临床数据管理一队',
    stats: '', color: '#F472B6', bgColor: '#FCE7F3', ready: false,
  },
  {
    id: 'cdm-team2', to: '/cdm-team2', name: 'CDM Team 2', subtitle: '临床数据管理二队',
    stats: '', color: '#34D399', bgColor: '#D1FAE5', ready: false,
  },
]

const bottomRow = [
  {
    id: 'cm-team', to: '/cm-team', name: 'CM Team', subtitle: '临床监查团队',
    stats: '', color: '#FBBF24', bgColor: '#FEF3C7', ready: false,
  },
  {
    id: 'safety-team', to: '/safety-team', name: 'Safety Team', subtitle: '药物安全团队',
    stats: '', color: '#60A5FA', bgColor: '#EFF6FF', ready: false,
  },
]
</script>
