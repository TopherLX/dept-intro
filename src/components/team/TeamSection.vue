<template>
  <section class="pb-24 scroll-mt-16">
    <!-- Section 1: 团队简介 -->
    <SectionTitle title="团队简介" color="#8B5CF6" />
    <IntroCard :summary="teamIntro.summary" :highlights="teamIntro.highlights" />

    <!-- Section 2: 核心职责 -->
    <SectionTitle title="核心职责" color="#FBBF24" class="mt-24" />
    <!-- 上排 3 张 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ResponsibilityCard
        v-for="item in responsibilities.slice(0, 3)"
        :key="item.title"
        v-bind="item"
      />
    </div>
    <!-- 下排 2 张居中 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:max-w-2xl lg:mx-auto">
      <ResponsibilityCard
        v-for="item in responsibilities.slice(3, 5)"
        :key="item.title"
        v-bind="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { teamIntro, responsibilities } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import IntroCard from './IntroCard.vue'
import ResponsibilityCard from './ResponsibilityCard.vue'
</script>
