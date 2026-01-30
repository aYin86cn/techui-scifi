<template>
  <div class="tui-row-col-demo">
    <h2>TUI Grid 栅格布局示例</h2>
    
    <!-- 基础用法 -->
    <h3>基础用法</h3>
    <TuiRow class="row-bg">
      <TuiCol :span="24"><div class="grid-content col-bg">col</div></TuiCol>
    </TuiRow>
    <TuiRow class="row-bg">
      <TuiCol :span="12"><div class="grid-content col-bg">col-12</div></TuiCol>
      <TuiCol :span="12"><div class="grid-content col-bg-light">col-12</div></TuiCol>
    </TuiRow>
    <TuiRow class="row-bg">
      <TuiCol :span="8"><div class="grid-content col-bg">col-8</div></TuiCol>
      <TuiCol :span="8"><div class="grid-content col-bg-light">col-8</div></TuiCol>
      <TuiCol :span="8"><div class="grid-content col-bg">col-8</div></TuiCol>
    </TuiRow>
    <TuiRow class="row-bg">
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg-light">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg-light">col-6</div></TuiCol>
    </TuiRow>

    <!-- 分栏间隔 -->
    <h3>分栏间隔</h3>
    <TuiRow :gutter="20">
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
    </TuiRow>

    <!-- 混合布局 -->
    <h3>混合布局</h3>
    <TuiRow :gutter="20">
      <TuiCol :span="16"><div class="grid-content col-bg">col-16</div></TuiCol>
      <TuiCol :span="8"><div class="grid-content col-bg">col-8</div></TuiCol>
    </TuiRow>
    <TuiRow :gutter="20">
      <TuiCol :span="8"><div class="grid-content col-bg">col-8</div></TuiCol>
      <TuiCol :span="8"><div class="grid-content col-bg">col-8</div></TuiCol>
      <TuiCol :span="4"><div class="grid-content col-bg">col-4</div></TuiCol>
      <TuiCol :span="4"><div class="grid-content col-bg">col-4</div></TuiCol>
    </TuiRow>

    <!-- 列偏移 -->
    <h3>列偏移</h3>
    <TuiRow :gutter="20">
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6" :offset="6"><div class="grid-content col-bg">col-6 offset-6</div></TuiCol>
    </TuiRow>
    <TuiRow :gutter="20">
      <TuiCol :span="6" :offset="6"><div class="grid-content col-bg">col-6 offset-6</div></TuiCol>
      <TuiCol :span="6" :offset="6"><div class="grid-content col-bg">col-6 offset-6</div></TuiCol>
    </TuiRow>
    <TuiRow :gutter="20">
      <TuiCol :span="12" :offset="6"><div class="grid-content col-bg">col-12 offset-6</div></TuiCol>
    </TuiRow>

    <!-- 对齐方式 -->
    <h3>对齐方式</h3>
    <TuiRow class="row-bg">
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg-light">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
    </TuiRow>
    <TuiRow class="row-bg" justify="center">
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg-light">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
    </TuiRow>
    <TuiRow class="row-bg" justify="end">
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg-light">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
    </TuiRow>
    <TuiRow class="row-bg" justify="space-between">
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg-light">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
    </TuiRow>
    <TuiRow class="row-bg" justify="space-around">
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg-light">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
    </TuiRow>
    <TuiRow class="row-bg" justify="space-evenly">
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg-light">col-6</div></TuiCol>
      <TuiCol :span="6"><div class="grid-content col-bg">col-6</div></TuiCol>
    </TuiRow>

    <h3>响应式布局（需关闭适配面板测试）</h3>
    <TuiRow :gutter="10">
      <TuiCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content col-bg">col</div>
      </TuiCol>
      <TuiCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content col-bg-light">col</div>
      </TuiCol>
      <TuiCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content col-bg">col</div>
      </TuiCol>
      <TuiCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content col-bg-light">col</div>
      </TuiCol>
    </TuiRow>
  </div>
</template>
<script setup>
</script>
<style lang="less">
.tui-row-col-demo {max-width: 1400px; margin:60px auto;
  .tui-row{margin-bottom:30px;}
  .row-bg { .bgc( var(--common-bg_layer)); margin: 30px 0; }
  .grid-content { border-radius: 4px; min-height: 36px; line-height: 36px; text-align: center; }
  .col-bg { .bgc(var(--primary-base_op2)); .fc(var(--primary-stronger));}
  .col-bg-light { .bgc(var(--emphasis-base_op3)); .fc(var(--emphasis-stronger));}
  h3 { margin: 100px 0 30px 0; }
  h2{margin: 0 0 10px 0;}
}
</style>