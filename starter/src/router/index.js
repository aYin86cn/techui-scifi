import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes :[
    { 
      path: "/", 
      name: "index", 
      redirect:"/layoutA",
    },
    { 
      path: "/layoutA", 
      name: "layoutA", 
      component:()=>import("../view/layoutA.vue"),
      meta: { order:1 }
    },
    { 
      path: "/layoutB", 
      name: "layoutB", 
      component:()=>import("../view/layoutB.vue"),
      meta: { order:2 }
    },
  ]
});

export default router;