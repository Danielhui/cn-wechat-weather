// pages/list/list.js
const dayMap = ['礼拜一', '礼拜二', '礼拜三 ', '礼拜四', '礼拜五', '礼拜六', '礼拜天',]

Page({

  data: {
    weekWeather : []
  },

  onLoad() {
    this.getWeekWeather()
  },

  onPullDownRefresh(){
    this.getWeekWeather(() =>{
      wx.stopPullDownRefresh()
    })
  },

  getWeekWeather(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/future',
      data:{
        time:new Date().getTime(),
        city:"广州市",
      },

      seccess:res => {
        let result = res.data.result
        this.setWeekWeather(result)
      },

      complete: () => {
        callback && callback()
      },

    })
  },

  setWeekWeather(result){
    let weekWeather = []
    for (let i = 0; i<7 ;i++){
      let date = new Date()
      date.setDate(date.getDate() + i)
      weekWeather.push({
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        temp: `${result[i].minTemp}° - ${result[i].maxTemp}°`,
        iconPath: '/images/' + result[i].weather + '-icon.png',
      })
    }
    weekWeather[0].day = '今天',
      this.setData({
        weekWeather: weekWeather
      })
  },
  
})