// components/c-tabbar/c-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    isAdd:0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    addfavorite(){
      this.triggerEvent('addfavor',{},{})
    },
    toinform(){
      this.triggerEvent('toinform',{},{})
    },
    toshare(){
      this.triggerEvent('toshare',{},{})
    }
  }
})
