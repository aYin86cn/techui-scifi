<script setup>
import { reactive } from 'vue';
// 移除 Lucide 图标引入

// 核心数据定义
const ecosystem = reactive([
  {
    name: '@techui/admin',
    title: '管理后台',
    desc: '功能全面的工作台组件库，完美适用于企业仪表板。',
    type: 'free',
    icon: '🎛️',
    color: '#3b82f6',
    appera:"success"
  },
  {
    name: '@techui/base',
    title: '基础组件',
    desc: 'Vue3 构建，处理表单与数据展示，轻量易用。',
    type: 'free',
    icon: '📦',
    color: '#10b981',
    appera:"primary"
  },
  {
    name: '@techui/scifi',
    title: '科幻组件',
    desc: '动态 SVG 组件，打造未来感数据可视化体验。',
    type: 'free',
    icon: '🛸',
    color: '#8b5cf6',
    appera:"warning"
  },
  {
    name: '@techui/prime',
    title: 'Prime 专业版',
    desc: '全能集合，付费组件库，支撑TechUI继续走下去的动力。',
    type: 'paid',
    icon: '⚡',
    color: '#f43f5e',
    appera:"danger"
  }
]);

const updates = reactive([
  { title: '组件库重构', items: [
    '研发 @techui/base 基础库', 
    '构建 @techui/admin 后台库', 
    '基于早期Vue2版本迭代了 @techui/scifi 科幻组件库',
    '基于免费图标库，整理开发@techui/icons图标库',
    '此前AyinColor颜色库，更名为@techui/colors',
  ]},
  { title: '核心模块优化', items: [
    '参考React组件库，新增Provider组件,提供全局服务',
    '新增TuiService，TuiState，提供全局状态管理和函数',
    '重构 WASM 核心模块', 
    'TuiAdaptive 全面升级', 
    'Tui3DPanel 增加厚度参数', 
    '移除旧版调试监控重构为 TuiPanicAlert'
  ] },
  { title: '基础设施', items: [
    '全新全局主题与多语言', 
    '定制化 @techui/libs', 
    '整合此前的工具函数为 @techui/utils', 
    '对此前的主题，深度迭代重构为@techui/themes',
    '自研简易的多语言，开发了@techui/locales',
    '开发并集成了声音提示工具',
  ] }
]);

const dependencies = [
  { name: '@techui/icons', intro: 'TechUI图标库' },
  { name: '@techui/colors', intro: 'TechUI色彩系统' },
  { name: '@techui/lessmixins', intro: 'TechUILESS 混入' },
  { name: '@techui/locales', intro: 'TechUI国际化' },
  { name: '@techui/themes', intro: 'TechUI主题系统' },
  { name: '@techui/utils', intro: 'TechUI工具函数' },
  { name: '@techui/libs', intro: 'TechUI收集的工具库（防止破坏性更新）' },
  { name: 'chromajs', intro: '色彩处理工具库' },
  { name: 'floating-ui', intro: '浮动定位工具库' },
  { name: 'less', intro: 'CSS预处理器' },
  { name: 'async-validator', intro: '异步验证' },
  { name: 'dayjs', intro: '日期处理' },
  { name: 'devtools-detector', intro: '开发工具检测' }
];

const credits = [
  { name: '@jiaminghi/data-view', role: 'TechUI的起源 特别鸣谢！' },
  { name: 'chroma.js', role: '色彩处理工具库' },
  { name: 'Floating UI', role: '浮动定位工具库' },
  { name: 'Less', role: 'CSS预处理器' },
  { name: 'icones.js.org', role: '免费图标来源' },
  { name: 'B站UP主：软件工艺师', role: 'Rust编程语言入门教程' },
  { name: 'B站UP主：jumtp', role: '视频：快速创建 rust-wasm 并在 vite (vue) 结合' },
  { name: 'B站UP主：前端老鹰', role: '视频：主题切换动画效果' },
  { name: 'B站UP主：渡一（教育）', role: '视频：前端（教程）视频杂集' },
];
</script>

<template>
  <div class="techui-intro-overview">
    <header class="hero-section">
      <TuiIconLogo/>
      <div class="main-title">
        
        TechUI <span class="highlight">Design</span>
      </div>
      <div class="badge">第三代 (内测)</div>
      <p class="slogan">专注数据可视化 & 专注数据展示</p>
      <p class="intro">
        
      </p>
    </header>

    <!-- 发展背景 -->
    <section class="content-block history-block">
      <h2 class="section-title">研发历程</h2>
      <div class="text-content">
        <p>TechUI组件库由作者独立完成开发，纯手工开发阶段2019-2023，AI辅助开发阶段2023-2025，希望能组建一个开发团队来共同为TechUI组件库添砖加瓦。</p>
        <div class="milestone-box">
          <div class="milestone-item">
            <span class="year">2019</span>
            <span class="event">受好友委托，基于@jiaminghi data-view开发的首个自用版本，无系统设计，拼凑感较强，勉强能用。 </span>
          </div>
          <div class="milestone-item">
            <span class="year">2021</span>
            <span class="event">设计了主题系统，引入了i18n，使用加密JS的方式开发了首个前端许可证功能，组件库起名为“数字魔方”</span>
          </div>
          <div class="milestone-item">
            <span class="year">2022</span>
            <span class="event">更名为TechUI并发布了多个版本，TechUI-Vue2，TechUI-Vue3-lite，TechUI-React-lite。</span>
          </div>
          <div class="milestone-item">
            <span class="year">2023</span>
            <span class="event">学习了Rust语言，使用Webassembly技术，构建首个安全有效的前端许可证WASM模块。此前的版本均推广失败！</span>
          </div>
          <div class="milestone-item">
            <span class="year">2024+</span>
            <span class="event">TechUI第三版 彻底重构，AI 辅助编程，大大提高效率和组件质量。</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 生态系统卡片 -->
    <section class="content-block">
      <h2 class="section-title">组件生态体系</h2>
      <div class="ecosystem-grid">
        <div :class="item.appera" v-for="item in ecosystem" :key="item.name" class="eco-card" :style="{ '--accent-color': item.color }">
          <div class="card-header">
            <span class="card-icon-emoji">{{ item.icon }}</span>
            <div class="card-name-outer">
              <span class="card-name">{{ item.title }}</span>
              <span class="pkg-name">{{ item.name }}</span>
            </div>
            <div :class="item.appera" class="tag" >{{ item.type === 'free' ? '免费' : '付费' }}</div>
          </div>
          
          <span class="card-desc">{{ item.desc }}</span>
        </div>
      </div>
    </section>

    <!-- TuiAdaptive 核心亮点 -->
    <section class="content-block adaptive-block">
      <div class="adaptive-content">
        <h2 class="section-title highlight-text">
          <span class="emoji-icon">🖥️</span> TuiAdaptive自适应组件
          <span class="strong-statement">市面上最强大的自适应组件，全功能版，完全免费</span>
        </h2>
        
        <ul class="feature-list">
          <li><strong>等比缩放：</strong> 在所有屏幕尺寸上保持完美的宽高比，一劳永逸的解决自适应的问题。</li>
          <li><strong>多种适配模式：</strong> 延伸、弹性、固定、拉伸四种模式，根据情况选择最佳缩放策略。</li>
          <li><strong>视图控制模式：</strong> 通过浏览器缩放功能启用视图拖拽和放大功能。</li>
          <li><strong>GIS 与地图集成：</strong> 特殊的同步穿透容器,确保完美的坐标精度。</li>
          <li><strong>第三方兼容性：</strong> 与 Cesium、Mapbox 和其他 GIS 库无缝配合。</li>
        </ul>
      </div>
    </section>

    <!-- 核心更新 -->
    <section class="content-block">
      <h2 class="section-title">3.0 核心更新</h2>
      <div class="updates-grid">
        <div v-for="(group, idx) in updates" :key="idx" class="update-group">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="(li, lidx) in group.items" :key="lidx">{{ li }}</li>
          </ul>
        </div>
      </div>
      <!-- 底部依赖与致谢 -->
      <div class="bottom-row">
        <section class="content-block half-block">
          <h3 class="sub-title"><span class="emoji-icon">🧱</span> 基础依赖</h3>
          <ul class="credits-list">
            <li v-for="dep in dependencies" :key="dep.name">
              <span class="c-name">{{ dep.name }}</span>
              <span class="c-role">{{ dep.intro }}</span>
            </li>
          </ul>
        </section>
        
        <section class="content-block half-block">
          <h3 class="sub-title"><span class="emoji-icon">🤝</span> 致谢名单</h3>
          <ul class="credits-list">
            <li v-for="c in credits" :key="c.name">
              <span class="c-name">{{ c.name }}</span>
              <span class="c-role">{{ c.role }}</span>
            </li>
          </ul>
        </section>
      </div>
    </section>

  </div>
</template>

<style lang="less">
.techui-intro-overview { max-width: 1280px; margin: 0 auto; padding: 40px; font-family: 'Inter', system-ui, sans-serif; line-height: 1.6;
  .hero-section {
    text-align: center; margin-bottom: 20px; padding: 40px 0;
    .badge { display: inline-block; padding: 4px 12px;.bgc(var(--primary-base));.bd(var(--primary-strong)); color: @wh; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 16px; }
    .tui-logo-icon{  display:inline-block; font-weight: normal;
      .tui-icon{font-size: 80px;}
    }
    .main-title { .flex(10px); align-items: center; justify-content:center; .fc(var(--font-strongest)); font-size: 48px; font-weight: 800; margin: 0 0 10px 0; letter-spacing: -1px;
      .highlight { background: linear-gradient(120deg, var(--primary-base), var(--emphasis-base) ); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    }
    .slogan { font-size: 20px;  margin-bottom: 24px; font-weight: 300; letter-spacing: 4px; text-transform: uppercase; }
    .intro { max-width: 800px; margin: 0 auto;  font-size: 16px; }
  }

  .content-block {
    margin-bottom: 40px;
    .section-title { font-size: 28px; font-weight: 600; margin-bottom: 24px; padding-bottom: 12px; .bdb(var(--common-bd)); }
    .sub-title { display: flex; align-items: center; font-size: 18px; margin-bottom: 15px; padding-bottom:15px; .fc(var(--primary-base)); .bdb(var(--common-bd)); }
    .emoji-icon { font-size: 24px; margin-right: 10px; line-height: 1; }
  }

  .history-block {
    .text-content {  
      p{margin-top:0; font-size: 16px;}
    }
    .milestone-box { display: flex; gap: 20px; margin-top: 20px; .bdt(var(--common-bd)); padding-top: 20px; flex-wrap: wrap; }
    .milestone-item { flex: 1; min-width: 200px; display: flex; flex-direction: column; }
    .year { font-size: 24px; font-weight: bold; .fc(var(--primary-base));  }
    .event {  margin-top: 4px; }
  }

  .ecosystem-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;
    .eco-card {padding: 15px; transition: all 0.3s ease; position: relative; overflow: hidden;
      .bd(var(--common-bd));.bgc(var(--common-bg)); .bdra(10px);
      &:hover { transform: translateY(-4px);  }
      .card-header { display: flex; align-items: center; margin-bottom: 12px; justify-content: space-between; }
      .card-icon-emoji { font-size: 32px; line-height: 1; }
      .tag { font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: bold; .bgc(var(--primary-base)); .fc(var(--font-weakest));
        &.danger{ .bgc(var(--danger-base)); .fc(var(--font-weakest));}
      }
      .card-desc { font-size: 13px; margin: 0; line-height: 1; }
      .card-name-outer{ margin-left: 8px; flex: 1;
        .card-name { font-weight: bold; font-size: 16px; }
        .pkg-name { display: block; .bgc(var(--tone-weakest_op3)); margin:0 5px 0 0;  font-size: 12px; border-radius: 4px; width: fit-content; }
      }
    }
  }

  .adaptive-block { margin-bottom:80px;
    .bd(var(--common-bd));.bgc(var(--common-bg)); .bdra(10px);
    .adaptive-content { padding: 30px; position: relative; }
    .highlight-text { border-left: none; padding:0 0 15px 0; margin:0 0 30px 0; .fc(var(--primary-base)); }
    .strong-statement { font-size: 18px; font-weight: bold; margin:0 20px;  .fc(var(--font-stronger)); }
    .feature-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;
      li { position: relative; padding-left: 20px; font-size: 14px;  }
      li::before { content: ''; position: absolute; left: 0; top: 8px; width: 6px; height: 6px; .bgc(var(--primary-base)); border-radius: 50%; }
      strong {  .fc(var(--font-stronger));  display:block; margin: 0 0 10px 0;}
    }
  }

  .updates-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 60px; margin:40px 0;
    .update-group {  border-radius: 5px; 
      h3 { font-size: 16px; .fc(var(--primary-base)); margin: 0 0 16px 0; .bdb(var(--common-bd)); padding-bottom: 10px; }
      ul { list-style: none; padding: 0; margin: 0; }
      li { font-size: 13px;  margin-bottom: 8px; padding-left: 12px; .bdl(var(--success-base),3px); }
    }
  }

  .bottom-row { display: flex; gap: 60px; flex-wrap: wrap; }
  .half-block { flex: 1; min-width: 300px;  border-radius: 5px;  margin-bottom: 0; }

  .credits-list { list-style: none; padding: 0; margin: 0 0 20px 0;
    li { display: flex; justify-content: space-between; border-bottom: 1px dashed var(--common-bd); padding: 8px 0; font-size: 13px; }
    .c-name { .fc(var(--font-strong)); font-weight: bold; }
    .c-role { }
  }
  
}
</style>