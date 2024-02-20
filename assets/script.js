var apiKey = "20ec5ae9470963b8c0b41f91194289e2"
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

city = "Zocca"
fetch(queryURL)
.then(function (response){
    return response.json();
})
.then(function(data){
    console.log(data)
})
