let API_KEY = "a465648acb00bb53388b8b6db08a6be2";


getWeatherdata = (city) => {
 const URL = "https://api.openweathermap.org/data/2.5/weather";
 const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
 const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
   return response.json();
 })
}



searchCity = () => {
    const city = document.getElementById('city-input').value;
 getWeatherdata(city)
 .then((response) => {
  showWeatherData(response);
 }).catch((error) => {
  console.log(error);
  } )
 }


 showWeatherData = (weatherData) => {
  document.getElementById('city-name').innerText = weatherData.name;
  document.getElementById('weather-type').innerText = weatherData.weather[0].main;
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;

 }