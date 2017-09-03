//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    TodoList:{},
    red:[],
    orange:[],
    blue:[],
    green:[],
    colorList:[],
    changeColor:"#fcc",
    sendColor:"red"
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
    // 换title
    wx.setNavigationBarTitle({
      title: 'TodoList'
    })
    // 换颜色
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#fcc',
      animation: {
        duration: 500,
        timingFunc: 'linear'
      }
    })
      var that=this;
      var compare = function (obj1, obj2) {
        var val1 = obj1.todotime;
        var val2 = obj2.todotime;
        var val3 = obj1.tododate;
        var val4 = obj2.tododate;
        if (val3 + val1 < val4 + val2) {
          return -1;
        } else if (val3 + val1 > val4 + val2) {
          return 1;
        } else {
          return 0;
        }
      };
      
      // wx.showLoading({
      //   title: '加载中',
      // })
      var value = wx.getStorageSync("todolist");
      if (value) {
        that.setData({
          TodoList:value,
        })
        if (value.red !== undefined) {
          var arr= value.red.sort(compare)
          that.setData({
            red: arr,
          })
          var arr1 = that.data.red;
          var arr2 = that.data.TodoList;
          arr2.red = arr1
          that.setData({
            TodoList: arr2,
          })
          console.log(this.data.red + " tr1");
        }
        // 橙色
        if (value.orange !== undefined) {
          var arr = value.orange.sort(compare)
          that.setData({
            orange: arr,
          })
          var arr1 = that.data.orange;
          var arr2 = that.data.TodoList;
          arr2.orange = arr1
          that.setData({
            TodoList: arr2,
          })
          console.log(this.data.orange + " to1");
        }
        // 蓝色
        if (value.blue !== undefined) {
          var arr = value.blue.sort(compare)
          that.setData({
            blue: arr,
          })
          var arr1 = that.data.blue;
          var arr2 = that.data.TodoList;
          arr2.blue = arr1
          that.setData({
            TodoList: arr2,
          })
          console.log(this.data.blue + " tb1");
        }
        // 绿色
        if (value.green !== undefined) {
          var arr = value.green.sort(compare)
          that.setData({
            green: arr,
          })
          var arr1 = that.data.green;
          var arr2 = that.data.TodoList;
          arr2.green = arr1
          that.setData({
            TodoList: arr2,
          })
          console.log(this.data.green + " tg1");
        }
      }//if结束
      wx.setStorage({
        key: 'todolist',
        data: that.data.TodoList,
      })
      that.setData({
        colorList:that.data.red,
        changeColor:"#fcc",
        sendColor:"red"
      })
      
      // setTimeout(function () {
      //   wx.hideLoading()
      // }, 1000)
  },//onshow over

  toRed:function(){
    this.setData({
      colorList:this.data.red,
      changeColor:"#fcc",
      sendColor:"red"
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#fcc',
      animation: {
        duration: 500,
        timingFunc: 'linear'
      }
    })
  },
  toOrange:function(){
    this.setData({
      colorList:this.data.orange,
      changeColor: "#ffc",
      sendColor: "orange"
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffc',
      animation: {
        duration: 500,
        timingFunc: 'linear'
      }
    })
  },
  toBlue: function () {
    this.setData({
      colorList: this.data.blue,
      changeColor:"#cff",
      sendColor: "blue"
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#cff',
      animation: {
        duration: 500,
        timingFunc: 'linear'
      }
    })
  },
  toGreen: function () {
    this.setData({
      colorList: this.data.green,
      changeColor: "#cf9",
      sendColor: "green"
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#cf9',
      animation: {
        duration: 500,
        timingFunc: 'linear'
      }
    })
  },
  listClick:function(e){
    var detail = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset);
    wx.setStorage({
      key: 'todoDetail',
      data: detail,
    })
    wx.navigateTo({
      url: '/pages/todo/todo',
    })
  }
  
})
