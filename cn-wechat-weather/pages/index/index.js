Page({
  data:{
    nowTemp:14,
    nowWeather:"多云"
  },
  onLoad(){
    console.log("hello everyone")
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: { "city": "南昌市" },
      success: res => {
        console.log(res)
        let result = res.data.result
        let temp = result.now.temp
        let weather = result.now.weather
        console.log(temp, weather)
      }
    })
  }
})
