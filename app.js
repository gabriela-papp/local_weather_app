     $(document).ready(function(){
                $.getJSON('https://freegeoip.net/json/').done(function(location){
                   $("#data").html("latitude: "+ location.latitude+ "<br>longitude: "+ location.longitude);
                    });
                
            });
            var api ="http://api.openweathermap.org/data/2.5/weather?q=lat='+location.latitude+'&lon='+location.longitude+'&appid=712dd2f8f3ca3dfe13937b3fef907da6&units=metric";
            $.getJSON(api, function(data){
              var temp =data.main.temp;
              $(".temperature").html('<div>'+temp+' &deg; C</div>');
              var icon = data.weather[0].icon;  
              var weather_icons='http://openweathermap.org/img/w/'+icon+'.png';
               $("#icon").html('<img src="'+weather_icons+'">');
              var city =data.name;
               $("#name").html(city);
              var description=data.weather[0].description ;
               $("#description").html(description);
               var humidity =data.main.humidity;
               $("#humidity").html(humidity+' %');

            });