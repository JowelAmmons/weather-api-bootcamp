document.querySelector('button').addEventListener('click',getWeather);

function getWeather(){
  let location = document.querySelector('input').value
  const geoKey = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${location}`
  fetch(geoKey)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let city = data[0].Key
    console.log(city)

    const cityKey = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}?apikey=`
    fetch(cityKey)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
  })
  }
