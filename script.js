var apiKey = "2788d55befd914b1820a7e359663b5fd";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&units=imperial&appid=" + apiKey;
var searchVal = $("#searchtext").val();

$("#searchbtn").on("click", function() {
    searchBtn();
});

function searchBtn() {
    $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
      //Display the following in the .result div--
      
      //City name (current date) in larger text
      //Temp in F
      //Humidity in %
      //Wind Speed in mph
      //skip UV index for now

      //5 day forecast will go in a row here
    
    
    
    });
    
    // $("searchtext").clear(); --clear form?
}



