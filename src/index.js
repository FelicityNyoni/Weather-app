function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let temperature = response.data.temperature.current;
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

    iconElement.innerHTML =` <img src="${response.data.condition.icon_url}" class="weather-icon"/>`;
    descriptionElement.innerHTML = response.data.condition.description;
    temperatureElement.innerHTML = Math.round(temperature);
    timeElement.innerHTML = formatDate(date);
    cityElement.innerHTML = response.data.city;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`;

    getForecast(response.data.city); 
}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday",
    ];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes= `0${minutes}`;
    }
    return `${day} ${hours}:${minutes},`;
}

function searchCity(city){
  let apiKey = "ab9dbat743ca61fc97fbb6cb364o3017";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function getForecast(city) {
    let apiKey = "ab9dbat743ca61fc97fbb6cb364o3017";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
    let days =["Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastHtml = "";

    days.forEach (function (day) {
        forecastHtml = 
        forecastHtml +
        ` <div class="weather-forecast-day">
      <div class="weather-forecast-date">
        ${day}
      </div>
      <div class="weather-forecast-icon">
         🌤️
      </div>
      <div class="weather-forecast-temperatures">
        <div class="weather-forecast-temperature"><strong>15°</strong></div>
        <div class="weather-forecast-temperature">9°</div>
      </div>
     </div>`;
    });

    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
    
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-form-input");

    searchCity(searchFormInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Polokwane");