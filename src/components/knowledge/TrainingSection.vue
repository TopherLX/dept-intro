<template>
  <section id="training" class="py-24 scroll-mt-16">
    <SectionTitle title="培训体系" color="#10B981" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(training, idx) in trainings"
        :key="training.title"
        class="sticker-card group relative flex items-center gap-4 rounded-2xl border-2 border-slate-800 bg-white p-6 shadow-sticker"
        :class="[hoverShadows[idx % 3]]"
      >
        <!-- Instructor photo -->
        <img
          v-if="training.instructor"
          :src="`${baseUrl}members/${training.instructor}.png`"
          :alt="training.instructor"
          class="h-14 w-14 rounded-full object-cover flex-shrink-0" style="box-shadow: 4px 4px 0 #E2E8F0"
        />
        <div
          v-else
          class="h-14 w-14 rounded-full flex-shrink-0 flex items-center justify-center text-2xl"
          :class="[iconBgColors[idx % 3]]"
        >🎓</div>

        <div class="flex flex-col flex-1 min-w-0">
          <p class="text-xs font-semibold mb-1" :class="[accentColors[idx % 3]]">{{ training.date }} · {{ training.instructor || '科室' }}</p>
          <h3 class="font-heading font-extrabold text-base text-slate-800 m-0 mb-1">{{ training.title }}</h3>

          <div v-if="training.children && training.children.length > 0" class="mt-2">
            <n-collapse>
              <n-collapse-item :title="`${training.series || '课程详情'} (${training.children.length}期)`">
                <ul class="list-none p-0 m-0">
                  <li
                    v-for="child in training.children"
                    :key="child.title"
                    class="text-sm text-slate-500 py-1 border-b border-slate-100 last:border-b-0"
                  >
                    <span class="font-semibold" :class="[accentColors[idx % 3]]">{{ child.date }}</span>
                    <span v-if="child.instructor"> · {{ child.instructor }}</span>
                    — {{ child.title }}
                  </li>
                </ul>
              </n-collapse-item>
            </n-collapse>
          </div>
        </div>

        <!-- Corner decoration -->
        <div
          class="absolute top-0 right-0 h-8 w-8 rounded-bl-2xl border-slate-800 border-b-2 border-l-2"
          :class="[cornerColors[idx % 3]]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { trainings } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'

const baseUrl = import.meta.env.BASE_URL
const hoverShadows = ['hover:shadow-sticker-mint', 'hover:shadow-sticker-violet', 'hover:shadow-sticker-amber']
const accentColors = ['text-emerald-600', 'text-violet', 'text-amber-600']
const cornerColors = ['bg-mint', 'bg-violet', 'bg-amber']
const iconBgColors = ['bg-mint-light', 'bg-violet-light', 'bg-amber-light']
</script>
