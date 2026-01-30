export default [
  {name:"Scifi Geometry",subTitle:"",desc:"",children:[
    {geomComp:"scifiHexagon",config:{ }},
    {geomComp:"scifiParallelogram",config:{ }},
    {geomComp:"scifiRectangle",config:{ }},
    {geomComp:"scifiTrapezoid",config:{ }},
    {geomComp:"scifiTriangle",config:{ }},
  ]},
  
  //----------------------------------Hexagon
  {name:"Scifi Hexagon",subTitle:"",desc:"",children:[
    {geomComp:"scifiHexagon",config:{
      width:300,
      height:180,
      backgroundOpacity:.5
    }},
    {geomComp:"scifiHexagon",config:{
      width:250,
      height:180,
      decorationAlt:true,
      glow:false,
      decoAltScale:1.03,
      decoAltTransX:5,
      decoAltTransY:3,
    }},
    
    {geomComp:"scifiHexagon",config:{
      width:300,
      height:180,
      decorationAlt:true,
      borderd:false,
      decorationOpacity:.5,
      // backgroundOpacity:.4,
    }},
    
    {geomComp:"scifiHexagon",config:{
      width:300,
      height:150,
      borderWidth:10,
      gradientBackground:true,
      decoration:false
    }},
    //row2
    {geomComp:"scifiHexagon",config:{
      width:180,
      height:180,
      directionAlt:true,
      decorationColorAlt:true,
      glowOpacity:1
    }},
    {geomComp:"scifiHexagon",config:{
      width:180,
      height:180,
      directionAlt:true,
      decorationAlt:true,
      decoAltScale:1.04,
      decoAltTransX:0,
      decoAltTransY:5,
      className:"sfg-custom",
    }},

  ]},


  //----------------------------------Parallelogram
  {name:"Scifi Parallelogram",subTitle:"",desc:"",children:[
    {geomComp:"scifiParallelogram",config:{
      width:300,
      height:120,
    }},
    {geomComp:"scifiParallelogram",config:{
      width:300,
      height:120,
      borderWidth:5,
      decoration:false,
      directionAlt:true,
      glow:false,
    }},
    {geomComp:"scifiParallelogram",config:{
      width:300,
      height:180,
      decorationAlt:true,
      decoAltScale:1.04,
      decoAltTransX:10,
      decoAltTransY:0,
      borderd:false,
      // backgroundOpacity:.4,
    }},
    {geomComp:"scifiParallelogram",config:{
      width:300,
      height:180,
      decorationAlt:true,
      borderWidth:2,
      gradientBackground:true,
      decoration:false,
      directionAlt:true,
    }},
    //row2
    {geomComp:"scifiParallelogram",config:{
      width:300,
      height:120,
      cornerAlt:true,
      decorationOpacity:.5,
    }},
    {geomComp:"scifiParallelogram",config:{
      width:300,
      height:120,
      cornerAlt:true,
      directionAlt:true,
    }},
    {geomComp:"scifiParallelogram",config:{
      width:300,
      height:180,
      decorationAlt:true,
      cornerAlt:true,
      // glow:false,
      // backgroundOpacity:.4,
    }},
    {geomComp:"scifiParallelogram",config:{
      width:300,
      height:180,
      decorationAlt:true,
      cornerAlt:true,
      gradientBackground:true,
      gradientReverse:true,
      directionAlt:true,
      className:"sfg-custom",
    }},
  ]},

  //----------------------------------Rectangle
  {name:"Scifi Rectangle",subTitle:"",desc:"",children:[
    {geomComp:"scifiRectangle",config:{
      width:300,
      height:120,
    }},
    {geomComp:"scifiRectangle",config:{
      width:300,
      height:300,
      glow:false,
    }},
    {geomComp:"scifiRectangle",config:{
      width:300,
      height:180,
      borderWidth:5,
      decoration:false,
      // backgroundOpacity:.4,
    }},
    {geomComp:"scifiRectangle",config:{
      width:300,
      height:180,
      borderd:false,
      gradientBackground:true,
      decorationAlt:true,
    }},
    //row2
    {geomComp:"scifiRectangle",config:{
      width:300,
      height:120,
      cornerAlt:true,
    }},
    {geomComp:"scifiRectangle",config:{
      width:300,
      height:300,
      cornerAlt:true,
      glow:false,
    }},
    {geomComp:"scifiRectangle",config:{
      width:300,
      height:180,
      cornerAlt:true,
      decorationAlt:true,
      borderWidth:5,
      // backgroundOpacity:.4,
    }},
    {geomComp:"scifiRectangle",config:{
      width:300,
      height:180,
      cornerAlt:true,
      borderWidth:2,
      gradientBackground:true,
      decorationAlt:true,
      decoAltScale:1.04,
      decoAltTransX:10,
      decoAltTransY:10,
      borderd:false,
      className:"sfg-custom",
    }},
  ]},

  //----------------------------------Trapezoid
  {name:"Scifi Trapezoid",subTitle:"",desc:"",children:[
    {geomComp:"scifiTrapezoid",config:{
      width:300,
      height:180,
      decorationAlt:true,
    }},
    {geomComp:"scifiTrapezoid",config:{
      width:300,
      height:120,
      glow:false,
      decoration:false
    }},
    {geomComp:"scifiTrapezoid",config:{
      width:300,
      height:180,
      // glow:false,
      borderd:false,
      directionAlt:true,
      
      // backgroundOpacity:.4,
    }},
    {geomComp:"scifiTrapezoid",config:{
      width:300,
      height:180,
      borderWidth:2,
      gradientBackground:true,
      decoration:false,
      directionAlt:true,
      decorationAlt:true,
    }},
    //row2
    {geomComp:"scifiTrapezoid",config:{
      width:300,
      height:180,
      cornerAlt:true,
      backgroundOpacity:.4,
    }},
    {geomComp:"scifiTrapezoid",config:{
      width:300,
      height:120,
      cornerAlt:true,
      glow:false,
    }},
    {geomComp:"scifiTrapezoid",config:{
      width:300,
      height:180,
      cornerAlt:true,
      borderd:false,
      directionAlt:true,
      decorationAlt:true,
      // glow:false,
      // backgroundOpacity:.4,
    }},
    {geomComp:"scifiTrapezoid",config:{
      width:300,
      height:180,
      cornerAlt:true,
      borderWidth:2,
      gradientBackground:true,
      directionAlt:true,
      decorationAlt:true,
      decoAltScale:1.03,
      decoAltTransX:-7,
      decoAltTransY:-7,
      className:"sfg-custom",
    }},
  ]},

  //----------------------------------Triangle
  {name:"Scifi Triangle",subTitle:"",desc:"",children:[
    {geomComp:"scifiTriangle",config:{
      width:300,
      height:180,
      decorationAlt:true,
    }},
    {geomComp:"scifiTriangle",config:{
      width:300,
      height:120,
      glow:false,
      decoration:false
    }},
    {geomComp:"scifiTriangle",config:{
      width:300,
      height:180,
      // glow:false,
      borderd:false,
      directionAlt:true,
      
      // backgroundOpacity:.4,
    }},
    {geomComp:"scifiTriangle",config:{
      width:300,
      height:180,
      borderWidth:2,
      gradientBackground:true,
      decoration:false,
      directionAlt:true,
      decorationAlt:true,
    }},
    //row2
    {geomComp:"scifiTriangle",config:{
      width:300,
      height:180,
      cornerAlt:true,
      backgroundOpacity:.4,
    }},
    {geomComp:"scifiTriangle",config:{
      width:300,
      height:120,
      cornerAlt:true,
      glow:false,
    }},
    {geomComp:"scifiTriangle",config:{
      width:300,
      height:180,
      cornerAlt:true,
      borderd:false,
      directionAlt:true,
      decorationAlt:true,
      // glow:false,
      // backgroundOpacity:.4,
    }},
    {geomComp:"scifiTriangle",config:{
      width:300,
      height:180,
      cornerAlt:true,
      borderWidth:2,
      gradientBackground:true,
      directionAlt:true,
      decorationAlt:true,
      decoAltScale:1.03,
      decoAltTransX:-7,
      decoAltTransY:-7,
      className:"sfg-custom",
    }},
  ]},
]