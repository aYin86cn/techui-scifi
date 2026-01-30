<template>
  <div class="demo-container">
    
    <!-- 案例1: 倍数配置 (fr单位) -->
    <h2>案例1: 使用倍数比例</h2>
    <TuiGrid 
      :rows="2" 
      :cols="4"
      :colConfig="[
        { size: 1 },    // 1倍宽度
        { size: 2 },    // 2倍宽度
        { size: 1 },    // 1倍宽度
        { size: 3 }     // 3倍宽度
      ]"
      :rowConfig="[
        { size: 1 },    // 1倍高度
        { size: 2 }     // 2倍高度
      ]"
    >
      <template #cell-0-0><div>1fr</div></template>
      <template #cell-0-1><div>2fr (2倍宽)</div></template>
      <template #cell-0-2><div>1fr</div></template>
      <template #cell-0-3><div>3fr (3倍宽)</div></template>
      <template #cell-1-0><div>2fr高</div></template>
      <template #cell-1-1><div>2fr高</div></template>
    </TuiGrid>

    <!-- 案例2: 固定像素尺寸 -->
    <h2>案例2: 固定像素尺寸</h2>
    <TuiGrid 
      style="height:220px"
      :rows="2" 
      :cols="3"
      :colConfig="[
        { size: '150px' },   // 固定150px宽
        { size: '1fr' },     // 自动填充剩余空间
        { size: '200px' }    // 固定200px宽
      ]"
      :rowConfig="[
        { size: '80px' },    // 固定80px高
        { size: '120px' }    // 固定120px高
      ]"
    >
      <template #cell-0-0><div>150px宽</div></template>
      <template #cell-0-1><div>自适应宽度</div></template>
      <template #cell-0-2><div>200px宽</div></template>
      <template #cell-1-1><div>120px高</div></template>
    </TuiGrid>

    <!-- 案例3: 百分比尺寸 -->
    <h2>案例3: 百分比尺寸</h2>
    <TuiGrid 
      :rows="2" 
      :cols="3"
      :colConfig="[
        { size: '20%' },     // 占容器20%宽
        { size: '30%' },     // 占容器30%宽
        { size: '50%' }      // 占容器50%宽
      ]"
      :rowConfig="[
        { size: '40%' },
        { size: '60%' }
      ]"
    >
      <template #cell-0-0><div>20%宽</div></template>
      <template #cell-0-1><div>30%宽</div></template>
      <template #cell-0-2><div>50%宽</div></template>
    </TuiGrid>

    <!-- 案例4: 混合配置 -->
    <h2>案例4: 混合配置（最常用）</h2>
    <TuiGrid 
      :rows="3" 
      :cols="4"
      :colConfig="[
        { size: '100px' },   // 固定侧边栏
        { size: 2 },         // 主内容区（2倍）
        { size: 1 },         // 次要区域（1倍）
        { size: '150px' }    // 固定右侧栏
      ]"
      :rowConfig="[
        { size: '60px' },    // 固定头部
        { size: 1 },         // 内容区自适应
        { size: '40px' }     // 固定底部
      ]"
    >
      <template #cell-0-0><div>Logo</div></template>
      <template #cell-0-1><div>导航栏</div></template>
      <template #cell-0-2><div>搜索</div></template>
      <template #cell-0-3><div>用户信息</div></template>
      
      <template #cell-1-0><div>左侧菜单</div></template>
      <template #cell-1-1><div>主内容（占2份）</div></template>
      <template #cell-1-2><div>侧边信息</div></template>
      <template #cell-1-3><div>广告位</div></template>
      
      <template #cell-2-0><div>状态</div></template>
      <template #cell-2-1><div>底部信息</div></template>
    </TuiGrid>

    <!-- 案例5: auto 和 minmax -->
    <h2>案例5: 高级CSS TuiGrid函数</h2>
    <TuiGrid 
      :rows="2" 
      :cols="3"
      :colConfig="[
        { size: 'auto' },                    // 根据内容自动调整
        { size: 'minmax(100px, 1fr)' },      // 最小100px，最大1fr
        { size: 'minmax(150px, 300px)' }     // 最小150px，最大300px
      ]"
    >
      <template #cell-0-0>
        <div>这是很长很长的内容会撑开auto列</div>
      </template>
      <template #cell-0-1>
        <div>minmax(100px, 1fr)</div>
      </template>
      <template #cell-0-2>
        <div>minmax(150px, 300px)</div>
      </template>
    </TuiGrid>

    <!-- 案例6: 实际场景 - 响应式仪表板 -->
    <h2>案例6: 实际场景 - 仪表板布局 自定义Class</h2>
    <TuiGrid 
      :rows="4" 
      :cols="4"
      :gap="20"
      :colConfig="[
        { size: 1 },
        { size: 1 },
        { size: 1 },
        { size: 1 }
      ]"
      :rowConfig="[
        { size: '80px' },    // 头部固定高度
        { size: 2 },         // 主要图表区
        { size: 1 },         // 次要信息
        { size: '60px' }     // 底部固定
      ]"
      :cellConfig="{
        '0-0': { colSpan: 4,className:'custom-cell-0-0' },              // 头部横跨全部
        '1-0': { rowSpan: 2,className:'custom-cell-1-0', colSpan: 2 },  // 大图表
        '1-2': { rowSpan: 1,className:'custom-cell-1-2', colSpan: 2 },  // 中图表
        '3-0': { colSpan: 4,className:'custom-cell-3-0' }               // 底部横跨全部
      }"
    >
      <template #cell-0-0>
        <div class="header">📊 数据仪表板</div>
      </template>
      <template #cell-1-0>
        <div class="big-chart">主要图表区域 (2x2)</div>
      </template>
      <template #cell-1-2>
        <div class="chart">销售趋势 (1x2)</div>
      </template>
      <template #cell-2-2>
        <div class="card">卡片1</div>
      </template>
      <template #cell-2-3>
        <div class="card">卡片2</div>
      </template>
      <template #cell-3-0>
        <div class="footer">© 2025 Dashboard</div>
      </template>
    </TuiGrid>

  </div>
</template>

<script setup>
</script>

<style lang="less">
.demo-container { padding: 20px; max-width: 1400px;margin: 0 auto;
  .tui-grid-wrap{max-height:500px;}
  h2 { margin: 40px 0 15px 0; border-left: 4px solid #4CAF50; padding-left: 10px; }
  .header { font-size: 24px; font-weight: bold; padding: 20px; border-radius: 8px; }
  .big-chart { font-size: 18px; padding: 30px; border-radius: 8px; height: 100%; display: flex; align-items: center; justify-content: center; }
  .chart { padding: 20px; border-radius: 8px; height: 100%; }
  .card { padding: 15px; border-radius: 8px; }
  .footer { padding: 15px; border-radius: 8px; text-align: center; }
}

</style>