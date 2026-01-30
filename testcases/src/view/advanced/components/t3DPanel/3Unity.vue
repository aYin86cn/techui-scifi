
<template>
  <div class="tui-3d-test-unity-wrap">
    <div class="title-desc">联合模式，只有最外层的面板参与变形，内部Item的阴影实时计算。</div>
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
        mode:"unity",
        showShadow:true,
        eventBus:true,
        coeff:.3,
        shadowCoeff:4,
        thicknessCoeff:2,
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
.tui-3d-test-unity-wrap{.poa; inset:50px; 
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