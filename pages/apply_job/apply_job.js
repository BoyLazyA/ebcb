// pages/apply_job/apply_job.js
var util = require('../../utils/time.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  feedback: function (e) {
    var apply_info = {};
    let info = wx.getStorageInfoSync("info");
    var declare_date = util.formatTime(new Date());
    apply_info.title = e.detail.value.title;//需求信息标题
    apply_info.phone = e.detail.value.phone;//发布者电话
    apply_info.content = e.detail.value.remarks;//需求内容
    apply_info.src = info.avatarImg;//头像
    apply_info.openid = wx.getStorageSync('openid');//用户openid
    apply_info.declare_date = declare_date;//发布日期
    if (apply_info.title == '' || apply_info.phone == '' || apply_info.content == '') {
      wx.showModal({
        title: '提示',
        content: '必须要完成所有信息的填写才能进行提交！',
      })
    } else {
      wx.request({
        url: 'http://localhost:8080/user/feedback',
        data: apply_info,
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