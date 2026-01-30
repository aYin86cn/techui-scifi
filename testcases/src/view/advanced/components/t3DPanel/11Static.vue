
<template>
  <div class="tui-3d-test-matrix-wrap">
    <div class="title-desc">矩阵模式, 所有面板的变形效果都一样，所有参数都是通用的，面板通过v-for循环</div>
    <div class="grid-demo-wrap">
      <div class="item" v-for="(item,index) in 15">
        <Tui3DPanel v-bind="tui3DConfig" :index="index" class="t3d-panel">
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
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      tui3DConfig:{
        mode:"static",
        showShadow:false,
        // shadowCoeff:2,
        // showThickness:false,
        coeff:2,
        // rotateMax:70,
        // rotateMin:-70,
        initialRotate:{x:20,y:20,z:10},
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
.tui-3d-test-matrix-wrap{.poa; inset:30px; 
  .title-desc{text-align: center;  }
  .demo-box{ .poa; inset:0; .bgc(var(--primary-weaker)); .bdra(10px); .bd(var(--primary-base),3px);
    .inner-box{}
  }
  .grid-demo-wrap {.poa; inset:40px; top:50px; .grid(5,3,60px);
    .item{position: relative; padding:20px; 
      .t3d-panel{.poa;inset:0;
        .tui-3d-inner{ .bdra(20px);}
      }
    }
  }
  
}

</style>