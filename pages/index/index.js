//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow:function(){
    wx.setNavigationBarTitle({
      title: '提示信息'
    })
  },
  tapJump:function(){
	  wx.switchTab({
          url: '/pages/getinfo/getinfo',
      })
  },
  tapJump2:function(){
	  wx.switchTab({
          url: '/pages/todolist/todolist',
      })
  }
})
