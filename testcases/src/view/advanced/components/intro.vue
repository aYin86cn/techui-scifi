<script setup>
import { ref } from 'vue'

// 基础统计数据
const basicStats = ref([
  { name: 'Advance (高级组件)', count: 6, icon: '⚡' },
  { name: 'Admin (管理台组件)', count: 3, icon: '⚡' },
  { name: 'Kernel (核心组件)', count: 3, icon: '☢️' },
  { name: 'Common (通用组件)', count: 22, icon: '🧩' },
  { name: 'Container (容器组件)', count: 12, icon: '📦' },
  { name: 'Prompt (提示组件)', count: 7, icon: '🔔' },
  { name: 'Data (数据展示)', count: 8, icon: '📊' },
  { name: 'Navigation (导航)', count: 9, icon: '🧭' },
  { name: 'RollingGroup (滚动)', count: 15, icon: '📜' },
  { name: 'Other (其他/工具)', count: 7, icon: '🛠️' },
  // { name: 'Items (子组件)', count: 14, icon: '⚡' },
])

// 科幻组件统计数据
const scifiStats = ref([
  { name: 'Scifi Button (科幻按钮)', count: 5 },
  { name: 'Scifi Geometry (几何图形)', count: 5 },
  { name: 'Scifi Deco (装饰组件)', count: 5 },
  { name: 'Scifi Header (头部组件)', count: 4 },
  { name: 'Scifi Panel (面板组件)', count: 17 },
  { name: 'Scifi PanelTitle (标题)', count: 5 },
])

// 高级组件详情
const advancedComponents = ref([
  { 
    name: 'TuiAdaptive', 
    desc: '功能最强大的自适应组件，全功能版本，免费无限制。', 
    isPaid: false, 
    tag: 'Free' 
  },
  { 
    name: 'TuiEcharts / TuiEchartsMap', 
    desc: 'Echarts封装，支持3D化与GIS地图，可被原生Echarts取代', 
    isPaid: true, 
    tag: 'Paid' 
  },
  { 
    name: 'TuiBar3D', 
    desc: '3D柱图组件', 
    isPaid: true, 
    tag: 'Paid' 
  },
  { 
    name: 'TuiPie3D', 
    desc: '3D饼图组件', 
    isPaid: true, 
    tag: 'Paid' 
  },
  { 
    name: 'TuiPanicAlert', 
    desc: '拒绝服务提醒组件（如禁止调试、设备不匹配）', 
    isPaid: true, 
    tag: 'Paid' 
  },
  { 
    name: 'Tui3DPanel', 
    desc: '元素3D化组件，内置多种模式，实现炫酷3D效果', 
    isPaid: true, 
    tag: 'Paid' 
  }
])

// 库版本配置策略
const libStrategies = ref([
  { name: 'Prime组件库',intro:"包含所有TechUI组件",model:"闭源付费", policy: '默认开启 Advanced组件 (不可关闭)', optional: 'Echarts组件, Admin组件' },
  { name: 'Admin组件库',intro:"包含Admin组件、Base组件",model:"闭源免费", policy: '默认开启 Admin组件 (不可关闭)', optional: 'Echarts组件, Advanced组件' },
  { name: 'Base组件库',intro:"仅Base组件",model:"闭源免费", policy: '默认不开启', optional: 'Echarts组件, Advanced组件' },
  { name: 'Scifi组件库',intro:"仅Scifi组件",model:"闭源免费", policy: '默认不开启', optional: 'Echarts组件, Advanced组件' },
])

// 初始化代码片段
const initCode = `const params = {
  app,
  debug: true,
  features: {
    echarts: true,  // 开启echarts组件
    advanced: true, // 开启advanced组件
  }
}

TechUIInit(params).then(() => {
  app.use(colors)
  app.use(router)
  app.use(store)
  app.mount('#app')
})`

const totalCount = 133
</script>

<template>
  <div class="tech-ui-avd-overview">
    <!-- 头部区域 -->
    <header class="header-section">
      <h1 class="title">TechUI 高级组件库简介</h1>
      <div class="desc">
        当前多个TechUI组件库统计共包含 {{ totalCount }} 个组件，排除各个item组件后核心组件数 100+。<mark>其中包含 7 个高级组件（1免费/6付费）</mark>，其余均为免费组件。
      </div>
      <div class="desc">
        目前所有的TechUI组件库处于内测阶段，普通组件和高级（付费）组件名单并未完全确定，后续可能进行调整，或者开发其他的付费组件对此列表进行扩充。
      </div>
    </header>



    <div class="layout-column">
      <!-- 上部分：高级组件详情 -->
      <section class="advanced-section">
        <h2 class="section-title">高级组件 (Advanced)</h2>
        <div class="info-alert">
          ⚠️ 标记为Paid付费的高级组件默认未激活。未授权的情况下可手动激活后进入体验模式。
        </div>
        <ul class="advanced-list">
          <div v-for="comp in advancedComponents" :key="comp.name" class="adv-item" :class="{ paid: comp.isPaid }">
            <div class="adv-header">
              <span class="comp-name">{{ comp.name }}</span>
              <span class="badge" :class="comp.isPaid ? 'badge-paid' : 'badge-free'">{{ comp.tag }}</span>
            </div>
            <p class="adv-desc">{{ comp.desc }}</p>
          </div>
        </ul>
      </section>

      <!-- 下部分：配置与激活 -->
      <section class="config-section">
        <h2 class="section-title">激活与配置</h2>
        
        <div class="config-grid">
          <!-- 版本策略表格 -->
          <div class="strategy-table">
            <div class="table-row header">
              <span>组件库版本</span>
              <span>简介</span>
              <span>模式</span>
              <span>默认策略</span>
              <span>可选开启</span>
            </div>
            <div v-for="lib in libStrategies" :key="lib.name" class="table-row">
              <span class="lib-name">{{ lib.name }}</span>
              <span class="lib-intro">{{ lib.intro }}</span>
              <span class="lib-model">{{ lib.model }}</span>
              <span class="lib-policy">{{ lib.policy }}</span>
              <span class="lib-opt">{{ lib.optional }}</span>
            </div>
          </div>

          <!-- 代码演示 -->
          <div class="code-block">
            <div class="code-title">main.js 初始化配置</div>
            <pre><code>{{ initCode }}</code></pre>
          </div>
        </div>
      </section>

      <!-- 统计卡片区域 -->
      <section class="stats-container">
        <h2 class="section-title">组件分布统计</h2>
        <div class="stats-grid">
          <!-- 通用分类 -->
          <div v-for="item in basicStats" :key="item.name" class="stat-card basic">
            <div class="icon">{{ item.icon }}</div>
            <div class="info">
              <span class="count">{{ item.count }} 个</span>
              <span class="label">{{ item.name }}</span>
            </div>
          </div>
          <!-- 科幻分类 -->
          <div v-for="item in scifiStats" :key="item.name" class="stat-card scifi">
            <div class="icon">🪐</div>
            <div class="info">
              <span class="count">{{ item.count }} 个</span>
              <span class="label">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="less">
.tech-ui-avd-overview {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
  padding: 24px; min-height: 100vh; box-sizing: border-box; max-width: 1200px; margin: 0 auto;
  
  .header-section { text-align: center;
    margin-bottom: 32px; padding-bottom: 20px;
    h1 { font-size: 42px; font-weight: 700; .fc(var(--font-stronger)); line-height: 1.5;}
    .desc { line-height: 1.5; margin:0 0 20px 0;
      mark{.bgc(@tr); .fc(@orl5); font-weight: bold;}
    }
  }
  .section-title {
    font-size: 28px; line-height: 1.5; font-weight: 600; margin-bottom: 24px; padding-bottom: 12px; .bdb(var(--common-bd));
  }
  .stats-container { margin-bottom: 40px;
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
    
    .stat-card { .bgc(var(--common-bg));.bd(var(--common-bd)); border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px; transition: transform 0.2s;
      &:hover { transform: translateY(-2px); box-shadow: 0 4px 12px var(--shadow-weakest);  }
      .icon { font-size: 1.5rem; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;  border-radius: 50%; }
      .info { display: flex; flex-direction: column; 
        .count { font-size: 1.25rem; font-weight: bold; .fc(var(--font-stronger)); }
        .label { font-size: 14px;  }
      }
      
      &.scifi { .bgc(var(--primary-base_op1)); border-left: 3px solid var(--primary-base); .icon { .bgc(var(--primary-weaker)); } }
      &.basic { .bgc(var(--success-base_op1)); border-left: 3px solid var(--success-base); .icon { .bgc(var(--success-weaker)); } }
    }
  }

  .layout-column { display: flex; flex-direction: column; gap: 60px;
    .advanced-section {
      .info-alert { .bgc(var(--danger-weakest)); .bd(var(--danger-weaker)); .fc(var(--danger-base)); padding:6px 12px; border-radius: 6px; font-size: 14px; margin-bottom: 16px;  }
      .advanced-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: 0;
        .adv-item {
          .bgc(var(--common-bg)); .bd(var(--common-bd)); padding: 15px; border-radius: 8px; display: flex; flex-direction: column; 
          &.paid {.bgc(var(--primary-base_op1)); border-left: 4px solid var(--primary-base); }
          &:not(.paid) {.bgc(var(--success-base_op1)); border-left: 4px solid var(--success-base); }

          .adv-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;
            .comp-name { font-weight: bold; font-size: 1.1rem; .fc(var(--font-stronger)); }
            .badge { font-size: 0.75rem;.bgc(var(--common-bg)); padding: 2px 8px; border-radius: 4px; font-weight: bold; }
            .badge-paid { .fc(var(--primary-base)); }
            .badge-free { .fc(var(--success-base)); }
          }
          .adv-desc { font-size: 0.9rem;  margin: 0; line-height: 1.5; flex: 1; }
        }
      }
    }

    .config-section {
      // 改为 Flex 垂直布局，实现上下结构
      .config-grid {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .strategy-table {
        .bgc(var(--common-bg)); border-radius: 8px; overflow: hidden; font-size: 14px;
        .table-row { display: grid; grid-template-columns: .6fr 1.1fr .5fr 1.5fr 1.5fr; padding: 12px 16px; .bdb(var(--common-bd)); align-items: center;
          &.header {  .bgc(var(--primary-base_op1));.bdb(var(--primary-weaker)); .fc(var(--primary-base)); font-weight: bold;}
          &:last-child { border-bottom: none; }
          .lib-name { font-weight: bold; .fc(var(--font-stronger));}
          .lib-opt { font-family: monospace; .bgc(var(--primary-weakest)); padding: 2px 6px; border-radius: 4px; display: inline-block; }
        }
      }

      .code-block {.bgc(@gyd3); .fc(@wh);
        border-radius: 8px; overflow: hidden;
        .code-title {  .bdb(var(--tui-type-bd)); padding: 8px 16px; font-size: 1.2rem; font-weight: bold;}
        pre { margin: 0; padding: 16px; overflow-x: auto;
          code { font-family: 'Consolas', 'Monaco', monospace; font-size: 0.85rem; line-height: 1.5; white-space: pre; }
        }
      }
    }
  }
}
</style>