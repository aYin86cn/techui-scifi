// import * as echarts from 'echarts';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import TechUIInit from "@techui/scifi";

//浅蓝 主题
import "@techui/themes/lightBlue";
//深蓝 主题
import "@techui/themes/darkBlue";
//黑色 主题
import "@techui/themes/darkBlack";

const app = createApp(App);
const params={
  app,
  debug:true,
  // features:{
  //   echarts,
  //   advanced:true,
  // }
}
TechUIInit(params).then(()=>{
  app.use(router)
  app.mount('#app')
})