
Page({
  data: {
    currentData: 0,
    driver: {
      driver_img: "../../img/g3.jpg",
      name: "大司机",
      phone: "15983373359",
      address: "新林镇金星村",
      car_type: "小车"
    }
  },
  turn: function () {
    wx.navigateTo({
      url: '../driver_details/driver_details',
    });
  },
  handleitemclick(event) {
    console.log(event)
    this.setData({
      currentData: event.detail.index
    })
  },
  onLoad: function () {
    
  }
})
