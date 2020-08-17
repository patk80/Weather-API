var city = "Orlando";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=a7591cead75c9bb631115c0b4be9695c", function(data){
    // console.log(data);
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather = data.weather[0].main;
    var temperature = Math.floor(data.main.temp) + "°F";
   
    $(".city").text(city);
    $(".icon").attr("src", icon);
    $(".weather").text(weather);
    $(".temperature").text(temperature);

});
