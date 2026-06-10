<template>
  <section id="showcase" class="pb-24 scroll-mt-16">
    <SectionTitle title="成果展示" color="#34D399" />
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
      <ShowcaseCard
        v-for="(item, idx) in showcases"
        :key="item.title"
        :item="item"
        :glow-idx="idx"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { showcases } from '@/data/content'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import ShowcaseCard from './ShowcaseCard.vue'
</script>
