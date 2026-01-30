
<template>
  <div class="tui-3d-test-gyro-wrap">
    <div class="title-desc">
      <p>陀螺仪模式，通过调用移动设备的陀螺仪来让Panel元素3D化，当前为独立模式，每个item均被一个tui3D面板包裹，可以独立配置参数。</p>
      <p>需要Https并在移动端设备访问，也可以通过浏览器调试工具中的仿真模拟进行测试</p>
    </div>
    <div class="grid-demo-wrap">
      <Tui3DPanel v-bind="tui3DConfig" class="t3d-panel" v-for="(item,index) in 15" :index="index">
        <template #default="parmas">
            <div class="item" :class="parmas?.boxShadowName" >
              <div class="demo-box">
                <div class="inner-box"></div>
              </div>
            </div>
        </template>
      </Tui3DPanel>
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
        mode:"gyro",
        // uesAlpha:true,
        // fixAlpha:90,
        showShadow:true,
        eventBus:true,
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
.tui-3d-test-gyro-wrap{.poa; inset:50px; 
  .title-desc{text-align: center; .poa;top:-30px; left:50%; .fixc("x"); width:80%;}
  .t3d-panel{}
  .demo-box{ .poa; inset:0; .bgc(var(--primary-weaker)); .bdra(10px); .bd(var(--primary-base),3px);
    .inner-box{}
  }
  .grid-demo-wrap {.poa; inset:40px;.grid(5,3,60px);
    //grid-auto-rows: minmax(100px, 200px);
    .item{position: relative; padding:20px; .bdra(10px); height:100%;
      
    }
  }
  
}

</style>