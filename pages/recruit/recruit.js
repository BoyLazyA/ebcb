var part_job = require('../../utils/part_job.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    joblist: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  gotodetails: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../partWorkDetail/partWorkDetail?id=' + id,
    })
  },
  onLoad: function (options) {
    let list = part_job.getJobList();
    this.setData({
      joblist: list
    })
  },
  handleitemclick(event) {
    console.log(event)
    this.setData({
      currentData: event.detail.index
    })
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