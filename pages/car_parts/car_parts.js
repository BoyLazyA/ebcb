// pages/car_parts/car_parts.js
var util = require('../../utils/time.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: [],
  },
  chooseimg: function () {
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
    var secondPart_info = {};
    let info = wx.getStorageInfoSync("info");
    var declare_date = util.formatTime(new Date());
    secondPart_info.part_name = e.detail.value.part_name;//零件名称
    secondPart_info.buy_date = e.detail.value.buy_date;//购买日期
    secondPart_info.car_part = e.detail.value.car_part;//原属车型
    secondPart_info.part_type = e.detail.value.part_type;//零件类型
    secondPart_info.price = e.detail.value.price;//售价
    secondPart_info.part_address = e.detail.value.part_address;//地址
    secondPart_info.phone = e.detail.value.phone;//联系电话
    secondPart_info.remarks = e.detail.value.remarks;//车主说明
    secondPart_info.src = info.avatarImg;//头像
    secondPart_info.openid = wx.getStorageSync('openid');//用户openid
    secondPart_info.declare_date = declare_date;//发布日期

    secondPart_info.tempFilePaths = this.data.tempFilePaths;//发布者上传的照片数组
    console.log(secondPart_info);
    if (secondPart_info.car_type == '' || secondPart_info.buy_date == '' || secondPart_info.mileage == '' || secondPart_info.remarks == '' || secondPart_info.motor_state == '' || secondPart_info.decorate_state == '' || secondPart_info.price == '' || secondPart_info.car_address == '' || secondPart_info.phone == '') {
      wx.showModal({
        title: '提示',
        content: '必须要完成所有信息的填写才能进行提交！',
      })
    } else {
      wx.request({
        url: 'http://localhost:8080/user/feedback',
        data: secondPart_info,
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