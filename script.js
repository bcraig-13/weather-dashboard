var apiKey = "2788d55befd914b1820a7e359663b5fd";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&units=imperial&appid=" + apiKey;
var searchVal = $("#search").text();

$("#searchbtn").on("click", function() {
    searchBtn();
});

function searchBtn() {
    console.log($("#searchtext").val());
}

