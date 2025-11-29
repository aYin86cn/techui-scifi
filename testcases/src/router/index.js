import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes :[
    { 
      path: "/", 
      name: "home", 
      component:()=>import("@view/scifi/index.vue") 
    },
  ]
});

export default router;

