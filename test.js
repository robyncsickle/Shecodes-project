let currentTime = new Date();

let currentHour = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();

if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}

function createDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  return currentDay;
}

let h2 = document.querySelector("#date");
h2.innerHTML = `${createDate(currentTime)} ${currentHour}:${currentMinutes}`;

//Change this so that the city will show on the page instead of being logged to console
function searchEngine(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  searchCity(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchEngine);

function showCurrentCity(response) {
  let temperature = Math.round(response.data.main.temp);
  let newTemperature = document.querySelector("#main-day");
  newTemperature.innerHTML = `${temperature}`;
  let city = response.data.name;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${city}`;
}

function searchCity(city) {
  let apiKey = "5d55b95d0c36fece015dcc6a56ce0686";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentCity);
}
