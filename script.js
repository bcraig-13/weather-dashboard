//For the weather icon, use the data query. (data.weather.list.icon?) Might not work
var apiKey = "2788d55befd914b1820a7e359663b5fd";

$("#searchbtn").on("click", function () {
  searchBtn();
  forecast();
});

// $("#history").on("click", "li", function() {

// });

function searchBtn() {
  var unixDate = $("#main-date").val();
  var dateString = moment.unix(unixDate).format("MM/DD/YYYY");
  var searchVal = $("#searchtext").val();
  var queryUrl ="https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&units=imperial&dt=" + dateString + "&" + "appid=" + apiKey;

  
  if ($("#searchtext").val() === "") {
    alert("Please enter a city in the search bar.");
    return;
  }

  $("#history").prepend(
    "<li class='list-group-item history'>" + searchVal + "</li>"
  );

  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (data) {
    //data will be placed before .response
    //Display the following in the .result div--
    $("#mainIcon").attr(
      "src",
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
    );
    $("#mainCity").text(data.name + " Weather " + dateString);
    $("#mainTemp").text(data.main.temp + "°");
    $("#mainHum").text(data.main.humidity + " %");
    $("#mainWs").text(data.wind.speed + " mph");
    //5 day forecast will go in a row here
    //DAY 1

    //DAY 2

    //DAY 3

    //DAY 4

    //DAY 5
  });
}

function forecast() {
    var apiKey = "2788d55befd914b1820a7e359663b5fd";
    var searchVal = $("#searchtext").val();
    var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchVal + "&appid=" + apiKey;
    

    $.ajax({
        url: forecast,
        method: "GET",
    }).then(function (data) {
        var dayOneEl = moment().add(1, "days").format("M/D");
        var dayOneIcon = data.list[8].weather[0].icon;
        var dayOneImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayOneIcon + ".png");
        var dayOneTemp = data.list[8].main.temp;
        var dayOneHum = data.list[8].main.humidity;
        

        $(".day-one-date").append(dayOneEl);
        $("#day-one-img").append(dayOneImg);
        $("#day-one-temp").append(dayOneTemp);
        $("#day-one-hum").append(dayOneHum);


        //put this at the end
        // $("#searchtext").val("");
    });
}
