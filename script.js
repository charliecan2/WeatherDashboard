var cityArray = ["Austin", "Chicago", "Seattle", "New York", "Los Angeles"];

function generateCities(){
    for (i = 0; i < cityArray.length ; i++){
        var cityButton = $("<button>");
        var cityList = $("#cityList");
        cityButton.attr("type", "button");
        cityButton.attr("class", "list-group-item list-group-item-action");
        cityButton.text(cityArray[i]);
        cityList.append(cityButton);
    }
}

generateCities();

$("#searchButton").on("click", function(){
    $("#cityList").empty();

    var searchBar = $("#searchBar").val();
    cityArray.push(searchBar);
    generateCities();
});