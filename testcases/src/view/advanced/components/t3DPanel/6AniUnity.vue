<script setup>
const tui3DConfig={
  mode:"animation",
  showShadow:true,
  // coeff:.5,
  shadowCoeff:3,
  thicknessCoeff:1.5,
  during:5,
  animationRotate:[
    { x:-5,y:5, },
    { x:-5,y:-5, },
    { x:5,y:-5, },
    { x:5,y:5, },
  ]
}
</script>
<template>
  <div class="tui-3d-test-aniUnity-wrap">
    <div class="title-desc">动画联合模式是静态参数，通过一个T3DPanel组件给所有Item提供变形功能。animation参数至少需要2组以上的参数，循环播放</div>
    <Tui3DPanel v-bind="tui3DConfig" class="t3d-panel">
      <template v-slot="parmas">
        <div class="grid-demo-wrap">
          <div class="item" v-for="(item,index) in 12">
            <div :class="`demo-box ${parmas?.boxShadowName}`">
              <div class="inner-box"></div>
            </div>
          </div>
        </div>
      </template>
    </Tui3DPanel>
  </div>
</template>
<style lang="less">
.tui-3d-test-aniUnity-wrap{.poa; inset:50px; 
  .title-desc{text-align: center;  }
  .t3d-panel{.poa;inset:50px;
    .tui-3d-inner{ .bdra(20px);}
  }
  .grid-demo-wrap {.poa; inset:40px; top:50px; .grid(4,3,60px);
    .item{position: relative; padding:20px; 
      // grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
      // &:nth-child(1){ grid-area: 1 / 1 / 3 / 2;}
      // &:nth-child(2){ grid-area: 1 / 4 / 3 / 5;}
    }
  }
  .demo-box{ .poa; inset:0; .bgc(var(--primary-weaker)); .bdra(10px); .bd(var(--primary-base),3px);
    .inner-box{}
  }
}

</style>