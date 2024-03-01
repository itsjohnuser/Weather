// const apikey = "46f80a02ecae410460d59960ded6e1c6";
const apikey = "efdf20cb581e972282b514bd5c3c638f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");
const iconImg = document.getElementById("iconimg");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(apiurl + cityValue + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    

    weatherDataEl.querySelector(".icon").innerHTML = "data.weather[0].icon";
    //iconImg.innerHTML = "";
    weatherDataEl.querySelector(".description").innerHTML = data.weather[0].description;
    weatherDataEl.querySelector(".city").textContent = data.name;
    weatherDataEl.querySelector(".humidity").textContent = data.main.humidity;
    weatherDataEl.querySelector(".temp").textContent = data.main.temp;
    weatherDataEl.querySelector(".feels_like").textContent = data.main.feels_like;
    weatherDataEl.querySelector(".pressure").textContent = data.main.pressure;

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

  } 
  catch (error) {
      console.log("An error happened, please try again later");
  }
}

getWeatherData();