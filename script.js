//For the weather icon, use the data query. (data.weather.list.icon?) Might not work
var apiKey = "2788d55befd914b1820a7e359663b5fd"; 


$("#searchbtn").on("click", function () {
    searchBtn();
});

// $("#history").on("click", "li", function() {

// });




function searchBtn() {
    var unixDate = $("#main-date").val();
    var dateString = moment.unix(unixDate).format("MM/DD/YYYY");
    var searchVal = $("#searchtext").val();
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&units=imperial&dt=" + dateString + "&" + "appid=" + apiKey;
    if($("#searchtext").val() === "") {
        alert("Please enter a city in the search bar.");
        return;
    }

    $("#searchtext").val("");
    $("#history").prepend("<li class='list-group-item history'>" + searchVal + "</li>");
    
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (data) {
        //data will be placed before .response
        //Display the following in the .result div--
        $("#mainIcon").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        $("#mainCity").text(data.name + " Weather " + dateString);
        $("#mainTemp").text(data.main.temp + "°");
        $("#mainHum").text(data.main.humidity + " %");
        $("#mainWs").text(data.wind.speed + " mph");
        //5 day forecast will go in a row here

    });
}





