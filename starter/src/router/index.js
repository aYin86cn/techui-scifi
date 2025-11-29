import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes :[
    { 
      path: "/", 
      name: "demo", 
      component:()=>import("../view/demo.vue") 
    },
  ]
});

export default router;