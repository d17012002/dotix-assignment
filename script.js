const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const geoLocationBox = document.querySelector('.geoLocation')
const unitSelect = document.getElementById('unitSelect');
const unitSelectBox = document.querySelector('.unit-selector');

const locationBtn = document.getElementById('locationBtn');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

const api_key = "8d7fc88a997f31d304421584d68a798e";

async function checkWeather(city, unit) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    unitSelectBox.style.display = "block";
    

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    // Use the selected unit symbol
    const unitSymbol = unit === 'metric' ? '°C' : '°F';
    temperature.innerHTML = `${Math.round(weather_data.main.temp)} ${unitSymbol}`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;
    weather_img.src = `http://openweathermap.org/img/w/${weather_data.weather[0].icon}.png`

    console.log(weather_data);
}


const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        async position => {
            const { latitude, longitude } = position.coords;

            const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${api_key}`;
            const response = await fetch(API_URL);
            const data = await response.json();

            if (data.length > 0) {
                console.log(data);
                const { name , state} = data[0];
                const cityName = name.split(" ");
                geoLocationBox.innerHTML = `${name}, ${state}`
                checkWeather(cityName[0], unitSelect.value);
            } else {
                alert("Could not determine the city name from your location.");
            }
        },
        error => {
            if (error.code === error.PERMISSION_DENIED) {
                alert("Geolocation request denied. Please reset location permission to grant access again.");
            } else {
                alert("Geolocation request error. Please reset location permission.");
            }
        }
    );
}

searchBtn.addEventListener('click', () => {
    geoLocationBox.innerHTML = ``;
    checkWeather(inputBox.value, unitSelect.value);
});

locationBtn.addEventListener('click', () => {
    getUserCoordinates();
});


unitSelect.addEventListener('change', () => {
    const selectedUnit = unitSelect.value;
    const city = inputBox.value;
    if(city === "") {
        getUserCoordinates();
    }
    else {
        checkWeather(city, selectedUnit);
    }
});
