import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import globalComps from './components/index.js';

import TechUIInit from "@techui/scifi/index.js";

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
  //   echarts:true,
  //   advanced:true,
  // }
}
TechUIInit(params).then(()=>{
  // app.use(locales)
  app.use(router)
  app.use(store)
  app.use(globalComps)
  app.mount('#app')
})