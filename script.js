// Contains a starting list of cities on the Weather Dashboard
var cityArray = ["Austin", "Chicago", "Seattle", "New York", "Los Angeles"];

function generateCities(){
    for (i = 0; i < cityArray.length ; i++){
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
$("#searchButton").on("click", function(){
    $("#cityList").empty();

    var searchBar = $("#searchBar").val();
    cityArray.push(searchBar);
    generateCities();
});

// Checks for the name of the city on the button
$(".city").on("click", function(){
    var cityName = $(this).text();
    // Works perfectly
    console.log(cityName);
})