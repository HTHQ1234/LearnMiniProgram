// 注册一个小程序示例
App({
  // 小程序初始化完成时调用
  onLaunch: function (options) {
    // 网络请求，一般不在当前文件下做
    // 获取用户信息
    console.log(options)
  },
  // 小程序显示出来时调用
  onShow: function (options) {
    // 1.判断小程序的进入场景
    console.log(options)
    //对象里面的scene属性的值表明了进入场景
    switch(options.scene){
      case 1001:
        console.log('进入场景为1001');
        break;
      default:
        console.log('识别不了的进入场景');
        break;
    }

    // 2.获取用户的信息，并且获取到用户信息后，将用户的信息传递给服务器
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
  },
  // 小程序被隐藏时调用
  onHide: function () {
    
  },
  // 小程序发生错误时调用
  onError: function (msg) {
    
  },
  globalData:{
    name:'coderwhy',
    age:18
  }
})
