// pages/input/input.js
Page({
  handleInput(event){
    console.log('用户输入东西',event)
  },
  handleFocus(event){
    console.log('获得焦点',event)
  },
  handleBlur(event){
    console.log('失去焦点',event)
  }
})