//For the weather icon, use the data query. (data.weather.list.icon?) Might not work
var apiKey = "2788d55befd914b1820a7e359663b5fd";

$("#searchbtn").on("click", function () {
  searchBtn();
  forecast();
});

//history click function will go here when it works properly======
// $("#history").on("click", "li", function () {
//   var clicked = $("this").target;
//   var unixDate = $("#main-date").val();
//   var dateString = moment.unix(unixDate).format("MM/DD");
//   var queryUrl =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     clicked +
//     "&units=imperial&dt=" +
//     dateString +
//     "&" +
//     "appid=" +
//     apiKey;

//   $.ajax({
//     url: queryUrl,
//     method: "GET",
//   }).then(function (data) {
//     //data will be placed before .response
//     //Display the following in the .result div--
//     $("#mainIcon").attr(
//       "src",
//       "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
//     );
//     $("#mainCity").text(data.name + " Weather " + dateString);
//     $("#mainTemp").text(data.main.temp + "°");
//     $("#mainHum").text(data.main.humidity + " %");
//     $("#mainWs").text(data.wind.speed + " mph");
//   });
// });

function searchBtn() {
  var unixDate = $("#main-date").val();
  var dateString = moment.unix(unixDate).format("MM/DD");
  var searchVal = $("#searchtext").val();
  var queryUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchVal +
    "&units=imperial&dt=" +
    dateString +
    "&" +
    "appid=" +
    apiKey;
    //dateString shows "Invalid date" when searching for another city?
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
  var forecast =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchVal +
    "&units=imperial&appid=" +
    apiKey;

  $.ajax({
    url: forecast,
    method: "GET",
  }).then(function (data) {
    //DAY 1
    var dayOneEl = moment().add(1, "days").format("M/D");
    var dayOneIcon = data.list[0].weather[0].icon;
    var dayOneImg = $("#day-one-img").attr(
      "src",
      "http://openweathermap.org/img/w/" + dayOneIcon + ".png"
    );
    var dayOneTemp = data.list[0].main.temp;
    var dayOneHum = data.list[0].main.humidity;

    $(".day-one-date").text(dayOneEl);
    $("#day-one-img").append(dayOneImg);
    $("#day-one-temp").text(dayOneTemp + "°");
    $("#day-one-hum").text(dayOneHum + " %");
    //DAY 2
    var dayTwoEl = moment().add(2, "days").format("M/D");
    var dayTwoIcon = data.list[8].weather[0].icon;
    var dayTwoImg = $("#day-two-img").attr(
      "src",
      "http://openweathermap.org/img/w/" + dayTwoIcon + ".png"
    );
    var dayTwoTemp = data.list[8].main.temp;
    var dayTwoHum = data.list[8].main.humidity;

    $(".day-two-date").text(dayTwoEl);
    $("#day-two-img").append(dayTwoImg);
    $("#day-two-temp").text(dayTwoTemp + "°");
    $("#day-two-hum").text(dayTwoHum + " %");
    //DAY 3
    var dayThreeEl = moment().add(3, "days").format("M/D");
    var dayThreeIcon = data.list[16].weather[0].icon;
    var dayThreeImg = $("#day-three-img").attr(
      "src",
      "http://openweathermap.org/img/w/" + dayThreeIcon + ".png"
    );
    var dayThreeTemp = data.list[16].main.temp;
    var dayThreeHum = data.list[16].main.humidity;

    $(".day-three-date").text(dayThreeEl);
    $("#day-three-img").append(dayThreeImg);
    $("#day-three-temp").text(dayThreeTemp + "°");
    $("#day-three-hum").text(dayThreeHum + " %");
    //DAY 4
    var dayFourEl = moment().add(4, "days").format("M/D");
    var dayFourIcon = data.list[24].weather[0].icon;
    var dayFourImg = $("#day-four-img").attr(
      "src",
      "http://openweathermap.org/img/w/" + dayFourIcon + ".png"
    );
    var dayFourTemp = data.list[24].main.temp;
    var dayFourHum = data.list[24].main.humidity;

    $(".day-four-date").text(dayFourEl);
    $("#day-four-img").append(dayFourImg);
    $("#day-four-temp").text(dayFourTemp + "°");
    $("#day-four-hum").text(dayFourHum + " %");
    //DAY 5 - NOT READING IN OPEN WEATHER API
    var dayFiveEl = moment().add(5, "days").format("M/D");
    var dayFiveIcon = data.list[32].weather[0].icon;
    var dayFiveImg = $("#day-five-img").attr(
      "src",
      "http://openweathermap.org/img/w/" + dayFiveIcon + ".png"
    );
    var dayFiveTemp = data.list[32].main.temp;
    var dayFiveHum = data.list[32].main.humidity;

    $(".day-five-date").text(dayFiveEl);
    $("#day-five-img").append(dayFiveImg);
    $("#day-five-temp").text(dayFiveTemp + "°");
    $("#day-five-hum").text(dayFiveHum + " %");

    $("#searchtext").val("");
  });
}
