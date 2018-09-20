// pages/roomselect/roomselect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab切换
    currentTab: 0,
    screenheight: wx.getSystemInfoSync().windowHeight,
    bgheight1:"",
    bgheight2: "",
    bgheight3: "",
    array1: [{
      roomname: " 大数据学院119", roomplace: "3号实训楼1层北侧", roompeople: 40, roomimg: "../../images/room1.png", wifi: false, ty: true, jsj: true, key: true, network: false, tv: true, studentcomputer: false, desk: false, ytj: false, hy: true, kt: false, gddesk: true}, { roomname: " 大数据学院119", roomplace: "3号实训楼1层北侧", roompeople: 20, roomimg: "../../images/room2.png", wifi: true, ty: false, jsj:true, key: false, network: false, tv: true, studentcomputer: true, desk: true, ytj: true, hy: false, kt: false, gddesk:true }, {roomname: " 大数据学院119", roomplace: "3号实训楼1层北侧", roompeople: 40, roomimg: "../../images/room1.png", wifi: false, ty: false, jsj: true, key: true, network: true, tv: true, studentcomputer: false, desk: true, ytj: false, hy: false, kt: true, gddesk: true}],
    array2: [{
      roomname: "3s北305", roomplace: "3号实训楼3层北侧", roompeople: 40, roomimg: "../../images/room1.png", wifi: false, ty: true, jsj: true, key: true, network: false, tv: true, studentcomputer: false, desk: false, ytj: false, hy: true, kt: false, gddesk: true
    }, { roomname: "3s北306", roomplace: "3号实训楼3层北侧", roompeople: 20, roomimg: "../../images/room2.png", wifi: true, ty: false, jsj: true, key: false, network: false, tv: true, studentcomputer: true, desk: true, ytj: true, hy: false, kt: false, gddesk: true }],
    array3: [{roomname: "3s南201", roomplace: "3号实训楼3层北侧", roompeople: 40, roomimg: "../../images/room1.png", wifi: false, ty: true, jsj: true, key: true, network: false, tv: true, studentcomputer: false, desk: false, ytj: false, hy: true, kt: false, gddesk: true
    }],
    flag1:true,
    selectjson:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      bgheight1: that.data.array1,
      bgheight2: that.data.array2,
      bgheight3: that.data.array3,
       });
       console.log("zz"+that.data.screenheight)
  },
  /**
     * 滑动切换tab
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /**
   * 点击tab切换
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  //弹出层
  show:function(e){
    this.setData({ 
      flag1:false,
      selectjson: e.currentTarget.dataset.item,
      })
    // var name = e.currentTarget.dataset.item;
    console.log("a", this.data.selectjson);
  },
  hide:function(){
    this.setData({ 
      flag1:true,
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
  
  }
})