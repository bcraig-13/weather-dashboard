var apiKey = "2788d55befd914b1820a7e359663b5fd";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&units=imperial&appid=" + apiKey;
var searchVal = $("#searchtext").val();

$("#searchbtn").on("click", function () {
    searchBtn();
});

function searchBtn() {
    var searchVal = $("#searchtext").val();
    $("#searchtext").val("");
    $("#history").prepend("<li class='list-group-item'>" + searchVal + "</li>");
    
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (data) {
        //Display the following in the .result div--
        
        //City name in h3
        //Temp in F
        //Humidity in %
        //Wind Speed in mph
        //5 day forecast will go in a row here
        
        
        




    });

    
}





