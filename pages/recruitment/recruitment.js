// pages/recruitment/recruitment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showModal({
      title: '提示',
      content: '发布招聘要由客服审核通过',
      cancelText: '算了',
      confirmText: '确定',
    })
  },

  onShareAppMessage: function () {

  }
})