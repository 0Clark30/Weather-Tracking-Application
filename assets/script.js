var apiKey = "20ec5ae9470963b8c0b41f91194289e2";

var searchBTN = document.getElementsByClassName("btn")[0];
var cityInput = document.getElementById("cityInput");
let lat;
let lon;
let city;
const atlanta = {
  name: "Atlanta",
  lat: 33.749,
  lon: -84.388
};

const houston = {
  name: "Houston",
  lat: 29.7604,
  lon: -95.3698
};

const seattle = {
  name: "Seattle",
  lat: 47.6062,
  lon: -122.3321
};

searchBTN.addEventListener('click', function() {
    city = cityInput.value;
    return city
})


console.log(city)
if (city = atlanta){
    lat = atlanta.lat
    lon = atlanta.lon
} else if (city = houston){
    lat = houston.lat
    lon = houston.lon
}else {
    lat = seattle.lat
    lon =seattle.lon
}




var queryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


 fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });   


