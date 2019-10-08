// pages/car_market/car_market.js
var util = require('../../utils/time.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:[],
  },
  chooseimg:function(){
    wx.chooseImage({
      success: res => {
        console.log(res)
        var tempFilePaths = res.tempFilePaths; 

        this.setData({
          tempFilePaths: tempFilePaths
        })
      }
    })
  },
  feedback: function (e) {
    var secondCar_info = {};
    let info = wx.getStorageInfoSync("info");
    var declare_date = util.formatTime(new Date());
    secondCar_info.car_type = e.detail.value.car_type;//车型
    secondCar_info.buy_date = e.detail.value.buy_date;//购买日期
    secondCar_info.mileage = e.detail.value.mileage;//表显里程
    secondCar_info.motor_state = e.detail.value.motor_state;//发动状态
    secondCar_info.decorate_state = e.detail.value.decorate_state;//内饰状态
    secondCar_info.price = e.detail.value.price;//售价
    secondCar_info.car_address = e.detail.value.car_address;//看车地址
    secondCar_info.phone = e.detail.value.phone;//联系电话
    secondCar_info.remarks = e.detail.value.remarks;//车主说明
    secondCar_info.src = info.avatarImg;//头像
    secondCar_info.openid = wx.getStorageSync('openid');//用户openid
    secondCar_info.declare_date = declare_date;//发布日期

    secondCar_info.tempFilePaths = this.data.tempFilePaths;//发布者上传的照片数组
    console.log(secondCar_info);
    if (secondCar_info.car_type == '' || secondCar_info.buy_date == '' || secondCar_info.mileage == '' || secondCar_info.remarks == '' || secondCar_info.motor_state == '' || secondCar_info.decorate_state == '' || secondCar_info.price == '' || secondCar_info.car_address == '' || secondCar_info.phone == '') {
      wx.showModal({
        title: '提示',
        content: '必须要完成所有信息的填写才能进行提交！',
      })
    } else {
      wx.request({
        url: 'http://localhost:8080/user/feedback',
        data: secondCar_info,
        method: 'POST',
        dataType: "json",
        header: {
          'content-type': 'application/json;charset=utf-8'
        },
        success: res => {
          wx.showModal({
            title: '提示',
            content: '提交成功！',
            showCancel: false,
            success: function (res) {
              wx.navigateBack({})
            }
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})