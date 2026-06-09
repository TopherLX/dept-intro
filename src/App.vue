<template>
  <div class="min-h-screen bg-cream">
    <AppHeader />
    <main>
      <div class="max-w-6xl mx-auto px-6">
        <HeroSection />
        <section id="members" class="py-24">成员</section>
        <section id="tech" class="py-24">架构</section>
        <section id="workmode" class="py-24">模式</section>
        <section id="topics" class="py-24">课题</section>
        <section id="training" class="py-24">培训</section>
        <section id="events" class="py-24">会议</section>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/hero/HeroSection.vue'
</script>
