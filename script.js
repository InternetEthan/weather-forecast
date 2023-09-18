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
        
})
}

weatherCall()