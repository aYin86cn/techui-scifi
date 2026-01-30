import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes :[
    { 
      path: "/", 
      name: "home", 
      component:()=>import("@view/index.vue"),
      meta: { order:0 }
    },
    { 
      path: "/demoLayout", 
      name: "demoLayout", 
      redirect:"/demoLayout/layoutA",
      component:()=>import("@view/layout/index.vue"),
      children:[
        { 
          path: "layoutA", 
          name: "layoutA", 
          component:()=>import("@view/layout/layoutA.vue"),
          meta: { order:1 }
        },
        { 
          path: "layoutB", 
          name: "layoutB", 
          component:()=>import("@view/layout/layoutB.vue"),
          meta: { order:2 }
        },
      ] 
    },
  ]
});

export default router;

