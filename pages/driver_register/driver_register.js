// pages/my/my.js

var util = require('../../utils/time.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    tempFilePaths: [{
      driver_license:'',
      car_license:'',
      id_front: '',
      id_reverse: ''
    }],
    driver_sex:'男',
    car_type: '小车',
    route:'成都往返峨边',
    register_date:''
  },
  numSteps() {
    this.setData({
      num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1
    })
  },
  chooseimg: function (e) {
    switch(e.currentTarget.dataset.current){
      case '1':
        wx.chooseImage({
          count: 1,
          success: res => {
            var tempFilePaths = res.tempFilePaths;

            this.setData({
              'tempFilePaths[0].driver_license': tempFilePaths
            })
          }
        })
        break;
      case '2':
        wx.chooseImage({
          count: 1,
          success: res => {
            var tempFilePaths = res.tempFilePaths;

            this.setData({
              'tempFilePaths[0].car_license': tempFilePaths
            })
          }
        })
        break;
      case '3':
        wx.chooseImage({
          count: 1,
          success: res => {
            var tempFilePaths = res.tempFilePaths;

            this.setData({
              'tempFilePaths[0].id_front': tempFilePaths
            })
          }
        })
        break;
      case '4':
        wx.chooseImage({
          count: 1,
          success: res => {
            var tempFilePaths = res.tempFilePaths;

            this.setData({
              'tempFilePaths[0].id_reverse': tempFilePaths
            })
          }
        })
        break;
    }
  },
  radio1Change: function (e) {
    this.setData({
      driver_sex: e.detail.value
    })
  },
  radio2Change: function (e) {
    this.setData({
      car_type: e.detail.value
    })
  },
  radio3Change: function (e) {
    this.setData({
      route: e.detail.value
    })
  },
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  feedback: function (e) {
    let that = this;
    let auth_info = {};
    var time = util.formatTime(new Date());
    this.setData({
      register_date:time
    })
    auth_info.name = e.detail.value.driver_name;//车主姓名
    auth_info.phonenum = e.detail.value.driver_phone;//车主电话
    auth_info.driver_sex = that.data.driver_sex;//车主性别
    auth_info.driver_address = e.detail.value.driver_address;//车主地址
    auth_info.car_number = e.detail.value.car_number;//车牌号
    auth_info.car_color = e.detail.value.car_color;//汽车颜色
    auth_info.driver_register_date = e.detail.value.driver_register_date;//初次领驾照时间
    auth_info.car_type = that.data.car_type;//汽车类型
    auth_info.route = that.data.route;//常跑路线
    auth_info.driver_license = that.data.tempFilePaths[0].driver_license;//驾照照片
    auth_info.car_license = that.data.tempFilePaths[0].car_license;//行驶证照片
    auth_info.id_front = that.data.tempFilePaths[0].id_front;//身份证正面
    auth_info.id_reverse = that.data.tempFilePaths[0].id_reverse;//身份证反面
    auth_info.register_date = that.data.register_date;//车主平台注册时间
    auth_info.openid = wx.getStorageSync('openid');//车主openid
    //***后台需要在审核通过之后添加一个标记表示此车主已经认证，或者存下车主openID为已认证的凭据

    if (auth_info.name == '' || auth_info.phonenum == '' || auth_info.driver_address == '' || auth_info.car_number == '' || auth_info.car_color == '' || auth_info.driver_register_date == '' || auth_info.car_type == '' || auth_info.driver_license == '' || auth_info.car_license == '' || auth_info.id_front == '' || auth_info.id_reverse == '') {
      wx.showModal({
        title: '提示',
        content: '必须要完成所有信息的填写才能进行提交！',
      })
    } else {
      wx.request({
        url: 'http://localhost:8080/user/feedback',
        data: auth_info,
        method: 'POST',
        dataType: "json",
        header: {
          'content-type': 'application/json;charset=utf-8'
        },
        success: res => {
          wx.showModal({
            title: '提交成功',
            content: '请您等待审核！',
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})