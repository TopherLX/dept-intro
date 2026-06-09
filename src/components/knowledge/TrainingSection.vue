<template>
  <section id="training">
    <SectionTitle title="培训体系" color="#10B981" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="training in trainings"
        :key="training.title"
        class="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sticker-mint transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5"
      >
        <p class="text-emerald-600 text-xs font-semibold mb-2">{{ training.date }} · {{ training.instructor }}</p>
        <h3 class="font-heading font-extrabold text-base text-slate-800 m-0 mb-1">{{ training.title }}</h3>

        <div v-if="training.children && training.children.length > 0" class="mt-3">
          <n-collapse>
            <n-collapse-item :title="`${training.series || '课程详情'} (${training.children.length}期)`">
              <ul class="list-none p-0 m-0">
                <li
                  v-for="child in training.children"
                  :key="child.title"
                  class="text-sm text-slate-500 py-1 border-b border-slate-100 last:border-b-0"
                >
                  <span class="font-semibold text-emerald-600">{{ child.date }}</span>
                  <span v-if="child.instructor"> · {{ child.instructor }}</span>
                  — {{ child.title }}
                </li>
              </ul>
            </n-collapse-item>
          </n-collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { trainings } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'
</script>
