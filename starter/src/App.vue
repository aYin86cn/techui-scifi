<script setup>
import { getCurrentInstance, onMounted, reactive } from "vue";
const {proxy:{$tState,$tService}}=getCurrentInstance();

const state=reactive({ })

onMounted(() => { })
</script>

<template>
  <TuiProvider>
    <router-view></router-view>
  </TuiProvider>
</template>

<style lang="less">
</style>
