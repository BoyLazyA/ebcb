// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseArr: ["车主认证", "我的收藏","客服&反馈"],
    nikename: '未登录',
    src: '',
  },
  intodriver_register: function (e) {
    switch (e.currentTarget.dataset.current) {
      case '车主认证':
        wx.navigateTo({
          url: '../driver_register/driver_register',
        });
        break;
      case '我的收藏':
        wx.navigateTo({
          url: '../collect/collect',
        });
        break;
      case '客服&反馈':
        wx.navigateTo({
          url: '../connect/connect',
        });
        break;
    } 
  },
  getMyInfo: function (e) {
    let info = e.detail.userInfo;
    console.log(info)
    this.setData({
      isLogin: true,
      src: info.avatarUrl,
      nickname: info.nickName
    })
    this.getMyFavorites();
  },
  getMyFavorites: function () {
    let info = wx.getStorageInfoSync();
    let keys = info.keys;
    let num = keys.length;

    let myList = [];
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i]);
      myList.push(obj);
    }

    this.setData({
      newslist: myList,
      num: num
    })
  },

  gotodetails: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../news/news?id=' + id,
    })
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