// pages/car_parts/car_parts.js
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