function weatherCall() {
    const apiKey = "7a9301cccd62f40a237c50a7cbeef867";

    var lat = 30.2672
    var lon = 97.7431
    
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    
    fetch(forecastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (forecastData) {
        console.log("Forecast data", forecastData);
        var dayNumber = 1;
        for (var i = 0; i < forecastData.list.length; i++) {
            var forecastItem = forecastData.list[i];
            if (forecastItem.dt_txt.includes("15:00:00")) {
                var forecastDate = forecastItem.dt_txt;
                var forecastIconCode = forecastItem.weather[0].icon;
                var forecastTemp = forecastItem.main.temp;
                var forecastWind = forecastItem.wind.speed;
                var forecastHumidity = forecastItem.main.humidity;

                console.log(dayNumber);
                console.log(forecastDate);
                console.log(forecastIconCode);
                console.log(forecastTemp);
                console.log(forecastWind);
                console.log(forecastHumidity);
            }}

})
}

weatherCall()