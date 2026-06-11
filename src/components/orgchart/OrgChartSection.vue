<template>
  <section class="py-24">
    <SectionTitle title="组织架构" color="#8B5CF6" />
    <div class="mt-12 flex flex-col items-center">
      <OrgTreeNode :node="data" :level="1" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { OrgNode } from '@/data/types'
import SectionTitle from '@/components/shared/SectionTitle.vue'
import OrgTreeNode from './OrgTreeNode.vue'

defineProps<{
  data: OrgNode
}>()
</script>
