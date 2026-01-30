<script setup>
import { $c } from "@techui/colors";
import { reactive } from 'vue';
const state=reactive({
  colors:[$c.rel5,$c.orl5,$c.yel5,$c.grl5,$c.cyl5,$c.bll5,$c.inl5,$c.pul5,],
  currentColor:0,
})
</script>
<template>
  <div class="color-grid">
    <div @click="state.currentColor=index" :class="`item-color ${state.currentColor==index?'is-active':''}`" :style="`background-color:${item}`" v-for="(item,index) in state.colors"></div>
  </div>
</template>
<style lang="less">
.color-grid{.flex(10px); flex-wrap: wrap;
  .item-color{flex:1; min-width:30px; height:30px; opacity: .3; cursor: pointer; .bdra(5px); 
    &.is-active{opacity: 1;}
  }
}
</style>
