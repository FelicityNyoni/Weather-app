function searchCity(city){
    
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchFormInput.value;

    searchCity(searchFormInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
