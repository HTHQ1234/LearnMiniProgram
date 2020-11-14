// pages/wxml/wxml.js
Page({
  data:{
    message:'你好小程序',
    firstname:'kobe',
    lastname:'bryant',
    age:12,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:98,
    movies:['星际穿越','盗梦空间','大话西游'],
    nums:[[10,14,11,18],[20,24,31,48],[110,124,211,318]],
    letters:['a','b','c']
  },
  onLoad(){
    setInterval(() => {
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    }, 1000);
    setTimeout(() => {
      this.setData({
        score:Math.round(Math.random()*100)
      })
    }, 1000);
  },
  changColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  numberToFixed(value){
    return value.toFixed(2)
  }
})