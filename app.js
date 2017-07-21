     $(document).ready(function(){
                $.getJSON('https://freegeoip.net/json/').done(function(location){
                   $("#data").html("latitude: "+ location.latitude+ "<br>longitude: "+ location.longitude);
                    });
                
            });
            var img=[
                'images/Thunder.jpg',
                'images/drizzle.jpg',
                'images/rain.jpg',
                'images/snow.png',
                'images/fog.jpg',
                'images/sunny-weather.jpg',
                'images/clouds.jpeg',
                'images/tornado.jpg'
                
            ];
           
            
            var api ="http://api.openweathermap.org/data/2.5/weather?q=lat='+location.latitude+'&lon='+location.longitude+'&appid=712dd2f8f3ca3dfe13937b3fef907da6&units=metric";
            $.getJSON(api, function(data){
              var temp =data.main.temp;
              $(".temperature").html('<div class="tm">'+temp+'&deg;C</div>');
              var icon = data.weather[0].icon;  
              var weather_icons='http://openweathermap.org/img/w/'+icon+'.png';
               $("#icon").html('<img src="'+weather_icons+'">');
              var city =data.name;
               $("#name").html(city);
              var description=data.weather[0].description ;
               $("#description").html(description);
               $("#description").css('text-transform',' capitalize');
               var humidity =data.main.humidity;
               $("#humidity").html('humidity: '+humidity+' %');
                $("#humidity").css('text-transform',' capitalize');
            
             var id=data.weather[0].id,
                bgIndex,
                bgId=[299,399,599,699,799,800,899,900];
                bgId.push(id);
                bgIndex=bgId.sort().indexOf(id);
                
                $('.display').css('background-image', 'url('+img[bgIndex]+')');
                });