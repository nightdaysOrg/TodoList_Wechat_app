//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    red:[],
    orange:[],
    blue:[],
    green:[],
    colorList:[],
    changeColor:"pink"
  },
  //事件处理函数,加载时调用
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
  // 显示时调用
  onShow:function(){
      var that=this;
      
      wx.showLoading({
        title: '加载中',
      })
      var value = wx.getStorageSync("todolist");
      if (value) {
        if (value.red !== undefined) {
          that.setData({
            red: value.red,
          })
          console.log(this.data.red + " tr1");
        }
        // 橙色
        if (value.orange !== undefined) {
          that.setData({
            orange: value.orange,
          })
          console.log(this.data.orange + " to1");
        }
        // 蓝色
        if (value.blue !== undefined) {
          that.setData({
            blue: value.blue,
          })
          console.log(this.data.blue + " tb1");
        }
        // 绿色
        if (value.green !== undefined) {
          that.setData({
            green: value.green,
          })
          console.log(this.data.green + " tg1");
        }
      }//if结束
      that.setData({
        colorList:that.data.red,
        changeColor:"pink"
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 500)
  },//onshow over

  toRed:function(){
    this.setData({
      colorList:this.data.red,
      changeColor:"pink"
    })
    console.log("!")
  },
  toOrange:function(){
    this.setData({
      colorList:this.data.orange,
      changeColor: "#ffc"
    })
    console.log("!")
  },
  toBlue: function () {
    this.setData({
      colorList: this.data.blue,
      changeColor:"#cff"
    })
    console.log("!")
  },
  toGreen: function () {
    this.setData({
      colorList: this.data.green,
      changeColor: "#cf9"
    })
    console.log("!")
  }
  
})
