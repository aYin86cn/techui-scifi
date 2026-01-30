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
    mode:"animation",
    showShadow:true,
    // shadowBlur:3,
    thicknessBlur:2,
    // shadowCoeff:.8,
    thicknessCoeff:.5,
    aniDelay:1,
    duration:3000
  }
  switch (item.label) {
    case "left":
      config.animationRotate=[
        { x:0,y:30, },
        { x:0,y:-30, },
        // { x:0,y:20, },
        // { x:0,y:-20, },
      ]
      // config.rotateMax=180
      // config.rotateMin=-90
      break;
    case "right":
      config.animationRotate=[
        { x:0,y:-10, },
        { x:0,y:10, },
      ]
      break;
    case "middleTL":
      config.animationRotate=[
        { x:-20,y:20, },
        { x:-20,y:-20, },
        { x:20,y:-20, },
        { x:20,y:20, },
      ]
      break;
    case "middleTR":
      config.animationRotate=[
        { x:-20,y:-20, },
        { x:-20,y:20, },
        { x:20,y:20, },
        { x:20,y:-20, },
      ]
      break;
    case "middleBL":
      config.animationRotate=[
        { x:20,y:20, },
        { x:20,y:-20, },
        { x:-20,y:-20, },
        { x:-20,y:20, },
      ]
      break;
    case "middleBR":
      config.animationRotate=[
        { x:20,y:-20, },
        { x:20,y:20, },
        { x:-20,y:20, },
        { x:-20,y:-20, },
      ]
      break;
    default:
      break;
  }
  return config
}
</script>
<template>
  <div class="tui-3d-test-ani-wrap">
    <div class="title-desc">动画模式是静态参数，所有Item是单独配置的参数，变形轴，参数，阴影等。animation参数至少需要2组以上的参数，循环播放</div>
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
.tui-3d-test-ani-wrap{.poa; inset:30px; 
  .title-desc{text-align: center;  }
  .grid-demo-wrap {.poa; inset:70px; top:120px; .grid(4,2,120px);
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