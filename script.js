// Contains a starting list of cities on the Weather Dashboard
var cityArray = ["Austin", "Chicago", "Seattle", "New York", "Los Angeles"];

function generateCities() {
    for (i = 0; i < cityArray.length; i++) {
        var cityButton = $("<button>");
        var cityList = $("#cityList");
        cityButton.attr("type", "button");
        cityButton.attr("class", "list-group-item list-group-item-action city");
        cityButton.text(cityArray[i]);
        cityList.append(cityButton);
    }
}

generateCities();

// The "Go" button adds cities to the cityArray, thus growing the list on the dashboard
$("#searchButton").on("click", function () {
    var cityList = $("#cityList");
    var searchBar = $("#searchBar").val();

    cityList.empty();
    cityArray.push(searchBar);
    generateCities();

    // Apprently the event listener needs to be assigned again after another city is added to the list
    $(".city").on("click", function(){
        var cityName = $(this).text();
        var apiKey = "80f8772e6cbc82b131c125fc22aa0949";
        var mainTemp = $("#mainTemp");
        var mainHum = $("#mainHum");
        var windSpeed = $("#wind-speed");
        var uvIndex = $("#uv-index");
    
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey,
            method: "GET"
        }).then(function(response){
            var tempF = (response.main.temp  - 273.15) * 1.80 + 32;
            console.log(response);
            
            $("#cityName").text(cityName);
            $("#mainIcon").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
            mainTemp.text("Temperature: " + tempF.toFixed(2) + " °F");
            mainHum.text("Humidity: " + response.main.humidity +"%");
            windSpeed.text("Wind speed: " + response.wind.speed + " MPH");
            // Find out how to get UV
            uvIndex.text();
        });
    
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey,
            method: "GET"
        }).then(function(response){
            console.log(response);
    
            var tempDay1 = (response.list[0].main.temp - 273.15) * 1.80 + 32;
            var tempDay2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
            var tempDay3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
            var tempDay4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
            var tempDay5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    
            $("#tempDay1").text("Temp: " + tempDay1.toFixed(2) + " °F");
            $("#tempDay2").text("Temp: " + tempDay2.toFixed(2) + " °F");
            $("#tempDay3").text("Temp: " + tempDay3.toFixed(2) + " °F");
            $("#tempDay4").text("Temp: " + tempDay4.toFixed(2) + " °F");
            $("#tempDay5").text("Temp: " + tempDay5.toFixed(2) + " °F");
    
            $("#humDay1").text("Humidity: " + response.list[0].main.humidity + "%");
            $("#humDay2").text("Humidity: " + response.list[8].main.humidity + "%");
            $("#humDay3").text("Humidity: " + response.list[16].main.humidity + "%");
            $("#humDay4").text("Humidity: " + response.list[24].main.humidity + "%");
            $("#humDay5").text("Humidity: " + response.list[32].main.humidity + "%");
    
            $("#icon1").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
            $("#icon2").attr("src", "http://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png");
            $("#icon3").attr("src", "http://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png");
            $("#icon4").attr("src", "http://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png");
            $("#icon5").attr("src", "http://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png");
    });
    });
})
// This onclick event will give the weather data for that city on the dashboard
$(".city").on("click", function(){
    var cityName = $(this).text();
    var apiKey = "80f8772e6cbc82b131c125fc22aa0949"
    var mainTemp = $("#mainTemp");
    var mainHum = $("#mainHum");
    var windSpeed = $("#wind-speed");
    var uvIndex = $("#uv-index");

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey,
        method: "GET"
    }).then(function(response){
        var tempF = (response.main.temp  - 273.15) * 1.80 + 32;
        console.log(response);
        
        $("#cityName").text(cityName);
        $("#mainIcon").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
        mainTemp.text("Temperature: " + tempF.toFixed(2) + " °F");
        mainHum.text("Humidity: " + response.main.humidity +"%");
        windSpeed.text("Wind speed: " + response.wind.speed + " MPH");
        // Find out how to get UV
        uvIndex.text();
    });

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey,
        method: "GET"
    }).then(function(response){
        console.log(response);

        var tempDay1 = (response.list[0].main.temp - 273.15) * 1.80 + 32;
        var tempDay2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
        var tempDay3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
        var tempDay4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
        var tempDay5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;

        $("#tempDay1").text("Temp: " + tempDay1.toFixed(2) + " °F");
        $("#tempDay2").text("Temp: " + tempDay2.toFixed(2) + " °F");
        $("#tempDay3").text("Temp: " + tempDay3.toFixed(2) + " °F");
        $("#tempDay4").text("Temp: " + tempDay4.toFixed(2) + " °F");
        $("#tempDay5").text("Temp: " + tempDay5.toFixed(2) + " °F");

        $("#humDay1").text("Humidity: " + response.list[0].main.humidity + "%");
        $("#humDay2").text("Humidity: " + response.list[8].main.humidity + "%");
        $("#humDay3").text("Humidity: " + response.list[16].main.humidity + "%");
        $("#humDay4").text("Humidity: " + response.list[24].main.humidity + "%");
        $("#humDay5").text("Humidity: " + response.list[32].main.humidity + "%");

        $("#icon1").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
        $("#icon2").attr("src", "http://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png");
        $("#icon3").attr("src", "http://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png");
        $("#icon4").attr("src", "http://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png");
        $("#icon5").attr("src", "http://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png");
        
    });
})