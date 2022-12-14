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
    selected_name:'深圳国际创新谷7栋A座',
    check_date:'2022-09-15 04:30',
    list:utils.getInfoList(),
    show:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
    wx.setTopBarText({
      text: '粤康码场所通行',
    })
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