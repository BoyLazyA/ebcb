// pages/seek_customer/seek_customer.js
var util = require('../../utils/time.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seat_num: [1, 2, 3, 4, 5, 6, 7],
    index:0,
    multiIndex:[0,0],
    multiArray: [["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日", "31日"], ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]],
    declare_time:''
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  feedback: function (e) {
    let that = this;
    let find_car = {};
    let info = wx.getStorageSync("info");
    var time = util.formatMiniTime(new Date());
    this.setData({
      declare_time: time
    })
    find_car.seats_number = this.data.seat_num[e.detail.value.seats_number];//同行人数
    find_car.start_time = this.data.multiArray[0][e.detail.value.start_time[0]] + this.data.multiArray[1][e.detail.value.start_time[1]];//出发时间
    find_car.start_address = e.detail.value.start_address;//
    find_car.end_address = e.detail.value.end_address;//
    find_car.remarks = e.detail.value.remarks;//备注
    find_car.phone = e.detail.value.phone;//用户地址
    find_car.nickname = info.nickName;//发布者昵称
    find_car.src = info.avatarImg;//发布者头像
    find_car.openid = wx.getStorageSync('openid');//用户openid
    find_car.declare_time = that.data.declare_time;//用户信息发布时间
    console.log(find_car);
    if (find_car.start_address == '' || find_car.end_address == '' || find_car.phone == '') {
      wx.showModal({
        title: '提示',
        content: '必须要完成所有信息的填写才能进行提交！',
      })
    } else {
      wx.request({
        url: 'http://localhost:8080/user/feedback',
        data: find_car,
        method: 'POST',
        dataType: "json",
        header: {
          'content-type': 'application/json;charset=utf-8'
        },
        success: res => {
          wx.showModal({
            title: '提示',
            content: '提交成功',
            showCancel: false,
            success: function (res) {
              wx.navigateBack({})
            }
          })
        }
      })
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