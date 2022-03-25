// alert('working!')

const weather = {
    apiKey: "9341061d52c9451f81d92002222503",
    fetchWeather:  function(name) {
        fetch(`http://api.weatherapi.com/v1/current.json?key=9341061d52c9451f81d92002222503&q=${name}&aqi=yes`
         )
        .then( (response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
       const { name } = data.location;
       const { icon,  text} = data.current.condition;
       const { humidity} =data.current;
       const {temp_c,wind_kph} = data.current;
       console.log(name, icon, text, temp_c, humidity, wind_kph);

       document.querySelector('.city').innerText = " Weather in " + name;
       document.querySelector('.icon').src =  `${icon}`;
       document.querySelector('.description').innerText = text;
       document.querySelector('.temp').innerText = temp_c + '°C';
       document.querySelector('.humidity').innerText =  "Humidity:  " + humidity  + "%";
       document.querySelector('.wind').innerText = "Wind speed:  " + wind_kph + "km/hr";
       document.querySelector('.weather').classList.remove('loading');
       document.body.style.backgroundImage = "url('https:/source.unsplash.com/1600x900/?" + name + "')"
    },

    search:  function ()  {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector('.submit').addEventListener('click',  function () {
  weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', function (event){
    if (event.key == 'Enter') {
        weather.search();
    }
});


weather.fetchWeather('Tokyo')
