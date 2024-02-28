var apiKey = "20ec5ae9470963b8c0b41f91194289e2";

var searchBTN = document.getElementById("searchBtn");
var mainForecast = document.getElementById("mainForecast");
var cityInput = document.getElementById("cityInput");

let city;

const cities = {
  Atlanta: { lat: 33.749, lon: -84.388 },
  Houston: { lat: 29.7604, lon: -95.3698 },
  Seattle: { lat: 47.6062, lon: -122.3321 },
};

function getWeather() {
  city = cityInput.value;
let lat = 33.749
let lon =-84.388
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



      
    })
    .catch(function (error) {
      console.log("Error fetching weather data:", error);
    });
}

searchBTN.addEventListener("click", getWeather);
