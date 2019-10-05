// pages/Release/Release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  gotorelease:function(e){
    switch (e.currentTarget.dataset.current){
      case '1':
        wx.navigateTo({
          url: '../seek_customer/seek_customer',
        });
        break;
      case '2':
        wx.navigateTo({
          url: '../find_car/find_car',
        });
        break;
      case '3':
        wx.navigateTo({
          url: '../car_market/car_market',
        });
        break;
      case '4':
        wx.navigateTo({
          url: '../car_parts/car_parts',
        });
        break;
      case '5':
        wx.navigateTo({
          url: '../recruitment/recruitment',
        });
        break;
      case '6':
        wx.navigateTo({
          url: '../apply_job/apply_job',
        });
        break;
    }
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