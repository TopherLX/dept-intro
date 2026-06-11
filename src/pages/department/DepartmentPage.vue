<!-- src/pages/department/DepartmentPage.vue -->
<template>
  <div class="max-w-6xl mx-auto px-6">
    <HeroSection v-bind="hero" />
    <MembersSection :members="members" />
    <WorkModeSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/hero/HeroSection.vue'
import MembersSection from '@/components/members/MembersSection.vue'
import WorkModeSection from '@/components/workmode/WorkModeSection.vue'
import { hero, members } from '@/data/department'
</script>
