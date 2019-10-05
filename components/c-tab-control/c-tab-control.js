// components/c-tab-control/c-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    indexchanged(event){
      console.log(event)
      const index = event.currentTarget.dataset.index
      this.setData({
        currentindex:index
      })
      this.triggerEvent('itemclick', { index: index, title: this.properties.titles[index] }, {})
    }
  }
})
