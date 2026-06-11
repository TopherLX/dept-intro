<template>
  <section id="core-skills" class="scroll-mt-16 pb-24">
    <SectionTitle title="核心能力" color="#8B5CF6" />
    <div class="grid gap-6 mt-10" :style="{ gridTemplateColumns: `repeat(${skills.length}, minmax(0, 1fr))` }">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="sticker-card group flex flex-col items-center rounded-2xl border-2 border-slate-800 bg-white p-6 shadow-sticker text-center"
      >
        <div class="ring-wrap relative w-[84px] h-[84px] mb-4">
          <svg width="84" height="84" viewBox="0 0 84 84">
            <circle cx="42" cy="42" r="36" stroke="#E2E8F0" stroke-width="6" fill="none" />
            <circle
              cx="42" cy="42" r="36"
              stroke-width="6"
              fill="none"
              stroke-linecap="round"
              :stroke="skill.color"
              :stroke-dasharray="226.2"
              :stroke-dashoffset="226.2 - (226.2 * skill.percentage / 100)"
              transform="rotate(-90 42 42)"
              class="transition-all duration-1000 ease-out"
            />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center font-heading text-lg font-extrabold text-slate-800">
            {{ skill.percentage }}%
          </div>
        </div>
        <h3 class="font-heading text-base font-extrabold text-slate-800 mb-1">{{ skill.name }}</h3>
        <p class="text-xs text-slate-400 mb-1.5">{{ skill.sub }}</p>
        <span class="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-[11px] font-medium text-slate-500">{{ skill.tags }}</span>
      </div>
    </div>

    <div class="mt-8 rounded-2xl border-2 border-slate-800 bg-white p-6 shadow-sticker">
      <ul class="space-y-2.5 text-sm text-slate-500 leading-relaxed">
        <li>
          <span class="font-extrabold text-slate-800">业务执行能力：</span>作为主要的业务执行团队，人均负责<span class="font-extrabold text-violet">4-5</span>个临床项目及其他研发课题。
        </li>
        <li>
          <span class="font-extrabold text-slate-800">质量保障：</span>项目经验充足、质控成效稳定。
        </li>
        <li>
          <span class="font-extrabold text-slate-800">持续发展：</span>科研赋能扎实、课题深耕精进。
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CoreSkill } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'

defineProps<{
  skills: CoreSkill[]
}>()
</script>
