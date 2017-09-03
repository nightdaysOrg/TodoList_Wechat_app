//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    TodoList: {},
    red: [],
    orange: [],
    green: [],
    blue: [],
    bgColor:"",
    thePageInfo: {},
    getIndex:-100,
    getColor:"",
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    var value = wx.getStorageSync("todolist");
    that.setData({
      TodoList: value,
    })
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

  },      //onLoad结束
  onShow: function () {
    wx.setNavigationBarTitle({
      title: 'Todo详情'
    })
    var that = this;
    var res = wx.getStorageSync('todoDetail')
    console.log(res)
    var i = res.index;
    var scol = res.scolor;
    that.setData({
      getColor:scol,
      getIndex:i
    })
    if(scol=="red"){
      var redArr = that.data.red;
      that.setData({
        bgColor:"#fcc"
      })
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#fcc',
        animation: {
          duration: 500,
          timingFunc: 'linear'
        }
      })
    }
    else if(scol=="orange"){
      var redArr = that.data.orange;
      that.setData({
        bgColor: "#ffc"
      })
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#ffc',
        animation: {
          duration: 500,
          timingFunc: 'linear'
        }
      })
    }
    else if(scol=="blue"){
      var redArr = that.data.blue;
      that.setData({
        bgColor: "#cff"
      })
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#cff',
        animation: {
          duration: 500,
          timingFunc: 'linear'
        }
      })
    }
    else if(scol=="green"){
      var redArr = that.data.green;
      that.setData({
        bgColor: "#cf9"
      })
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#cf9',
        animation: {
          duration: 500,
          timingFunc: 'linear'
        }
      })
    }
    that.setData({
      thePageInfo: redArr[i]
    })
    console.log(that.data.thePageInfo)
  },
  // 点击完成
  completeClick:function(){
    var that=this;
    wx.showModal({
      title: '警告',
      content: '确定已经完成该项Todo?',
      showCancel:true,
      confirmColor:"#000000",
      cancelColor:"#3CC51F",
      success: function (res) {
        if (res.confirm) {

          var i = that.data.getIndex;
          var gcolor = that.data.getColor;
          var tdList = that.data.TodoList;
          console.log(gcolor);
          if (gcolor == "red") {
            var arr = that.data.red;
            arr.splice(i, 1);
            that.setData({
              red: arr
            })
            var arr1 = that.data.red;
            var arr2 = that.data.TodoList;
            arr2.red = arr1
            that.setData({
              TodoList: arr2,
            })
          }
          else if (gcolor == "orange") {
            var arr = that.data.orange;
            arr.splice(i, 1);
            that.setData({
              orange: arr
            })
            var arr1 = that.data.orange;
            var arr2 = that.data.TodoList;
            arr2.orange = arr1
            that.setData({
              TodoList: arr2,
            })
          }
          else if (gcolor == "blue") {
            var arr = that.data.blue;
            arr.splice(i, 1);
            that.setData({
              blue: arr
            })
            var arr1 = that.data.blue;
            var arr2 = that.data.TodoList;
            arr2.blue = arr1
            that.setData({
              TodoList: arr2,
            })
          }
          else if (gcolor == "green") {
            var arr = that.data.green;
            arr.splice(i, 1);
            that.setData({
              green: arr
            })
            var arr1 = that.data.green;
            var arr2 = that.data.TodoList;
            arr2.green = arr1
            that.setData({
              TodoList: arr2,
            })
          }
          wx.setStorage({
            key: 'todolist',
            data: that.data.TodoList,
          })
          wx.switchTab({
            url: '/pages/todolist/todolist',
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    

  },//点击按钮结束
  backClick:function(){
    wx.switchTab({
      url: '/pages/todolist/todolist',
    })
  }
})
