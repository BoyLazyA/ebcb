// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData:0,
    swiperim: ["../../img/swiper.png", "../../img/swiper.png", "../../img/swiper.png", "../../img/swiper.png"],
    find_person:[{
      phone:"15983373359",
      start_time:"09-27-下午",
      start_address:"峨边县政府",
      end_address:"成都东站",
      num_seats:5,
      driver_name:"天下第一车",
      driver_img:"../../img/g3.jpg",
      remarks:"车上无异味，可带小件货"
    }],
  },
  intopartjob: function (e) {
    switch (e.target.dataset.current) {
      case '1':
        wx.navigateTo({
          url: '../others/others',
        });
        break;
      case '2':
        wx.navigateTo({
          url: '../market/market',
        });
        break;
      case '3':
        wx.navigateTo({
          url: '../driving_school/driving_school',
        });
        break;
      case '4':
        wx.navigateTo({
          url: '../recruit/recruit',
        });
        break;
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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