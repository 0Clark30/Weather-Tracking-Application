var apiKey = "20ec5ae9470963b8c0b41f91194289e2";

var searchBTN = document.getElementById("searchBtn");
var mainForecast = document.getElementById("mainForecast");
var cityInput = document.getElementById("cityInput");

var date1 = document.getElementById('date1');
var content1 = document.getElementById('content1')
var date2 = document.getElementById("date2");
var content2 = document.getElementById("content2");
var date3 = document.getElementById("date3");
var content3 = document.getElementById("content3");
var date4 = document.getElementById("date4");
var content4 = document.getElementById("content4");
var date5 = document.getElementById("date5");
var content5 = document.getElementById("content5");

let city;

const cities = {
  atlanta: { lat: 33.749, lon: -84.388 },
  houston: { lat: 29.7604, lon: -95.3698 },
  seattle: { lat: 47.6062, lon: -122.3321 },
};
cityInput.addEventListener("change", ()=>{

console.log(cityInput.value);
localStorage.setItem('city', cityInput.value)
})


function getWeather() {
const city = localStorage.getItem('city')
  
let lat = cities[city].lat
let lon =-cities[city].lon
  console.log(lat);
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.main.temp);
      var cityName = document.createElement("h2");
      var temp = document.createElement("p");
      var wind = document.createElement("p");
      var humidity = document.createElement("p");
      cityName.textContent = city.toUpperCase();
      temp.textContent = `Temperature: ${data.main.temp} °F`;
      wind.textContent = `Wind Speed: ${data.wind.speed} mph`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      mainForecast.innerHTML = "";
      mainForecast.append(cityName);
      mainForecast.append(temp);
      mainForecast.append(wind);
      mainForecast.append(humidity);
      date1.append()


      
    })
    .catch(function (error) {
      console.log("Error fetching weather data:", error);
    });
}

searchBTN.addEventListener("click", getWeather);
