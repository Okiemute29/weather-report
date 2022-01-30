var h2 = document.querySelector("h2")
var para = document.querySelector("p")
var city_name = document.querySelector("input")
var submit = document.querySelector("button")
var key = "046d78bc3997ae5796f5a375fbbaafa0"
var img = document.querySelector("#wicon")

async function weatherdata(){
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=`
  var res = await fetch(url + key)
  var data = await res.json()
  return data
  
}

function getdata(){
  weatherdata().then((data)=>{
  console.log(data)
  var iconcode = data.weather[0].icon
  console.log(iconcode)
  var iconurl = `http://openweathermap.org/img/w/${iconcode}.png`
  h2.innerHTML = data.name
  para.innerHTML = data.main.temp + "kelvin"
  img.src = iconurl
})
}



submit.addEventListener("click", getdata)