var api = "https://api.openweathermap.org/data/2.5/weather?q=";

var apiKey = "&appid=9504c29e0d15333519b3aa6f3c2b9734";
var units = "&units=imperial";

var input = document.getElementById("searchBox")


var button = document.querySelector(".searchBtn")


//my key for the API 9504c29e0d15333519b3aa6f3c2b9734
function stockWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Kiel&units=imperial&appid=9504c29e0d15333519b3aa6f3c2b9734")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data.main.temp, data.wind, data.main.humidity, data.name);


                var cityNameEl = document.querySelector("#cityName");
                //cityNameEl.innerHTML = "";
                cityNameEl.append(data.name)

                var tempEl = document.querySelector("#temperature");
                tempEl.append(data.main.temp + "°f");

                var windEl = document.querySelector("#wind");
                windEl.append(data.wind.speed + "mph");

                var humidityEl = document.querySelector("#humid");
                humidityEl.append(data.main.humidity);
            })


        })
}
window.onload = stockWeather();


function searchWeather() {
    var url = fetch(api + input.value + units + apiKey)
        .then(function (response) {
            response.json().then(function (data) {

                var cityNameEl = document.querySelector("#cityName");

                cityNameEl.innerHTML = data.name

                var tempEl = document.querySelector("#temperature");
                tempEl.append(data.main.temp + "°f");

                var windEl = document.querySelector("#wind");
                windEl.append(data.wind.speed + "mph");

                var humidityEl = document.querySelector("#humid");
                humidityEl.append(data.main.humidity);
            })


        })
}


var button = document.querySelector(".searchBtn")
button.addEventListener("click", searchWeather)