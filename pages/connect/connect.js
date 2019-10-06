// pages/connect/connect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    issue_type: ['功能建议', '手机适配', '系统问题', '其他'],
    index: 0
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  feedback: function(e) {
    let that = this;
    let info = {};
    wx.getSystemInfo({
      success: function(res) {
        info.system = res.system;
        info.model = res.model;
        info.title = e.detail.value.issue_title;
        info.catalogue = that.data.issue_type[e.detail.value.issue_type];
        info.content = e.detail.value.issue_content;
        info.openid = wx.getStorageSync('openid');
        wx.request({
          url: 'http://localhost:8080/user/feedback',
          data:info,
          method: 'POST',
          dataType: "json",
          header: {
            'content-type': 'application/json;charset=utf-8'
          },
          success: res => {
            console.log(res);
            wx.showModal({
              title: '提示',
              content: '提交成功',
              showCancel: false,
              success: function (res) {
                wx.navigateBack({})
              }
            })
          }
        })
      },
    })
  },
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})