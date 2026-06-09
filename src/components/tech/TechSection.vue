<template>
  <section id="tech" class="py-24 scroll-mt-16">
    <SectionTitle title="技术架构全景" color="#7C3AED" />

    <div class="relative group">
      <div
        class="bg-white border-2 border-slate-800 rounded-2xl shadow-sticker p-4 sm:p-6 overflow-x-auto cursor-pointer"
        v-html="svgContent"
        @click="showModal = true"
      />
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl bg-slate-800/5">
        <span class="bg-slate-800/80 text-white text-xs px-3 py-1.5 rounded-full">点击放大</span>
      </div>
    </div>

    <n-modal v-model:show="showModal" preset="card" title="技术架构全景 · 滚轮缩放" style="width:98vw;max-width:1600px" :mask-closable="true">
      <div class="overflow-auto" style="max-height:85vh;cursor:zoom-in" @wheel.prevent="onWheel">
        <div :style="{ transform: `scale(${scale})`, transformOrigin: 'top left', transition: 'transform 0.1s' }" v-html="svgContent" />
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

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" style="width:100%;min-width:750px;height:auto">
  <defs>
    <style>
      .title-main { font-family: 'Outfit', system-ui, sans-serif; font-size: 22px; font-weight: 800; fill: #1e293b; letter-spacing: 1px; }
      .title-sub { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 11px; font-weight: 600; fill: #64748b; letter-spacing: 2px; }
      .layer-title { font-family: 'Outfit', system-ui, sans-serif; font-size: 12px; font-weight: 700; }
      .section-title { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 10px; font-weight: 700; fill: #475569; }
      .node-text { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 9px; font-weight: 600; fill: #334155; }
      .node-text-light { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 9px; font-weight: 600; fill: #ffffff; }
      .node-text-small { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 8px; font-weight: 600; fill: #475569; }
      .flow-label { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 9px; font-weight: bold; fill: #d97706; font-style: italic; }
      .interactive-node { transition: filter 0.2s ease; cursor: pointer; }
      .interactive-node:hover { filter: brightness(1.05) drop-shadow(0 4px 8px rgba(0,0,0,0.12)); }
      @keyframes dash { to { stroke-dashoffset: -20; } }
      .flow-line { stroke-dasharray: 6, 4; animation: dash 1s linear infinite; }
    </style>
    <filter id="soft-shadow" x="-5%" y="-5%" width="110%" height="110%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.04" />
    </filter>
    <filter id="node-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.06" />
    </filter>
    <linearGradient id="bg-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8fafc" /><stop offset="100%" stop-color="#f1f5f9" />
    </linearGradient>
    <linearGradient id="layer-app-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#faf5ff" /><stop offset="100%" stop-color="#f3e8ff" />
    </linearGradient>
    <linearGradient id="app-card-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" /><stop offset="100%" stop-color="#f5f3ff" />
    </linearGradient>
    <linearGradient id="layer-pipe-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fffbeb" /><stop offset="100%" stop-color="#fef3c7" />
    </linearGradient>
    <linearGradient id="layer-data-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ecfdf5" /><stop offset="100%" stop-color="#d1fae5" />
    </linearGradient>
    <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>

  <rect width="1000" height="650" fill="url(#bg-grad)" rx="16" />

  <g transform="translate(0, 5)">
    <rect x="340" y="16" width="320" height="40" fill="#ffffff" rx="20" filter="url(#soft-shadow)" />
    <circle cx="360" cy="36" r="5" fill="#6366f1" />
    <circle cx="640" cy="36" r="5" fill="#34d399" />
    <text class="title-main" x="500" y="42" text-anchor="middle">部门技术架构全景</text>
    <text class="title-sub" x="500" y="70" text-anchor="middle">DATA ENGINEERING &amp; ANALYTICS TECHNOLOGY STACK</text>
  </g>

  <rect x="20" y="85" width="135" height="535" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" rx="12" filter="url(#soft-shadow)" />
  <rect x="20" y="85" width="135" height="30" fill="#f8fafc" rx="12" clip-path="polygon(0 0, 135 0, 135 30, 0 30)" />
  <line x1="20" y1="115" x2="155" y2="115" stroke="#e2e8f0" stroke-width="1.5" />
  <text class="layer-title" x="87.5" y="104" fill="#475569" text-anchor="middle">开发与工具链</text>

  <g transform="translate(0, 30)">
    <rect x="30" y="100" width="115" height="55" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="8" />
    <text class="section-title" x="40" y="115">版本管理</text>
    <g class="interactive-node" transform="translate(38, 126)">
      <rect width="46" height="20" fill="#fff5f5" stroke="#fecaca" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="23" y="12" text-anchor="middle" fill="#991b1b">GitLab</text>
    </g>
    <g class="interactive-node" transform="translate(90, 126)">
      <rect width="46" height="20" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="23" y="12" text-anchor="middle" fill="#0f172a">GitHub</text>
    </g>
  </g>

  <g transform="translate(0, 95)">
    <rect x="30" y="100" width="115" height="55" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="8" />
    <text class="section-title" x="40" y="115">IDE</text>
    <g class="interactive-node" transform="translate(38, 126)">
      <rect width="46" height="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="23" y="12" text-anchor="middle" fill="#1e40af">VS Code</text>
    </g>
    <g class="interactive-node" transform="translate(90, 126)">
      <rect width="46" height="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="23" y="12" text-anchor="middle" fill="#166534">SAS Viya</text>
    </g>
  </g>

  <g transform="translate(0, 160)">
    <rect x="30" y="100" width="115" height="58" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="8" />
    <text class="section-title" x="40" y="115">编程语言</text>
    <g class="interactive-node" transform="translate(36, 128)">
      <rect width="36" height="20" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="18" y="12" text-anchor="middle" fill="#0369a1">Python</text>
    </g>
    <g class="interactive-node" transform="translate(76, 128)">
      <rect width="28" height="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="14" y="12" text-anchor="middle" fill="#1d4ed8">TS</text>
    </g>
    <g class="interactive-node" transform="translate(108, 128)">
      <rect width="30" height="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="15" y="12" text-anchor="middle" fill="#15803d">SAS</text>
    </g>
  </g>

  <g transform="translate(0, 227)">
    <rect x="30" y="100" width="115" height="74" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="8" />
    <text class="section-title" x="40" y="115">可视化技术</text>
    <g class="interactive-node" transform="translate(38, 124)">
      <rect width="44" height="20" fill="#fff5f5" stroke="#fecaca" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="22" y="12" text-anchor="middle" fill="#991b1b">ECharts</text>
    </g>
    <g class="interactive-node" transform="translate(86, 124)">
      <rect width="52" height="20" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="26" y="12" text-anchor="middle" fill="#0369a1">Python Viz</text>
    </g>
    <g class="interactive-node" transform="translate(52, 148)">
      <rect width="70" height="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" rx="4" filter="url(#node-shadow)" />
      <text class="node-text-small" x="35" y="12" text-anchor="middle" fill="#15803d">SAS GTL</text>
    </g>
  </g>

  <g transform="translate(0, 310)">
    <rect x="30" y="100" width="115" height="55" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="8" />
    <text class="section-title" x="40" y="115">AI 工具</text>
    <g class="interactive-node" transform="translate(38, 124)">
      <rect width="98" height="22" fill="#fafaf9" stroke="#d6d3d1" stroke-width="1.5" rx="4" filter="url(#node-shadow)" />
      <circle cx="12" cy="11" r="4" fill="#d97706" />
      <text class="node-text-small" x="58" y="14" text-anchor="middle" fill="#44403c" font-weight="bold">Claude Code</text>
    </g>
  </g>

  <g id="layer-application">
    <rect x="175" y="85" width="805" height="215" fill="url(#layer-app-grad)" stroke="#c084fc" stroke-width="1.5" rx="12" filter="url(#soft-shadow)" />
    <rect x="175" y="85" width="160" height="24" fill="#a855f7" rx="12" />
    <text class="layer-title" x="190" y="101" fill="#ffffff">应用层 Application</text>
    <g transform="translate(190, 115)">
      <rect width="380" height="80" fill="url(#app-card-grad)" stroke="#d8b4fe" stroke-width="1" rx="8" />
      <circle cx="15" cy="15" r="3" fill="#a855f7" />
      <text class="section-title" x="25" y="18">可视化分析 / BI Platform</text>
      <g class="interactive-node" transform="translate(50, 36)">
        <rect width="130" height="30" fill="#fdf4ff" stroke="#f3d8f7" stroke-width="1.5" rx="6" filter="url(#node-shadow)" />
        <text class="node-text" x="65" y="18" text-anchor="middle" fill="#86198f">Apache Superset</text>
      </g>
      <g class="interactive-node" transform="translate(200, 36)">
        <rect width="140" height="30" fill="#fdf4ff" stroke="#f3d8f7" stroke-width="1.5" rx="6" filter="url(#node-shadow)" />
        <text class="node-text" x="70" y="18" text-anchor="middle" fill="#86198f">SAS Visual Analytics</text>
      </g>
    </g>
    <g transform="translate(585, 115)">
      <rect width="380" height="80" fill="url(#app-card-grad)" stroke="#d8b4fe" stroke-width="1" rx="8" />
      <circle cx="15" cy="15" r="3" fill="#a855f7" />
      <text class="section-title" x="25" y="18">数据分析 / Statistical Analysis</text>
      <g class="interactive-node" transform="translate(30, 36)">
        <rect width="90" height="30" fill="#f3e8ff" stroke="#c084fc" stroke-width="1" rx="6" filter="url(#node-shadow)" />
        <text class="node-text" x="45" y="18" text-anchor="middle" fill="#6b21a8">SAS Viya</text>
      </g>
      <g class="interactive-node" transform="translate(135, 36)">
        <rect width="110" height="30" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1" rx="6" filter="url(#node-shadow)" />
        <text class="node-text" x="55" y="18" text-anchor="middle" fill="#5b21b6">定制报表 Custom</text>
      </g>
      <g class="interactive-node" transform="translate(260, 36)">
        <rect width="100" height="30" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1" rx="6" filter="url(#node-shadow)" />
        <text class="node-text" x="50" y="18" text-anchor="middle" fill="#5b21b6">指标体系 Metrics</text>
      </g>
    </g>
    <g transform="translate(190, 205)">
      <rect width="380" height="80" fill="url(#app-card-grad)" stroke="#d8b4fe" stroke-width="1" rx="8" />
      <circle cx="15" cy="15" r="3" fill="#a855f7" />
      <text class="section-title" x="25" y="18">自研平台 / Proprietary Systems</text>
      <g class="interactive-node" transform="translate(40, 34)">
        <rect width="300" height="32" fill="#7c3aed" rx="6" filter="url(#node-shadow)" />
        <text class="node-text-light" x="150" y="20" text-anchor="middle">ClinMatrix - Web 应用 (Vue3 + Django)</text>
      </g>
    </g>
    <g transform="translate(585, 205)">
      <rect width="380" height="80" fill="url(#app-card-grad)" stroke="#d8b4fe" stroke-width="1" rx="8" />
      <circle cx="15" cy="15" r="3" fill="#a855f7" />
      <text class="section-title" x="25" y="18">自动化集成 / Automation Integration</text>
      <g class="interactive-node" transform="translate(70, 34)">
        <rect width="110" height="32" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.5" rx="6" filter="url(#node-shadow)" />
        <text class="node-text" x="55" y="20" text-anchor="middle" fill="#5b21b6">SAS Viya API</text>
      </g>
      <g class="interactive-node" transform="translate(200, 34)">
        <rect width="110" height="32" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" rx="6" filter="url(#node-shadow)" />
        <text class="node-text" x="55" y="20" text-anchor="middle" fill="#1e40af">飞书 API</text>
      </g>
    </g>
  </g>

  <g id="layer-pipeline">
    <rect x="175" y="315" width="805" height="135" fill="url(#layer-pipe-grad)" stroke="#fbbf24" stroke-width="1.5" rx="12" filter="url(#soft-shadow)" />
    <rect x="175" y="315" width="178" height="24" fill="#d97706" rx="12" />
    <text class="layer-title" x="190" y="331" fill="#ffffff">管道层 Data Pipeline &amp; ETL</text>
    <g class="interactive-node" transform="translate(195, 350)">
      <rect width="120" height="30" fill="#fffbeb" stroke="#fef3c7" stroke-width="2" rx="6" filter="url(#node-shadow)" />
      <text class="node-text" x="60" y="18" text-anchor="middle" fill="#b45309" font-weight="bold">SAS Viya 计算引擎</text>
    </g>
    <g class="interactive-node" transform="translate(325, 350)">
      <rect width="210" height="30" fill="#fef3c7" stroke="#fcd34d" stroke-width="2" rx="6" filter="url(#node-shadow)" />
      <polygon points="18,11 18,19 25,15" fill="#d97706" />
      <text class="node-text" x="120" y="18" text-anchor="middle" fill="#92400e" font-weight="bold">Dolphin Scheduler · ELT 调度</text>
    </g>
    <g transform="translate(195, 395)">
      <g class="interactive-node" transform="translate(0, 0)">
        <rect width="45" height="24" fill="#fff7ed" stroke="#fdba74" stroke-width="1" rx="12" />
        <text class="node-text-small" x="22.5" y="14" text-anchor="middle" fill="#c2410c">EDC</text>
      </g>
      <g class="interactive-node" transform="translate(52, 0)">
        <rect width="45" height="24" fill="#fff7ed" stroke="#fdba74" stroke-width="1" rx="12" />
        <text class="node-text-small" x="22.5" y="14" text-anchor="middle" fill="#c2410c">IRC</text>
      </g>
      <g class="interactive-node" transform="translate(104, 0)">
        <rect width="45" height="24" fill="#fff7ed" stroke="#fdba74" stroke-width="1" rx="12" />
        <text class="node-text-small" x="22.5" y="14" text-anchor="middle" fill="#c2410c">IRT</text>
      </g>
      <g class="interactive-node" transform="translate(156, 0)">
        <rect width="40" height="24" fill="#fff7ed" stroke="#fdba74" stroke-width="1" rx="12" />
        <text class="node-text-small" x="20" y="14" text-anchor="middle" fill="#c2410c">PV</text>
      </g>
      <g class="interactive-node" transform="translate(203, 0)">
        <rect width="60" height="24" fill="#fff7ed" stroke="#fdba74" stroke-width="1" rx="12" />
        <text class="node-text-small" x="30" y="14" text-anchor="middle" fill="#c2410c">eCoding</text>
      </g>
      <g class="interactive-node" transform="translate(270, 0)">
        <rect width="50" height="24" fill="#fff7ed" stroke="#fdba74" stroke-width="1" rx="12" />
        <text class="node-text-small" x="25" y="14" text-anchor="middle" fill="#c2410c">eCOA</text>
      </g>
      <g class="interactive-node" transform="translate(327, 0)">
        <rect width="50" height="24" fill="#fff7ed" stroke="#fdba74" stroke-width="1" rx="12" />
        <text class="node-text-small" x="25" y="14" text-anchor="middle" fill="#c2410c">CTMS</text>
      </g>
      <rect x="390" y="2" width="110" height="20" fill="none" stroke="#f59e0b" stroke-dasharray="2 2" rx="4"/>
      <text class="node-text-small" x="445" y="14" text-anchor="middle" fill="#b45309">临床业务系统集成</text>
    </g>
  </g>

  <g id="layer-data">
    <rect x="175" y="465" width="805" height="155" fill="url(#layer-data-grad)" stroke="#10b981" stroke-width="1.5" rx="12" filter="url(#soft-shadow)" />
    <rect x="175" y="465" width="170" height="24" fill="#059669" rx="12" />
    <text class="layer-title" x="190" y="481" fill="#ffffff">数据层 Data Storage</text>
    <g class="interactive-node" transform="translate(260, 515)">
      <rect width="210" height="75" fill="#ffffff" stroke="#34d399" stroke-width="1.5" rx="8" filter="url(#node-shadow)" />
      <g transform="translate(15, 20)" fill="none" stroke="#059669" stroke-width="1.5">
        <ellipse cx="15" cy="10" rx="12" ry="5" fill="#d1fae5" />
        <path d="M 3,10 L 3,22 A 12,5 0 0,0 27,22 L 27,10" />
        <path d="M 3,16 A 12,5 0 0,0 27,16" />
      </g>
      <text class="node-text" x="125" y="32" text-anchor="middle" fill="#065f46" font-size="12px" font-weight="bold">ClickHouse 数据仓库</text>
      <text class="node-text-small" x="125" y="52" text-anchor="middle" fill="#047857">高性能列式 OLAP 引擎</text>
    </g>
    <g class="interactive-node" transform="translate(530, 515)">
      <rect width="210" height="75" fill="#ffffff" stroke="#34d399" stroke-width="1.5" rx="8" filter="url(#node-shadow)" />
      <g transform="translate(15, 20)" fill="none" stroke="#059669" stroke-width="1.5">
        <ellipse cx="15" cy="10" rx="12" ry="5" fill="#d1fae5" />
        <path d="M 3,10 L 3,22 A 12,5 0 0,0 27,22 L 27,10" />
        <path d="M 3,16 A 12,5 0 0,0 27,16" />
      </g>
      <text class="node-text" x="125" y="32" text-anchor="middle" fill="#065f46" font-size="12px" font-weight="bold">PostgreSQL 数据库</text>
      <text class="node-text-small" x="125" y="52" text-anchor="middle" fill="#047857">高可靠主数据与配置存储</text>
    </g>
  </g>

  <g>
    <path class="flow-line" d="M 577, 300 L 577, 315" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-gold)" />
    <path d="M 577, 300 L 577, 313" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.5" />
    <text class="flow-label" x="585" y="310">数据回流/交互</text>
  </g>
  <g>
    <path class="flow-line" d="M 577, 450 L 577, 465" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-gold)" />
    <path d="M 577, 450 L 577, 463" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.5" />
    <text class="flow-label" x="585" y="460">结构化归档 / ETL 入库</text>
  </g>

  <rect x="830" y="298" width="145" height="18" fill="#fffbeb" stroke="#fcd34d" rx="9" />
  <circle cx="840" cy="307" r="4" fill="#f59e0b" />
  <text class="flow-label" x="850" y="310">Pipeline 数据流向</text>

  <rect x="830" y="448" width="145" height="18" fill="#fffbeb" stroke="#fcd34d" rx="9" />
  <circle cx="840" cy="457" r="4" fill="#f59e0b" />
  <text class="flow-label" x="850" y="460">Database 持久化</text>
</svg>`
</script>
