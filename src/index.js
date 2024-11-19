function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let temperature = response.data.temperature.current;
    
    temperatureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;
}

function searchCity(city){
  let apiKey = "ab9dbat743ca61fc97fbb6cb364o3017";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-form-input");

    searchCity(searchFormInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
