//my key for the API 9504c29e0d15333519b3aa6f3c2b9734

// creating variables to use in search function 
var api = "https://api.openweathermap.org/data/2.5/weather?q=";

var apiKey = "&appid=9504c29e0d15333519b3aa6f3c2b9734";
var units = "&units=imperial";

var input = document.getElementById("searchBox")
var button = document.querySelector(".searchBtn")
var cityValue = document.querySelector(".cityBtn")


// function for weather in Kiel, right when page loads
function stockWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Kiel&units=imperial&appid=9504c29e0d15333519b3aa6f3c2b9734")
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data.main.temp, data.wind, data.main.humidity, data.name,);


                var cityNameEl = document.querySelector("#cityName");
                cityNameEl.append(data.name)

                var tempEl = document.querySelector("#temperature");
                tempEl.append(data.main.temp + "°f");

                var windEl = document.querySelector("#wind");
                windEl.append(data.wind.speed + "mph");

                var humidityEl = document.querySelector("#humid");
                humidityEl.append(data.main.humidity);

                //var skiesEl = document.querySelector("#skies");
                //skiesEl.append(data.weather);
            })


        })
}
//loads stockWeather function when page is first opened
window.onload = stockWeather();

//allows user to type in any city and get the weather for that city
function searchWeather() {
    var url = fetch(api + input.value + units + apiKey)
        .then(function (response) {
            response.json().then(function (data) {

                var cityNameEl = document.querySelector("#cityName");

                cityNameEl.innerHTML = data.name

                var tempEl = document.querySelector("#temperature");
                $(tempEl).empty().append("Temperature: " + data.main.temp + "°f");

                var windEl = document.querySelector("#wind");
                $(windEl).empty().append("Wind: " + data.wind.speed + "mph");

                var humidityEl = document.querySelector("#humid");
                $(humidityEl).empty().append("Humidity: " + data.main.humidity);
            })
        })
}

function cityButtons() {
    //when city button is clicked the corresponding weather is loaded 
    var url = fetch(api + cityValue.innerHTML + units + apiKey)
        .then(function (response) {
            response.json().then(function (data) {

                var cityNameEl = document.querySelector("#cityName");
                cityNameEl.innerHTML = data.name

                var tempEl = document.querySelector("#temperature");
                $(tempEl).empty().append("Temperature: " + data.main.temp + "°f");

                var windEl = document.querySelector("#wind");
                $(windEl).empty().append("Wind: " + data.wind.speed + "mph");

                var humidityEl = document.querySelector("#humid");
                $(humidityEl).empty().append("Humidity: " + data.main.humidity);
            })
        })
}



// allowing the search button to be clicked 
var button = document.querySelector(".searchBtn")
button.addEventListener("click", searchWeather)

// When city button is clicked it will run the CityButton function to load corresponding weather
var cityBtn = document.querySelectorAll(".cityBtn")
for (i of cityBtn) {
    i.addEventListener("click", cityButtons)
}




