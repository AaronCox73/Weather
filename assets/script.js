var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Kiel";
var apiKey = "9504c29e0d15333519b3aa6f3c2b9734";
var units = "&units=imperial";

var input = document.querySelector(".searchBox")

var button = document.querySelector(".searchBtn")
//var url = api + input.value() + apiKey + units

//my key for the API 9504c29e0d15333519b3aa6f3c2b9734
function stockWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Kiel&units=imperial&appid=9504c29e0d15333519b3aa6f3c2b9734")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data.main.temp, data.wind, data.main.humidity, data.name);

                var url = api + city + apiKey + units;
                var cityNameEl = document.querySelector("#cityName");
                //cityNameEl.innerHTML = "";
                cityNameEl.append(data.name)

                var tempEl = document.querySelector("#temperature");
                tempEl.append(data.main.temp + "°f");

                var windEl = document.querySelector("#wind");
                windEl.append(data.wind);

                var humidityEl = document.querySelector("#humid");
                humidityEl.append(data.main.humidity);
            })


        })
}

function clickHandler(event) {
    console.log('button Clicked');
}

function search() {
    var button = document.querySelector(".searchBtn")
    button.addEventListener("click", function (event) {
        console.log("clicked")
    });



}

window.onload = stockWeather();

function searchWeather() {
    search()
    var url = api + input.value() + apiKey + units
}