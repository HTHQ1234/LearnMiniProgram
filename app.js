const TOKEN = 'token'

App({
  // 对象：小程序关闭掉直接就销毁了
  globalData:{
    token:''
  },
  onLaunch: function () {
    // 1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    // 2.判定token是否有值
    if(token && token.length !== 0 ){ // 已经有token
      // 验证token是否过期
      this.check_token(token);
    }else{ // 没有token，进行登录操作
      this.login();
    }
    },
    login(){
      console.log('执行了登录操作');
      // 登录操作
      wx.login({
        success:(res)=>{
          // 1.获取code
          const code = res.code;
  
          // 2.将code发送给我们的服务器
          wx.request({
            url:'http://123.207.32.32:3000/login',
            method:'post',
            data:{
              code
            },
            success:(res)=>{
              // 1.取出token
              const token = res.data.token;
  
              // 2.将token保存在gobalData中
              this.globalData.token = token;
  
              // 3.进行本地存储
              // setStorageSync是同步操作
              wx.setStorageSync(TOKEN, token)
            }
          })
        }
      })
    },
    check_token(token){
      console.log('执行了验证操作');
      wx.request({
        url: 'http://123.207.32.32:3000/auth',
        method:'post',
        header:{
          token
        },
        success:(res)=>{
          if(!res.data.errCode){
            this.globalData.token = token;
          }else{
            this.login();
          }
        },
        fail:function(err){
          console.log(err)
        }
      })
    }
})
