// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '提交中',
      duration:3000,
      icon:'loading',
      mask:true,
      success:function(){
        console.log('展示弹窗成功')
      },
      fail:function(){
        console.log('展示弹窗失败')
      },
      complete:function(){
        console.log('完成函数的调用')
      }
    });
    setTimeout(() => {
      wx.showToast({
        title: '提交成功',
      })
    }, 3000);
  },
  handleShowModal(){
    wx.showModal({
      title:'我是标题',
      content:'我是内容,哈哈哈',
      // showCancel:false,
      cancelText:'退出',
      cancelColor:'red',
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消')
        }else{
          console.log('用户点击了确定')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
    }),
    setTimeout(() => {
      // 必须手动调用hideLoading才会让loading消失
      wx.hideLoading()
    }, 1000);
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'red',
      success:function(res){
        console.log(res);
        switch(res.tapIndex){
          case 0:
            console.log('用户点击了相册');
            break;
          case 1:
            console.log('用户点击了拍照');
            break;
          default:
            console.log('都不是');
            break;
        }
      }
    })
  },
  onShareAppMessage:function(options){
    return{
      title:'你好啊，李银河',
      path:'/pages/about/about',
      imageUrl:'https://imgs.ali213.net/oday/uploadfile/2014/06/16/201461615421877586570.jpg'
    }
  }
})