// pages/others/others.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    driver:{
      driver_img: "../../img/g3.jpg",
      name: "大司机",
      phone: "15983373359",
      address: "新林镇金星村",
      car_type: "小车"
    }
  },
  turn:function(){
    wx.navigateTo({
      url: '../driver_details/driver_details',
    });
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