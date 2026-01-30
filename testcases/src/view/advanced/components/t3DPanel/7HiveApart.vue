<script setup>
const tui3DItem=[
  {label:"left"},
  {label:"right"},
  {label:"middleTL"},
  {label:"middleTR"},
  {label:"middleBL"},
  {label:"middleBR"},
]
const getT3DConfig=(item)=>{
  let config={
    mode:"hive",
    showShadow:true,
    shadowCoeff:1,
    thicknessCoeff:.5,
    shadowTransparent:1,
    coeff:1,
  }
  switch (item.label) {
    case "left":
      config.eventBus=true
      config.transformOrigin="right top"
      config.shadowCoeff=2
      config.thicknessCoeff=1
      config.coeff=.3
      break;
    case "right":
      config.transformOrigin="left bottom"
      config.shadowBlur=100
      config.coeff=.3    
      break;
    case "middleTL":
      config.transformOrigin="top"
      config.shadowTransparent=.5
      break;
    case "middleTR":
      config.transformOrigin="top"
      config.shadowTransparent=.1
      break;
    case "middleBL":
      config.transformOrigin="bottom"
      break;
    case "middleBR":
      config.transformOrigin="bottom"
      break;
    default:
      break;
  }
  return config
}
</script>
<template>
  <div class="tui-3d-test-hover-wrap">
    <div class="title-desc">蜂巢独立模式，所有Item是单独配置的参数，变形轴，参数，阴影等。（矩阵模式也可以这样单独配置参数）</div>
    <div class="grid-demo-wrap">
      <div class="item" v-for="(item,index) in tui3DItem">
        <Tui3DPanel v-bind="getT3DConfig(item)" :class="item.label" class="t3d-panel">
          <template v-slot="parmas">
            <div :class="`demo-box ${parmas?.boxShadowName}`">
              <div class="inner-box"></div>
            </div>
          </template>
        </Tui3DPanel>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.tui-3d-test-hover-wrap{.poa; inset:30px; 
  .title-desc{text-align: center;  }
  .grid-demo-wrap {.poa; inset:70px; top:120px; .grid(4,2,100px);
    .item{position: relative; padding:20px; 
      .t3d-panel{.poa;inset:0;
        .tui-3d-inner{ .bdra(20px);}
      }
      // grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
      &:nth-child(1){ grid-area: 1 / 1 / 3 / 2;}
      &:nth-child(2){ grid-area: 1 / 4 / 3 / 5;}
    }
  }
  .demo-box{ .poa; inset:0; .bgc(var(--primary-weaker)); .bdra(10px); .bd(var(--primary-base),3px);
    .inner-box{}
  }
}

</style>