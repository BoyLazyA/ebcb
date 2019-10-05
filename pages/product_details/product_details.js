// pages/product_details/product_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperim: ["../../img/swiper.png", "../../img/swiper.png", "../../img/swiper.png", "../../img/swiper.png"],
    one:"",
    two:'',
    three:'',
    four:''

  },
  callphone: function () {
    wx.makePhoneCall({
      phoneNumber: '15983373359',
    })
  },
  previewimg:function(e){
    var current = e.currentTarget.dataset.src;
    console.log(e.currentTarget.dataset.src)
    console.log(e);
    wx.previewImage({
      urls: this.data.swiperim,
      current: current,
      success:function(e){
        console.log('预览成功');
        
      }
    })
  },

  addfavorite: function () {
    const mytab = this.selectComponent('.addfavor')
    mytab.setData({
      isAdd: mytab.data.isAdd + 1
    })
  },
  toinform: function () {
    console.log("举报")
  },
  toshare: function () {
    console.log('分享')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      one: options.one,
      two: options.two,
      three: options.three,
      four: options.four
    })
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})