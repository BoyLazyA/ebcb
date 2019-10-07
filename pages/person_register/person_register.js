// pages/person_register/person_register.js
var util = require('../../utils/time.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: [{
      id_front: '',
      id_reverse: ''
    }],
    register_date: ''
  },
  chooseimg: function (e) {
    switch (e.currentTarget.dataset.current) {
      case '1':
        wx.chooseImage({
          count: 1,
          success: res => {
            console.log(res)
            var tempFilePaths = res.tempFilePaths;

            this.setData({
              'tempFilePaths[0].id_front': tempFilePaths
            })
          }
        })
        break;
      case '2':
        wx.chooseImage({
          count: 1,
          success: res => {
            console.log(res)
            var tempFilePaths = res.tempFilePaths;

            this.setData({
              'tempFilePaths[0].id_reverse': tempFilePaths
            })
          }
        })
        break;
    }
  },
  feedback: function (e) {
    let that = this;
    let person_info = {};
    var time = util.formatTime(new Date());
    this.setData({
      register_date: time
    })
    console.log(e);
    wx.getSystemInfo({
      success: function (res) {
        person_info.name = e.detail.value.person_name;//用户姓名
        person_info.phonenum = e.detail.value.person_phone;//用户电话
        person_info.person_address = e.detail.value.person_address;//用户地址
        person_info.id_front = that.data.tempFilePaths[0].id_front;//身份证正面
        person_info.id_reverse = that.data.tempFilePaths[0].id_reverse;//身份证反面
        person_info.openid = wx.getStorageSync('openid');//用户openid
        person_info.register_date = that.data.register_date;//用户平台注册时间
        //***后台需要在审核通过之后添加一个标记表示此用户已经认证，或者存下用户openID为已认证的凭据

        if (person_info.name == '' || person_info.phonenum == '' || person_info.person_address == '' || person_info.id_front == '' || person_info.id_reverse == '') {
          wx.showModal({
            title: '提示',
            content: '必须要完成所有信息的填写才能进行提交！',
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/user/feedback',
            data: person_info,
            method: 'POST',
            dataType: "json",
            header: {
              'content-type': 'application/json;charset=utf-8'
            },
            success: res => {
              wx.showModal({
                title: '提交成功',
                content: '请您等待审核！',
                showCancel: false,
                success: function (res) {
                  wx.navigateBack({})
                }
              })
            }
          })
        }

      },
    })
  },
  comeback:function(){
    wx.navigateBack({
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})