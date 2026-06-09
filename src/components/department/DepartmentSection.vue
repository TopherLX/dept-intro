<template>
  <section id="department" class="py-24 scroll-mt-16">
    <!-- Section 1: 部门简介 -->
    <SectionTitle title="关于我们" color="#8B5CF6" />
    <IntroCard :summary="departmentIntro.summary" :highlights="departmentIntro.highlights" />

    <!-- Section 2: 核心职责 -->
    <SectionTitle title="核心职责" color="#FBBF24" class="mt-24" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ResponsibilityCard
        v-for="(item, idx) in responsibilities"
        :key="item.title"
        v-bind="item"
        :class="idx === 3 ? 'lg:col-start-2' : ''"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { departmentIntro, responsibilities } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import IntroCard from './IntroCard.vue'
import ResponsibilityCard from './ResponsibilityCard.vue'
</script>
