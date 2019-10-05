// components/c-driver/c-driver.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    driver_img:String,
    name:String,
    phone:String,
    address:String,
    car_type:String
  },
  attached: function () {
    console.log("this.dataset.tel:" + this.dataset.driver.phone); //控制台打印:"400-010-9797"
    // 设置properties值用setData()
    this.setData({
      driver_img: this.dataset.driver.driver_img,
      name: this.dataset.driver.name,
      phone: this.dataset.driver.phone,
      address: this.dataset.driver.address,
      car_type: this.dataset.driver.car_type
    });
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindturn(){
      this.triggerEvent('pageturn',{},{})
    }
  }
})
