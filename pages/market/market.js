// pages/market/market.js
Page({
  data: {
    currentData: 0,
  },
  gotodetails:function(e){
    switch (e.currentTarget.dataset.current){
      case '1':
        wx.navigateTo({
          url: '../product_details/product_details?one=表显里程&two=发动机状态&three=内饰状态&four=车主',
        });
        break;
      case '2':
        wx.navigateTo({
          url: '../product_details/product_details?one=原属车型&two=型号&three= &four=物主',
        });
        break;
    }
    
  },
  handleitemclick(event) {
    console.log(event)
    this.setData({
      currentData: event.detail.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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