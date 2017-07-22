$(document).ready(function () {
    function date_time() {
        var mydate = new Date();
        var day = mydate.getDay();
        var date = mydate.getDate();
        var month = mydate.getMonth();
        var dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        $('#date').html('<p class="date">' + date + '</p>');
        $('#date').append('<p class="month">' + monthArr[month] + '</p>');
        $('#date').append('<p class="day">' + dayArr[day] + '</p>');

        var currentTime = new Date();
        var h = currentTime.getHours();
        var m = currentTime.getMinutes();
        if (h == 24) {
            h = 0;
        } else if (h > 12) {
            h = h - 0;
        }
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        $('.time').html(h + ':' + m);
    }
    date_time();
    $.getJSON('https://freegeoip.net/json/').done(function (location) {

        var img = [
            'images/Thunder.jpg',
            'images/rain.jpg',
            'images/rain.jpg',
            'images/snow.png',
            'images/fog.jpg',
            'images/sunny-weather.jpg',
            'images/clouds.jpeg',
            'images/tornado.jpg'
        ];

        var api = 'http://api.openweathermap.org/data/2.5/weather?q=' + location.city + '&appid=be8da95ce9d52803b2002ed73f623743&units=metric';
        $.getJSON(api, function (data) {
            var temp = Math.round(data.main.temp);
            $(".temperature").html('<div class="tm">' + temp + '&deg;C</div>');
            var icon = data.weather[0].icon;
            var weather_icons = 'http://openweathermap.org/img/w/' + icon + '.png';
            $("#icon").html('<img src="' + weather_icons + '">');

            var city = data.name;
            $("#name").html(city);

            var description = data.weather[0].description;
            $('<p>', {class: 'description',
                text: description,
                style: 'text-transform:capitalize;'
            }).appendTo('.display');

            $('<div>',{class:'line'}).appendTo('.display');

            var humidity = data.main.humidity;
            $('<p>', {class: 'humidity',
                text: 'humidity: ' + humidity + ' %',
                style: 'text-transform:capitalize;'
            }).appendTo('.display');

            var wind_speed = data.wind.speed;
            $('<p>', {class: 'w_speed',
                text: 'wind speed: ' + wind_speed + ' m/s',
                style: 'text-transform:capitalize;'
            }).appendTo('.display');


            var id = data.weather[0].id,
                    bgIndex,
                    bgId = [299, 399, 599, 699, 799, 800, 899, 900];
            bgId.push(id);
            bgIndex = bgId.sort().indexOf(id);
            $('.display').css('background-image', 'url(' + img[bgIndex] + ')');
        });
    });
});


