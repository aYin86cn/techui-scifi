<script setup>
import { reactive } from 'vue';

const features = reactive([
  "全局常驻：默认位于屏幕右下角，不受页面路由切换影响，随时可用。",
  "快速导航：点击悬浮球展开扇形或列表菜单，支持自定义路由配置与图标。",
  "交互增强：支持拖拽改变悬浮位置，松手后自动吸附边缘，避免遮挡内容。",
  "主题适配：外观自动跟随系统主题色（Primary Color）变化。"
]);
</script>

<template>
  <div class="router-nav-doc">
    <div class="doc-title">TuiRouterNav 导航球</div>
    
    <div class="doc-intro">
      <h3>TuiRouterNav 是一个全局级的悬浮导航组件，旨在提供跨页面的快捷跳转入口。它不占用页面布局空间，以悬浮按钮形式常驻，适合管理后台或移动端风格的快速操作。</h3>
      <h3>当前页面的右下角有一个该组件的实例，可以进行测试和体验。</h3>
    </div>


    <ul class="feature-list">
      <li v-for="(item, index) in features" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="less">
.router-nav-doc { width: 100%; margin:40px auto; padding: 40px; box-sizing: border-box; max-width: 1200px;
  .doc-title { font-size: 28px; font-weight: 600; color: var(--common-text); margin-bottom: 20px; }
  .doc-intro { font-size: 16px; line-height: 1.6; color: var(--common-text); opacity: 0.8; margin-bottom: 30px; }
  .feature-list { padding-left: 20px;
    li { font-size: 15px; line-height: 2; color: var(--common-text); list-style-type: disc; margin-bottom: 5px; opacity: 0.7;
      &::marker { color: var(--primary-color, #409eff); }
    }
  }
}
</style>
