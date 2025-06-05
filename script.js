const myapiKey = '4283fea570f1791a0da8ec708eaabf60';

let serachBtn = document.getElementById('searchBtn');
let cityInput = document.getElementById('cityInput');

serachBtn.addEventListener('click',() => {
    const city = cityInput.ariaValueMax.trim();
    if(city){
        getWeather(city);
        getForecast(city);
    }else{
        alert('Enter a city name or zip code.');
    }
});