<template>
  <section id="workmode" class="pb-24 scroll-mt-16">
    <SectionTitle title="工作模式变革" color="#D97706" />

    <p class="text-slate-500 text-center text-lg mb-12 max-w-2xl mx-auto">
      数据管理专家（CDM）向数据科学专家（CDS）转型 — 重塑传统模式
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <!-- CDM Card -->
      <div class="sticker-card bg-white border-2 border-slate-800 rounded-2xl p-6 shadow-sticker-pink relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-pink-light rounded-bl-2xl -translate-y-8 translate-x-8 opacity-30" />
        <div class="relative z-10">
          <span class="inline-block bg-pink-light text-pink font-bold text-xs px-3 py-1 rounded-full mb-4">
            CDM · 当前痛点
          </span>
          <h3 class="font-heading text-xl font-extrabold text-slate-800 mb-4">数据管理者</h3>
          <ul class="space-y-3 text-sm text-slate-600 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-pink mt-0.5 flex-shrink-0">·</span>
              从不同系统人工导出数据，配置"自动任务"始终是费时费力的冗余环节
            </li>
            <li class="flex items-start gap-2">
              <span class="text-pink mt-0.5 flex-shrink-0">·</span>
              系统间字段名、标签、值表述各异（同义不同形），数据一致性核查复杂度高
            </li>
            <li class="flex items-start gap-2">
              <span class="text-pink mt-0.5 flex-shrink-0">·</span>
              导出文件格式与数据结构不统一，版本差异增加处理与转换的不稳定性
            </li>
            <li class="flex items-start gap-2">
              <span class="text-pink mt-0.5 flex-shrink-0">·</span>
              数据孤岛与差异交织，CDM 被困于重复性导出、清洗与转换事务中
            </li>
          </ul>
        </div>
      </div>

      <!-- CDS Card -->
      <div class="sticker-card bg-white border-2 border-slate-800 rounded-2xl p-6 shadow-sticker-violet relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-violet-light rounded-bl-2xl -translate-y-8 translate-x-8 opacity-30" />
        <div class="relative z-10">
          <span class="inline-block bg-violet-light text-violet font-bold text-xs px-3 py-1 rounded-full mb-4">
            CDS · 未来愿景
          </span>
          <h3 class="font-heading text-xl font-extrabold text-slate-800 mb-4">数据科学专家</h3>
          <ul class="space-y-3 text-sm text-slate-600 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-violet mt-0.5 flex-shrink-0">·</span>
              从繁琐的传统任务中抽离，聚焦项目进展与质量分析、整体风险洞察
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet mt-0.5 flex-shrink-0">·</span>
              依托生产级开发平台（VS Code、Posit），灵活访问数仓与数据库
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet mt-0.5 flex-shrink-0">·</span>
              充分发挥 AI 能力，将抽象想法落实为具体原型工具，最大化挖掘数据价值
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet mt-0.5 flex-shrink-0">·</span>
              搭建现代化数据传输平台，敢于提出前瞻性预防与促进策略
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Transition indicator -->
    <div class="flex justify-center items-center gap-4 mt-12">
      <div class="flex gap-1">
        <span class="w-2 h-2 rounded-full bg-pink animate-bounce" style="animation-delay: 0s" />
        <span class="w-2 h-2 rounded-full bg-violet animate-bounce" style="animation-delay: 0.15s" />
        <span class="w-2 h-2 rounded-full bg-amber animate-bounce" style="animation-delay: 0.3s" />
      </div>
    </div>

    <!-- Workflow diagram -->
    <div class="relative group mt-12">
      <div
        class="bg-white border-2 border-slate-800 rounded-2xl shadow-sticker p-4 sm:p-6 overflow-x-auto cursor-pointer"
        v-html="workflowSvg"
        @click="showModal = true"
      />
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl bg-slate-800/5">
        <span class="bg-slate-800/80 text-white text-xs px-3 py-1.5 rounded-full">点击放大</span>
      </div>
    </div>

    <n-modal v-model:show="showModal" preset="card" title="CDS 工作模式 · 滚轮缩放" style="width:98vw;max-width:1600px" :mask-closable="true">
      <div
        class="overflow-auto"
        style="max-height:85vh;cursor:zoom-in"
        @wheel.prevent="onWheel"
      >
        <div :style="{ transform: `scale(${scale})`, transformOrigin: 'top left', transition: 'transform 0.1s' }" v-html="workflowSvg" />
      </div>
    </n-modal>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionTitle from '@/components/shared/SectionTitle.vue'

const showModal = ref(false)
const scale = ref(1)

function onWheel(e: WheelEvent) {
  const delta = e.deltaY > 0 ? -0.1 : 0.1
  scale.value = Math.max(0.3, Math.min(3, scale.value + delta))
}

const workflowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" style="width:100%;min-width:750px;height:auto;background-color:#F8FAFC;font-family:'Plus Jakarta Sans',system-ui,sans-serif">
  <defs>
    <filter id="card-shadow" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.04" />
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#0F172A" flood-opacity="0.02" />
    </filter>
    <filter id="container-shadow" x="-2%" y="-2%" width="104%" height="105%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#0F172A" flood-opacity="0.03" />
    </filter>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" /><stop offset="100%" stop-color="#F8FAFC" />
    </linearGradient>
    <linearGradient id="btn-ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="100%" stop-color="#FEF3C7" />
    </linearGradient>
    <linearGradient id="btn-collab-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EFF6FF" /><stop offset="100%" stop-color="#DBEAFE" />
    </linearGradient>
  </defs>

  <text x="600" y="50" text-anchor="middle" font-size="28" font-weight="600" fill="#1E293B" letter-spacing="1.5">CDS工作模式</text>

  <rect x="30" y="90" width="1140" height="570" rx="16" fill="url(#bg-grad)" stroke="#E2E8F0" stroke-width="1.5" filter="url(#container-shadow)" />

  <!-- Left: 数据传输 -->
  <rect x="55" y="145" width="295" height="175" rx="12" fill="none" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4 4" />
  <text x="70" y="138" font-size="12" font-weight="500" fill="#94A3B8">数据传输</text>

  <g transform="translate(130, 160)">
    <rect x="0" y="0" width="151" height="32" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
    <g transform="translate(5, 7) scale(0.75)">
      <circle cx="12" cy="12" r="10" fill="none" stroke="#10B981" stroke-width="2" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" />
      <path d="M2 12h20" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" />
    </g>
    <text x="32" y="20" font-size="12" font-weight="500" fill="#475569">外部系统 / 本地终端</text>
  </g>

  <g transform="translate(193, 200)">
    <path d="M4,12 L4,2 M4,2 L1,5 M4,2 L7,5" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10,2 L10,12 M10,12 L7,9 M10,12 L13,9" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <g transform="translate(70, 222)" filter="url(#card-shadow)">
    <rect x="0" y="0" width="265" height="85" rx="10" fill="#FFFFFF" stroke="#F1F5F9" stroke-width="1" />
    <circle cx="35" cy="42" r="18" fill="#F8FAFC" />
    <path d="M28 35 H38 V43 H41 L35 49 L29 43 H32 Z" fill="#64748B" />
    <path d="M26 47 V51 H44 V47" fill="none" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
    <text x="70" y="40" font-size="16" font-weight="600" fill="#1E293B">SFTP</text>
    <text x="70" y="58" font-size="11" fill="#94A3B8">安全文件传输协议</text>
  </g>

  <g transform="translate(197, 315)">
    <path d="M0,0 L0,14 M0,14 L-3,11 M0,14 L3,11" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <g transform="translate(70, 335)" filter="url(#card-shadow)">
    <rect x="0" y="0" width="265" height="85" rx="10" fill="#FFFFFF" stroke="#F1F5F9" stroke-width="1" />
    <circle cx="35" cy="42" r="18" fill="#F8FAFC" />
    <ellipse cx="35" cy="34" rx="9" ry="3.5" fill="none" stroke="#475569" stroke-width="1.5" />
    <path d="M26 34 V41 C26 43, 44 43, 44 41 V34" fill="none" stroke="#475569" stroke-width="1.5" />
    <path d="M26 41 V48 C26 50, 44 50, 44 48 V41" fill="none" stroke="#475569" stroke-width="1.5" />
    <text x="70" y="40" font-size="16" font-weight="600" fill="#1E293B">ClickHouse 数仓</text>
    <text x="70" y="58" font-size="11" fill="#94A3B8">列式高性能分析</text>
  </g>

  <g transform="translate(197, 428)">
    <path d="M0,0 L0,14 M0,14 L-3,11 M0,14 L3,11" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <g transform="translate(70, 448)" filter="url(#card-shadow)">
    <rect x="0" y="0" width="265" height="85" rx="10" fill="#FFFFFF" stroke="#F1F5F9" stroke-width="1" />
    <circle cx="35" cy="42" r="18" fill="#F8FAFC" />
    <ellipse cx="35" cy="34" rx="9" ry="3.5" fill="none" stroke="#475569" stroke-width="1.5" />
    <path d="M26 34 V41 C26 43, 44 43, 44 41 V34" fill="none" stroke="#475569" stroke-width="1.5" />
    <path d="M26 41 V48 C26 50, 44 50, 44 48 V41" fill="none" stroke="#475569" stroke-width="1.5" />
    <text x="70" y="41" font-size="16" font-weight="600" fill="#1E293B">PostgreSQL</text>
    <text x="70" y="58" font-size="11" fill="#94A3B8">关系型业务数据库</text>
  </g>

  <!-- Center: Web IDE -->
  <g transform="translate(390, 160)">
    <g transform="translate(100, 0)">
      <rect x="0" y="0" width="105" height="32" rx="16" fill="url(#btn-ai-grad)" stroke="#FDE68A" stroke-width="1" />
      <path d="M17 11 L19 15 L23 17 L19 19 L17 23 L15 19 L11 17 L15 15 Z" fill="#D97706" />
      <path d="M23 10 L24 12 L26 13 L24 14 L23 16 L22 14 L20 13 L22 12 Z" fill="#F59E0B" transform="scale(0.8) translate(5, 2)" />
      <text x="32" y="20" font-size="12" font-weight="600" fill="#B45309">AI 辅助能力</text>
    </g>
    <g transform="translate(215, 0)">
      <rect x="0" y="0" width="112" height="32" rx="16" fill="url(#btn-collab-grad)" stroke="#BFDBFE" stroke-width="1" />
      <path d="M15 22 C15 19, 18 18, 20 18 C22 18, 25 19, 25 22" fill="none" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="20" cy="14" r="3" fill="none" stroke="#2563EB" stroke-width="1.5" />
      <path d="M10 22 C10 20, 12 19, 14 19" fill="none" stroke="#2563EB" stroke-width="1.2" stroke-linecap="round" />
      <circle cx="13" cy="15" r="2.2" fill="none" stroke="#2563EB" stroke-width="1.2" />
      <text x="32" y="20" font-size="12" font-weight="600" fill="#1D4ED8">线上协同办公</text>
    </g>
    <path d="M210,40 L210,48 M210,48 L207,45 M210,48 L213,45" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <g transform="translate(390, 222)" filter="url(#card-shadow)">
    <rect x="0" y="0" width="420" height="311" rx="12" fill="#FFFFFF" stroke="#F1F5F9" stroke-width="1.5" />
    <g transform="translate(25, 25)">
      <path d="M6 5 L1 10 L6 15 M14 5 L19 10 L14 15 M11 4 L8 16" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <text x="32" y="15" font-size="18" font-weight="700" fill="#1E293B">Web IDE 工作区</text>
    </g>
    <g transform="translate(25, 75)">
      <line x1="0" y1="0" x2="0" y2="16" stroke="#10B981" stroke-width="3" stroke-linecap="round" />
      <text x="10" y="13" font-size="13" font-weight="600" fill="#94A3B8">分析语言支持</text>
      <g transform="translate(0, 30)">
        <rect x="0" y="0" width="60" height="35" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="30" y="22" font-size="13" font-weight="600" fill="#334155" text-anchor="middle">SAS</text>
      </g>
      <g transform="translate(72, 30)">
        <rect x="0" y="0" width="85" height="35" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="42.5" y="22" font-size="13" font-weight="600" fill="#334155" text-anchor="middle">Python</text>
      </g>
      <g transform="translate(169, 30)">
        <rect x="0" y="0" width="50" height="35" rx="6" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="25" y="22" font-size="13" font-weight="600" fill="#334155" text-anchor="middle">R</text>
      </g>
    </g>
    <g transform="translate(25, 185)">
      <line x1="0" y1="0" x2="0" y2="16" stroke="#10B981" stroke-width="3" stroke-linecap="round" />
      <text x="10" y="13" font-size="13" font-weight="600" fill="#94A3B8">版本控制体系</text>
      <g transform="translate(0, 30)" filter="url(#card-shadow)">
        <rect x="0" y="0" width="220" height="52" rx="8" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1" />
        <g transform="translate(20, 15)">
          <circle cx="6" cy="6" r="3" fill="none" stroke="#10B981" stroke-width="2" />
          <circle cx="16" cy="18" r="3" fill="none" stroke="#10B981" stroke-width="2" />
          <circle cx="6" cy="18" r="3" fill="none" stroke="#10B981" stroke-width="2" />
          <path d="M6 9 L6 15 M6 9 C 6 12, 16 12, 16 15" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" />
        </g>
        <text x="50" y="31" font-size="14" font-weight="600" fill="#0F172A">Git 协同与版本管理</text>
      </g>
    </g>
  </g>

  <!-- Right: 应用与数据消费端 -->
  <g transform="translate(860, 222)" filter="url(#card-shadow)">
    <rect x="0" y="0" width="280" height="85" rx="10" fill="#FFFFFF" stroke="#F1F5F9" stroke-width="1" />
    <circle cx="38" cy="42" r="18" fill="#F8FAFC" />
    <path d="M28 49 V41 H31 V49 Z M34 49 V35 H37 V49 Z M40 49 V44 H43 V49 Z" fill="#64748B" />
    <path d="M25 51 H46" stroke="#64748B" stroke-width="1.5" />
    <text x="75" y="40" font-size="15" font-weight="700" fill="#1E293B">数据洞察分析工具开发</text>
    <text x="75" y="58" font-size="11" fill="#94A3B8">敏捷数据产品构建</text>
  </g>

  <g transform="translate(860, 335)" filter="url(#card-shadow)">
    <rect x="0" y="0" width="280" height="85" rx="10" fill="#FFFFFF" stroke="#F1F5F9" stroke-width="1" />
    <circle cx="38" cy="42" r="18" fill="#F8FAFC" />
    <circle cx="38" cy="42" r="9" fill="none" stroke="#475569" stroke-width="1.8" />
    <path d="M38 42 L42 38" stroke="#475569" stroke-width="1.8" stroke-linecap="round" />
    <path d="M34 37 A 6 6 0 0 1 42 37" fill="none" stroke="#475569" stroke-width="1" />
    <text x="75" y="40" font-size="15" font-weight="700" fill="#1E293B">Superset 可视化分析</text>
    <text x="75" y="58" font-size="11" fill="#94A3B8">交互式 BI 仪表盘</text>
  </g>

  <g transform="translate(860, 448)" filter="url(#card-shadow)">
    <rect x="0" y="0" width="280" height="85" rx="10" fill="#FFFFFF" stroke="#F1F5F9" stroke-width="1" />
    <circle cx="38" cy="42" r="18" fill="#F8FAFC" />
    <path d="M26 42 H31 L34 34 L37 48 L40 40 L43 44 H48" fill="none" stroke="#64748B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    <text x="75" y="40" font-size="15" font-weight="700" fill="#1E293B">生物统计早期决策平台</text>
    <text x="75" y="58" font-size="11" fill="#94A3B8">临床及医药研发支持</text>
  </g>

  <!-- Flow connectors -->
  <g transform="translate(352, 362)">
    <circle cx="15" cy="15" r="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" filter="url(#card-shadow)" />
    <path d="M12,11 L7,11 M7,11 L10,8 M7,11 L10,14" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18,19 L23,19 M23,19 L20,16 M23,19 L20,22" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <g transform="translate(826, 362)">
    <circle cx="15" cy="15" r="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" filter="url(#card-shadow)" />
    <path d="M10,15 L20,15 M20,15 L16,11 M20,15 L16,19" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- Bottom: 本地环境 -->
  <g transform="translate(585, 545)">
    <path d="M6,18 L6,2 M6,2 L2,6 M6,2 L10,6" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16,2 L16,18 M16,18 L12,14 M16,18 L20,14" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <g transform="translate(535, 580)">
    <rect x="0" y="0" width="130" height="36" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" filter="url(#card-shadow)" />
    <rect x="23" y="11" width="14" height="10" rx="1.5" fill="none" stroke="#475569" stroke-width="1.5" />
    <path d="M27 21 L25 25 H35 L33 21" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <text x="46" y="23" font-size="13" font-weight="600" fill="#334155">本地环境</text>
  </g>
</svg>`
</script>
