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
  });
}

function forecast() {
    var apiKey = "2788d55befd914b1820a7e359663b5fd";
    var searchVal = $("#searchtext").val();
    var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchVal + "&appid=" + apiKey;
    
    $("#searchtext").val("");

    $.ajax({
        url: forecast,
        method: "GET",
    }).then(function (data) {
        
        //DAY 1
        var dayOneEl = moment().add(1, "days").format("M/D");
        var dayOneIcon = data.list[8].weather[0].icon;
        var dayOneImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayOneIcon + ".png");
        var dayOneTemp = data.list[8].main.temp;
        var dayOneHum = data.list[8].main.humidity;
        
        $(".day-one-date").append(dayOneEl);
        $("#day-one-img").append(dayOneImg);
        $("#day-one-temp").append(dayOneTemp + "°");
        $("#day-one-hum").append(dayOneHum + " %");
        //DAY 2
        var dayTwoEl = moment().add(2, "days").format("M/D");
        var dayTwoIcon = data.list[16].weather[0].icon;
        var dayTwoImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayTwoIcon + ".png");
        var dayTwoTemp = data.list[16].main.temp;
        var dayTwoHum = data.list[16].main.humidity;
        
        $(".day-two-date").append(dayTwoEl);
        $("#day-two-img").append(dayTwoImg);
        $("#day-two-temp").append(dayTwoTemp + "°");
        $("#day-two-hum").append(dayTwoHum + " %");
        //DAY 3
        var dayThreeEl = moment().add(3, "days").format("M/D");
        var dayThreeIcon = data.list[24].weather[0].icon;
        var dayThreeImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayThreeIcon + ".png");
        var dayThreeTemp = data.list[24].main.temp;
        var dayThreeHum = data.list[24].main.humidity;
        
        $(".day-three-date").append(dayThreeEl);
        $("#day-three-img").append(dayThreeImg);
        $("#day-three-temp").append(dayThreeTemp + "°");
        $("#day-three-hum").append(dayThreeHum + " %");
        //DAY 4
        var dayFourEl = moment().add(4, "days").format("M/D");
        var dayFourIcon = data.list[32].weather[0].icon;
        var dayFourImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFourIcon + ".png");
        var dayFourTemp = data.list[32].main.temp;
        var dayFourHum = data.list[32].main.humidity;
        
        $(".day-four-date").append(dayFourEl);
        $("#day-four-img").append(dayFourImg);
        $("#day-four-temp").append(dayFourTemp + "°");
        $("#day-four-hum").append(dayFourHum + " %");
        //DAY 5 - NOT READING IN OPEN WEATHER API
        var dayFiveEl = moment().add(5, "days").format("M/D");
        var dayFiveIcon = data.list[40].weather[0].icon;
        var dayFiveImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFiveIcon + ".png");
        var dayFiveTemp = data.list[40].main.temp;
        var dayFiveHum = data.list[40].main.humidity;
        
        $(".day-five-date").append(dayFiveEl);
        $("#day-five-img").append(dayFiveImg);
        $("#day-five-temp").append(dayFiveTemp + "°");
        $("#day-five-hum").append(dayFiveHum + " %");
        
    });
}
