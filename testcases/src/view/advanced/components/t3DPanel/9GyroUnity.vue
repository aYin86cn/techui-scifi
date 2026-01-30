
<template>
  <div class="tui-3d-test-gyroUnity-wrap">
    <div class="title-desc">陀螺仪模式</div>
    <Tui3DPanel v-bind="tui3DConfig" class="t3d-panel">
      <template #default="parmas">
        <div class="grid-demo-wrap">
          <div class="item" :class="parmas?.boxShadowName" v-for="(item,index) in 15">
              <div class="demo-box">
                <div class="inner-box"></div>
              </div>
          </div>
        </div>
      </template>
    </Tui3DPanel>
  </div>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      tui3DConfig:{
        mode:"gyro",
        showShadow:true,
        eventBus:true,
        coeff:.3,
        shadowCoeff:3,
        thicknessCoeff:1.5,
        // thicknessCoeff:.8,
      },
    };
  },
  components: {
  },
  computed: {
    
  },
  watch:{
  },
  methods: {
  },
  mounted() {
  },
};
</script> 
<style lang="less">
.tui-3d-test-gyroUnity-wrap{.poa; inset:50px; 
  .title-desc{text-align: center; }
  .t3d-panel{.poa; inset:50px; }
  .demo-box{ .poa; inset:0; .bgc(var(--primary-weaker)); .bdra(10px); .bd(var(--primary-base),3px);
    .inner-box{}
  }
  .grid-demo-wrap {.poa; inset:40px;.grid(5,3,60px);
    //grid-auto-rows: minmax(100px, 200px);
    .item{position: relative; padding:20px; .bdra(10px);
      
    }
  }
  
}

</style>