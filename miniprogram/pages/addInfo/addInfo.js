// pages/areainfo/areainfo.js
var utils = require('../../utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市', '北京市', '海淀区'],
    address: '',
    phonenumber:'',
    linkperson:'',
    name:'',
    list:utils.getInfoList(),
    show:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    utils.SayGoodbye("oliver")
    var list = utils.getInfoList()
    if (list.length >0){
      console.log("get one:"+list[0].name)
    }
    else{
      console.log("infos json is empty!")
    }
    
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

  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit: function (e) {
    const name = e.detail.value.name
    const imageUrl= e.detail.value.imageUrl
    utils.add(e.detail.value)
    console.log(" name,:"+ name+ "   imageUrl:"+imageUrl)
  }, 
 

})