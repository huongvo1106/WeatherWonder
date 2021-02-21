var city = ["College Station"];
var i = 0;
while(i < city.length) {
    var c = city[i];
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ c + "&APPID=341a4a13095ef9d09bc38f9c57c48482", 
        function(data) {
        console.log(data);
        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var weather = data.weather[0].main;
        var temp = data.main.temp;
            temp = (temp - 273.15)* 1.8 + 32;
            temp = temp.toFixed(1);
        


        $(".icon").attr('src', icon);
        $(".weather").append(weather);
        $(".temp").append(temp + "F");
    
        }
    );
    i++;
}

