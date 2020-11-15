// pages/home/home.js
import request from '../../service/network.js'

Page({
  data:{

  },
  onLoad:function(options){
    // 1.原生的方式发送网络请求
    this.get_data_origin()
    
    // 2.使用封装的request发送网络请求
    // 使用Promise避免回调地狱
    request({
      url:'http://152.136.185.210:8000/api/w6/recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  get_data_origin(){
    // 发送网络请求
    // 1.发送最简单的get请求
    // wx.request({
    //   url:'http://152.136.185.210:8000/api/w6/recommend',
    //   method:'get',
    //   success:function(res){
    //     console.log(res)
    //   }
    // }),
    // // 2.get请求，但是携带参数
    // wx.request({
    //   url:'http://152.136.185.210:8000/api/w6/home/data',
    //   method:'get',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // }),
    // // 3.post请求，并且携带参数
    // wx.request({
    //   url:'http://httpbin.org/post',
    //   method:'post',
    //   data:{
    //     name:'coderwhy',
    //     age:18
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    }
})