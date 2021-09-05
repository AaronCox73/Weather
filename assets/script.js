//my key for the API 9504c29e0d15333519b3aa6f3c2b9734

// creating variables to use in search function 
var api = "https://api.openweathermap.org/data/2.5/weather?q=";

var apiKey = "&appid=9504c29e0d15333519b3aa6f3c2b9734";
var units = "&units=imperial";

var input = document.getElementById("searchBox")
var button = document.querySelector(".searchBtn")
var cityValue = ""



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
                cityNameEl.innerHTML = data.name + "(" + moment(data.dt, "X").format("MM/DD/YYYY") + ") <img src=' http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png' >"

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
    var url = fetch(api + cityValue + units + apiKey)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data)
                var cityNameEl = document.querySelector("#cityName");
                cityNameEl.innerHTML = data.name + "(" + moment(data.dt, "X").format("MM/DD/YYYY") + ") <img src=' http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png' >"

                var tempEl = document.querySelector("#temperature");
                $(tempEl).empty().append("Temperature: " + data.main.temp + "°f");

                var windEl = document.querySelector("#wind");
                $(windEl).empty().append("Wind: " + data.wind.speed + "mph");

                var humidityEl = document.querySelector("#humid");
                $(humidityEl).empty().append("Humidity: " + data.main.humidity);

                forecast()
            })
        })
}

function forecast() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&appid=9504c29e0d15333519b3aa6f3c2b9734&units=imperial")
        .then(function (response) {
            return response.json()
        })
        .then(function (fiveDayData) {
            console.log(fiveDayData)
            var fiveDayCastArray = fiveDayData.list
            var forecastEl = document.querySelector(".forecast")
            for (let index = 3; index < fiveDayCastArray.length; index = index + 8) {

                console.log(fiveDayCastArray[index])

                forecastEl.innerHTML = forecastEl.innerHTML + `
                <div class="col">

                <div class="card" style="width: 12rem;">

                    <div class="card-body">
                        <h5 class="card-title">${moment(fiveDayCastArray[index].dt, "X").format("MM/DD/YYYY")}</h5>
                        <img src=" http://openweathermap.org/img/wn/${fiveDayCastArray[index].weather[0].icon}.png">
                        <p class="card-text">Temp: ${fiveDayCastArray[index].main.temp}</p>
                        <p>Wind: ${fiveDayCastArray[index].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayCastArray[index].main.humidity}</p>

                    </div>
                </div>
            </div>
                `

            }
        })
}


// allowing the search button to be clicked 
var button = document.querySelector(".searchBtn")
button.addEventListener("click", searchWeather)

// When city button is clicked it will run the CityButton function to load corresponding weather
function handler(event) {
    console.log(event.target.textContent)
    cityValue = event.target.textContent

    cityButtons()
}
document.querySelectorAll(".cityBtn").forEach(function (element) {
    element.addEventListener('click', handler)
})



