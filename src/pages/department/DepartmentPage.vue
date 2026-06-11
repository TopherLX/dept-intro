<!-- src/pages/department/DepartmentPage.vue -->
<template>
  <div>
    <HeroSection
      badge="Clinical Data Department"
      title="部门概览"
      subtitle="临床科学编程室 · 团队总览"
    />
    <MembersSection :members="[]" />
    <WorkModeSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/hero/HeroSection.vue'
import MembersSection from '@/components/members/MembersSection.vue'
import WorkModeSection from '@/components/workmode/WorkModeSection.vue'
</script>
