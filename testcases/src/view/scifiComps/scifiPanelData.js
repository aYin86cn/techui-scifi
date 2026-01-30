export default [
  {name:"Scifi Panels Original",subTitle:"",desc:"由TecUI原创设计开发",children:[
    {component:"ScifiPanelA1",config:{
      title:"正常标题",
      titleWidth:100,
    }},
    {component:"ScifiPanelA1",config:{ }},
    {component:"ScifiPanelA1",config:{
      directionAlt:true
    }},
    
    {component:"ScifiPanelA2",config:{
      title:"正常标题",
      titleWidth:100,
    }},

    {component:"ScifiPanelA3",config:{
      title:"壹号",
    }},

    {component:"ScifiPanelB1",config:{ }},

    {component:"ScifiPanelB2",config:{
      aniDuration:3
    }},
    {component:"ScifiPanelB3",config:{ }},
    {component:"ScifiPanelB4",config:{ }},
  ]},
  
  // ---------------- ScifiPanelA1 
  {name:"ScifiPanelA1",children:[
    {component:"ScifiPanelA1",config:{ }},
    {component:"ScifiPanelA1",config:{
      rotate:'x',
      decorationAlt:true
    }},
    {component:"ScifiPanelA1",config:{
      rotate:'y',
    }},
    {component:"ScifiPanelA1",config:{
      rotate:'z',
      decorationColorAlt:true
    }},
    {component:"ScifiPanelA1",config:{
      title:"正常标题",
      titleWidth:100,
    }},
    {component:"ScifiPanelA1",config:{
      title:"中等长度的标题",
      decorationAlt:true,
      rotate:'x'
    }},
    {component:"ScifiPanelA1",config:{
      title:"这是非常非常长的标题",
      titleWidth:190,
      decorationAlt:true,
      rotate:'y'
    }},
    {component:"ScifiPanelA1",config:{
      title:"正常标题",
      titleWidth:100,
      rotate:'z'
    }},
    
  //---------------- ScifiPanelA1 directionAlt
    {component:"ScifiPanelA1",config:{
      directionAlt:true,
    }},
    {component:"ScifiPanelA1",config:{
      directionAlt:true,
      rotate:'x'
    }},
    {component:"ScifiPanelA1",config:{
      directionAlt:true,
      rotate:'y'
    }},
    {component:"ScifiPanelA1",config:{
      directionAlt:true,
      rotate:'z',
    }},
  //---------------- ScifiPanelA1 directionAlt hasTitle
  {component:"ScifiPanelA1",config:{
      title:"正常标题",
      titleWidth:100,
      directionAlt:true,
    }},
    {component:"ScifiPanelA1",config:{
      title:"中等长度的标题",
      decorationAlt:true,
      directionAlt:true,
      rotate:'x'
    }},
    {component:"ScifiPanelA1",config:{
      title:"这是非常非常长的标题",
      titleWidth:190,
      decorationAlt:true,
      directionAlt:true,
      rotate:'y',
      glow:true,
    }},
    {component:"ScifiPanelA1",config:{
      title:"正常标题",
      titleWidth:100,
      directionAlt:true,
      rotate:'z'
    }},


  //---------------- ScifiPanelA1 other
    {component:"ScifiPanelA1",config:{
      borderWidth:3,
    }},
    {component:"ScifiPanelA1",config:{
      borderd:false,
      backgroundOpacity:.5
    }},
    {component:"ScifiPanelA1",config:{
      title:"正常标题",
      titleWidth:100,
      decoration:false,
      glow:true,
      glowOpacity:1,
    }},
    {component:"ScifiPanelA1",config:{
      directionAlt:true,
      glow:true,
      glowRange:20,
      scale:.9,
      className:"sfp-custom",
    }},
  ]},
  
  //---------------- ScifiPanelA2
  {name:"ScifiPanelA2",children:[
    {component:"ScifiPanelA2",config:{
      title:"正常标题",
      titleWidth:100,
      decorationAlt:true
    }},
    {component:"ScifiPanelA2",config:{
      title:"这是较长的标题",
      titleWidth:150,
      rotate:'x'
    }},
    {component:"ScifiPanelA2",config:{
      title:"短标题",
      titleWidth:80,
      rotate:'y'
    }},
    {component:"ScifiPanelA2",config:{
      title:"这是非常非常长的标题",
      titleWidth:200,
      decoration:false,
      decorationAlt:true,
      rotate:'z',
      decorationColorAlt:true
    }},
    
    //---------------- ScifiPanelA2 directionAlt
    {component:"ScifiPanelA2",config:{
      title:"正常标题",
      titleWidth:100,
      directionAlt:true,
    }},
    {component:"ScifiPanelA2",config:{
      title:"正常标题",
      titleWidth:100,
      directionAlt:true,
      rotate:'y'
    }},
    {component:"ScifiPanelA2",config:{
      title:"正常标题",
      titleWidth:100,
      decoration:false,
      directionAlt:true,
      decorationAlt:true,
      rotate:'x'
    }},
    {component:"ScifiPanelA2",config:{
      title:"正常标题",
      titleWidth:100,
      directionAlt:true,
      rotate:'z'
    }},
    {component:"ScifiPanelA2",config:{
      borderWidth:3,
      title:"正常标题",
      titleWidth:100,
    }},
    {component:"ScifiPanelA2",config:{
      borderd:false,
      title:"正常标题",
      titleWidth:100,
    }},
    {component:"ScifiPanelA2",config:{
      glow:true,
      title:"正常标题",
      titleWidth:100,
      decoration:false,
      backgroundOpacity:.5
    }},
    {component:"ScifiPanelA2",config:{
      glow:true,
      title:"正常标题",
      titleWidth:100,
      decoration:false,
      directionAlt:true,
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelA3
  {name:"ScifiPanelA3",children:[
    {component:"ScifiPanelA3",config:{
      title:"壹号",
    }},
    {component:"ScifiPanelA3",config:{
      title:"贰号",
      rotate:'x'
    }},
    {component:"ScifiPanelA3",config:{
      title:"No.1",
      rotate:'y'
    }},
    {component:"ScifiPanelA3",config:{
      title:"Dog",
      rotate:'z',
      decorationColorAlt:true
    }},
    {component:"ScifiPanelA3",config:{
      borderWidth:3,
      title:"Cat",
    }},
    {component:"ScifiPanelA3",config:{
      borderd:false,
      decoration:false,
      title:"No.1",
      backgroundOpacity:.5
    }},
    {component:"ScifiPanelA3",config:{
      glow:true,
      title:"No.2",
      scale:.9,
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelB1 
  {name:"ScifiPanelB1",children:[
    {component:"ScifiPanelB1",config:{ }},
    {component:"ScifiPanelB1",config:{
      borderWidth:3,
    }},
    {component:"ScifiPanelB1",config:{
      borderd:false,
      backgroundBlur:true,
      decoration:false,
      backgroundOpacity:.5,
    }},
    {component:"ScifiPanelB1",config:{
      glow:true,
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelB2
  {name:"ScifiPanelB2",children:[
    {component:"ScifiPanelB2",config:{
      animation:false,
    }},
    {component:"ScifiPanelB2",config:{
      rotate:'x',
      aniDuration:3,
      decoration:false,
    }},
    
    {component:"ScifiPanelB2",config:{
      borderd:false,
      aniDuration:3,
      borderWidth:3,
      backgroundOpacity:.5,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelB2",config:{
      aniDuration:3,
      glow:true,
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelB3
  {name:"ScifiPanelB3",children:[
    {component:"ScifiPanelB3",config:{ }},
    {component:"ScifiPanelB3",config:{
      rotate:'x',
      borderWidth:3,
      decoration:false,
    }},
    {component:"ScifiPanelB3",config:{
      rotate:'y',
      backgroundOpacity:.5,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelB3",config:{
      rotate:'z',
      decorationAlt:true,
      glow:true,
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelB4
  {name:"ScifiPanelB4",children:[
    {component:"ScifiPanelB4",config:{ }},
    {component:"ScifiPanelB4",config:{
      borderWidth:1,
      decoration:false,
      
    }},
    {component:"ScifiPanelB4",config:{
      borderd:false,
      backgroundOpacity:.5,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelB4",config:{
      glow:true,
      className:"sfp-custom",
      // glowRange:13
    }},
  ]},

  {name:"TuiPanelA1",desc:"built with pure CSS",children:[
    {component:"TuiPanelA1",config:{borderRadius:10 }},
    {component:"TuiPanelA1",config:{
      borderWidth:1,
      backgroundBlur:true,
      angleLength:15,
      angleWeight:3,
      anglePosition:5,
      borderRadius:10,
      borderRadiusFix:4,
      borderWidth:3
    }},
    {component:"TuiPanelA1",config:{
      borderd:false,
      backgroundOpacity:.5,
      backgroundBlur:true,
      borderRadius:10,
    }},
    {component:"TuiPanelA1",config:{
      decoration:false,
      glow:true,
      glowRange:13,
      className:"sfp-custom",
    }},
  ]},
  
  //---------------- Scifi Panel DataV 
  {name:"Scifi Panel DataV",subTitle:"Mod By aYin",desc:"移植自jiaminghi/data-view开源项目，二次开发修改了配置项以及部分外观效果。组件保留了原始命名缩写DV!",children:[
    {component:"ScifiPanelDV1",config:{
      titleWidth:150,
      title:"正常标题",
    }},
    {component:"ScifiPanelDV2",config:{ }},
    {component:"ScifiPanelDV3",config:{ }},
    {component:"ScifiPanelDV4",config:{ }},
    {component:"ScifiPanelDV5",config:{ }},
    {component:"ScifiPanelDV6",config:{ }},
    {component:"ScifiPanelDV7",config:{
      aniDuration:1,
    }},
    {component:"ScifiPanelDV8",config:{
      aniDuration:1,
    }},
    {component:"ScifiPanelDV9",config:{
      aniDuration:5,
    }},
  ]},
  //---------------- ScifiPanelDV1 
  {name:"ScifiPanelDV1",children:[
    {component:"ScifiPanelDV1",config:{
      titleWidth:150,
      title:"正常标题",
    }},
    {component:"ScifiPanelDV1",config:{
      borderWidth:3,
      titleWidth:150,
      title:"正常标题",
      decorationColorAlt:true
    }},
    {component:"ScifiPanelDV1",config:{
      title:"正常标题",
      titleWidth:150,
      borderd:false,
      backgroundOpacity:.5,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelDV1",config:{
      decoration:false,
      glow:true,
      titleWidth:250,
      title:"这是非常非常长的标题",
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelDV2
  {name:"ScifiPanelDV2",children:[
    {component:"ScifiPanelDV2",config:{ }},
    {component:"ScifiPanelDV2",config:{
      borderWidth:3
    }},
    {component:"ScifiPanelDV2",config:{
      borderd:false,
      decoration:false,
      animation:false,
      backgroundOpacity:.5,
    }},
    {component:"ScifiPanelDV2",config:{
      glow:true,
      className:"sfp-custom",
    }},
  ]},
  
  //---------------- ScifiPanelDV3
  {name:"ScifiPanelDV3",children:[
    {component:"ScifiPanelDV3",config:{ }},
    {component:"ScifiPanelDV3",config:{
      borderWidth:3,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelDV3",config:{
      borderd:false,
      backgroundOpacity:.5,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelDV3",config:{
      glow:true,
      decoration:false,
      dotSize:3,
      dotOffset:5,
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelDV4 
  {name:"ScifiPanelDV4",children:[
    {component:"ScifiPanelDV4",config:{ }},
    {component:"ScifiPanelDV4",config:{
      borderWidth:3,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelDV4",config:{
      borderd:false,
      backgroundOpacity:.5,
      dotSize:5,
      dotOffset:5,
      backgroundBlur:true,
      decoration:false,
    }},
    {component:"ScifiPanelDV4",config:{
      glow:true,
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelDV5 
  {name:"ScifiPanelDV5",children:[
    {component:"ScifiPanelDV5",config:{ }},
    {component:"ScifiPanelDV5",config:{
      borderWidth:3,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelDV5",config:{
      backgroundOpacity:.5,
      backgroundBlur:true,
      borderWidth:1,
      decoration:false,
    }},
    {component:"ScifiPanelDV5",config:{
      glow:true,
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelDV6
  {name:"ScifiPanelDV6",children:[
    {component:"ScifiPanelDV6",config:{ }},
    {component:"ScifiPanelDV6",config:{
      borderWidth:3,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelDV6",config:{
      borderd:false,
      decoration:false,
      backgroundOpacity:.5,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelDV6",config:{
      glow:true,
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelDV7
  {name:"ScifiPanelDV7",children:[
    {component:"ScifiPanelDV7",config:{ }},
    {component:"ScifiPanelDV7",config:{
      borderWidth:3,
      animation:false,
    }},
    {component:"ScifiPanelDV7",config:{
      borderd:false,
      backgroundOpacity:.5,
      decoration:false,
      backgroundBlur:true,
    }},
    {component:"ScifiPanelDV7",config:{
      glow:true,
      aniDuration:1,
      className:"sfp-custom",
    }},
  ]},


  //---------------- ScifiPanelDV8
  {name:"ScifiPanelDV8",children:[
    {component:"ScifiPanelDV8",config:{ }},
    {component:"ScifiPanelDV8",config:{
      borderWidth:3,
      rotate:"y",
    }},
    {component:"ScifiPanelDV8",config:{
      borderd:false,
      decoration:false,
      rotate:"x"
    }},
    {component:"ScifiPanelDV8",config:{
      glow:true,
      rotate:"all",
      className:"sfp-custom",
    }},
  ]},

  //---------------- ScifiPanelDV9
  {name:"ScifiPanelDV9",children:[
    {component:"ScifiPanelDV9",config:{ }},
    {component:"ScifiPanelDV9",config:{
      borderWidth:3,
      backgroundBlur:true,        
    }},
    {component:"ScifiPanelDV9",config:{
      borderd:false,
      reverse:true,
      backgroundOpacity:.5,
      backgroundBlur: true
    }},
    {component:"ScifiPanelDV9",config:{
      glow:true,
      aniDuration:3,
      className:"sfp-custom",
    }},
  ]},
]