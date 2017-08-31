//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    date:"",
    time:"",
    inputvalue:"",
    textareavalue:"",
    TodoList:{},
    red:[],
    orange:[],
    blue:[],
    green:[],
    pickerInfo1:"请点我选择",
    pickerInfo2:"请点我选择",
    pickerStyle1:"display:inline-block;border:1px solid lightblue;border-radius:7px;width:25vw;background:lightblue;height:3vh;line-height:3vh;font-weight:bold",
    pickerStyle2: "display:inline-block;border:1px solid lightblue;border-radius:7px;width:25vw;background:lightblue;height:3vh;line-height:3vh;font-weight:bold",
    inputTitleStyle:"",
    textareaTitleStyle:"",
  },

  // 加载时完成
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    }),
    console.log(this.data.red)
    // 异步获取缓存
    // wx.getStorage({
    //     key: 'todolist',
    //     success: function (res) {
    //         console.log(res.data.red)
    //         console.log(res.data.orange)
    //         console.log(res.data.blue)
    //         console.log(res.data.green)
    //         // 红色
    //         if (res.data.red !== undefined) {
    //           that.setData({
    //             red: res.data.red,
    //           })
    //           console.log(that.data.red + " r1");
    //         }
    //         // 橙色
    //         if (res.data.orange !== undefined) {
    //           that.setData({
    //             orange: res.data.orange,
    //           })
    //           console.log(that.data.orange + " o1");
    //         }
    //         // 蓝色
    //         if (res.data.blue !== undefined) {
    //           that.setData({
    //             blue: res.data.blue,
    //           })
    //           console.log(that.data.blue + " b1");
    //         }
    //         // 绿色
    //         if (res.data.green !== undefined) {
    //           that.setData({
    //             green: res.data.green,
    //           })
    //           console.log(that.data.green + " g1");
    //         } 
            
    //         console.log(that.data.red)
    //         console.log(that.data.orange)
    //         console.log(that.data.blue)
    //         console.log(that.data.green)
    //     }
    // })
  },
  // 显示时调用
  onShow: function () {
    console.log("onShow")
    var that = this;
    console.log(this.data.red + " red");
    
    var value = wx.getStorageSync("todolist");
    console.log(value.red)
    console.log(value.orange)
    console.log(value.blue)
    console.log(value.green)
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
  },//onshow over
//   获取日期
  bindDateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          date: e.detail.value,
          pickerInfo1:"您的选择是:",
          pickerStyle1:"",
      })
  },
//   获取时间
  bindTimeChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          time: e.detail.value,
          pickerInfo2: "您的选择是:",
          pickerStyle2: "",
      })
  },
//   获取标题
  getInput:function(e){
      var that=this;
      if (e.detail.value.length!=0){
        this.setData({
            inputvalue: e.detail.value,
            inputTitleStyle: "",
        })
      }else{
        var i=0;
        var timer=setInterval(function(){
            i++;
            if(i%2!=0){
                that.setData({
                    inputTitleStyle:"color:red"
                })
            }else{
                that.setData({
                    inputTitleStyle: ""
                })
            };
            if(i==5){
                clearInterval(timer);
                timer=null;
            }
        },500)
      }
  },
//   获取内容
  getTextarea:function(e){
      var that = this;
      if (e.detail.value.length != 0) {
          this.setData({
              textareavalue: e.detail.value,
              textareaTitleStyle: "",
          })
      } else {
          var i = 0;
          var timer = setInterval(function () {
              i++;
              if (i % 2 != 0) {
                  that.setData({
                      textareaTitleStyle: "color:red"
                  })
              } else {
                  that.setData({
                      textareaTitleStyle: ""
                  })
              };
              if (i == 5) {
                  clearInterval(timer);
                  timer = null;
              }
          }, 500)
      }
  },
//   获取重要程度
  radioChange:function(e){
    var color=e.detail.value;
    this.setData({
        TodoColor:color,
    })
  },
  //提交按钮
  submitClick:function(){
    var that= this;
    var color=this.data.TodoColor;
    var title=this.data.inputvalue;
    var content=this.data.textareavalue;
    var tododate=this.data.date;
    var todotime=this.data.time;
    var obj = {
        "title": title,
        "content": content,
        "tododate": tododate,
        "todotime": todotime
    }
    // 红色
    if(color=="red"){
        console.log(that.data.red);
        var arr=that.data.red;
        arr.push(obj);
        this.setData({
            red:arr,
        })
        var arr1=this.data.red;
        var arr2=this.data.TodoList;
        arr2.red=arr1
        this.setData({
           TodoList:arr2,
        })
    // 橙色
    } else if (color == "orange"){
        
        var arr = that.data.orange;
        arr.push(obj);
        this.setData({
            orange: arr,
        })
        var arr1 = this.data.orange;
        var arr2 = this.data.TodoList;
        arr2.orange= arr1
        this.setData({
            TodoList: arr2,
        })
    // 蓝色
    } else if (color == "blue"){
       
        var arr = that.data.blue;
        arr.push(obj);
        this.setData({
            blue: arr,
        })
        var arr1 = this.data.blue;
        var arr2 = this.data.TodoList;
        arr2.blue= arr1
        this.setData({
            TodoList: arr2,
        })
        // 绿色
    } else if (color == "green"){
        
        var arr = that.data.green;
        arr.push(obj);
        this.setData({
            green: arr,
        })
        var arr1 = this.data.green;
        var arr2 = this.data.TodoList;
        arr2.green = arr1
        this.setData({
            TodoList: arr2,
        })
        
    }
    console.log(that.data.TodoList);
    wx.setStorage({
      key:'todolist',
      data:that.data.TodoList,
      success:function(){console.log("success")},
      fail:function(){console.log("fail")},
      complete:function(){console.log("complete")}
      })
      wx.switchTab({
          url: '/pages/todolist/todolist',
      })
  }//pages end


})
