// pages/driver_details/driver_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sign:'1',
    swiperim: ["../../img/swiper.png", "../../img/swiper.png", "../../img/swiper.png", "../../img/swiper.png"],
  },
  callphone:function(){
    wx.makePhoneCall({
      phoneNumber: '15983373359',
    })
  },
  addfavorite:function(){
    const mytab = this.selectComponent('.addfavor')
    mytab.setData({
      isAdd:mytab.data.isAdd + 1
    })
  },
  toinform:function(){
    console.log("举报")
  },
  toshare:function(){
    console.log('分享')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})