// pages/image/image.js
Page({
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    let _this = this;
    // 系统API,让用户在相册中选择图片(或者拍照)
    wx.chooseImage({
      success:function(res){
        // 1.取出路径
        const path = res.tempFilePaths[0];

        // 2.设置imagePath
        _this.setData({
          imagePath:path
        })
      }
    })
  },
  handleImageLoad(){
    console.log('图片加载完成')
  }
})