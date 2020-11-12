App({
  // 生命周期函数：后台存活两个小时
  // 小程序初始化完成时，会执行的生命周期函数
  onLaunch: function () {
    console.log('小程序初始化完成了:onLaunch');
    // 进行一些网络请求
    // wx.request({
    //   url: 'url',
    // });

    // 获取用户信息,这是异步调用
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    setTimeout(()=>{
      const err = new Error();
      throw err;
    },3000)
  },
  // 小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    console.log('界面显示出来')
  },
  onHide: function () {
    console.log('界面被隐藏')
  },
  // 小程序发生错误时执行
  onError: function (msg) {
    console.log('小程序发生错误时执行')
  }
})
