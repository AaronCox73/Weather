//my key for the API 9504c29e0d15333519b3aa6f3c2b9734

fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=111.8910&appid=9504c29e0d15333519b3aa6f3c2b9734")
    .then(function (response) {
        return response.json();
    })

    .then(function (response) {
        console.log(response.data.daily.temp)
        /*var temperatureEl = document.getElementById("temperature")*/


    })