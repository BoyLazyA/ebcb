// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    tempFilePaths: [{
      driver_license: '',
      car_license: '',
      id_front: '',
      id_reverse: ''
    }],
    driver_sex:[
      { name: 'male', value: '男', checked: 'true' },
      { name: 'female', value: '女' },
    ],
    car_type_items: [
      { name: 'small_car', value: '小车', checked: 'true' },
      { name: 'big_car', value: '其他车型' }
    ],
    route:[
      { name: 'cehngdu', value: '成都往返峨边', checked: 'true'},
      { name: 'leshan', value: '乐山往返峨边'},
      { name: 'other', value: '其他'}
    ]
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
            console.log(res)
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
            console.log(res)
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
            console.log(res)
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
            console.log(res)
            var tempFilePaths = res.tempFilePaths;

            this.setData({
              'tempFilePaths[0].id_reverse': tempFilePaths
            })
          }
        })
        break;
    }
  },
  radioChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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
    console.log(e)
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
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