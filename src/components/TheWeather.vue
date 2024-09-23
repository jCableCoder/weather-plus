<template>
    <div v-if="weatherData" class="weather-display">
      <div class="zipcode">
        <h2 id="today-weather">Today's weather for {{ weatherData.location.name }}, {{ weatherData.location.region }}!</h2>
        <p>Temperature: {{ weatherData.current.temp_f }} F</p>
        <p>Humidity: {{ weatherData.current.humidity }}%</p>
        <p>Wind Speed: {{ weatherData.current.wind_mph }} mph</p>
        <p>Current conditions: {{ weatherData.current.condition.text }}</p>
        <img :src="weatherData.current.condition.icon" id="weather-icon" alt="Weather icon">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      weatherData: Object, // Receive weather data from HomeView.vue
    },
  };
  </script>

<style>
.weather-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;
    margin-bottom: -4rem;
    padding: 3rem;
    border-radius: 8px;
    background: var(--color-background);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.523);
    text-align: center;
    font-size: 1.2rem;
    color: var(--color-text);
    width: 100%;
    height: 80%;
}

.get-it {
    background-color: rgb(15, 47, 79);
    border-radius: 20px;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 35px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
}

#get {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: white;
    font-weight: bold;
}


/* button {
    margin: 5px;
    font-family: roboto;
    font-size: 15px;
    height: 2.5rem;
    width: 8rem;
    border-radius: 5px;
    margin-left: 25px;
    margin-top: 20px;
} */

#input {
    height: 2.5rem;
    width: 10rem;
    border-radius: 5px;
    margin-left: 5px;
    text-align: left;
    font-size: 15px;
    padding-left: 20px;
}


.weather {
    background-color: white;
    margin-top: 20px;
}

#your-city {
    line-height: 1.5;
    font-family: roboto;
    font-size: 3rem;
    font-weight: bold;
    color: rgb(15, 47, 79);
}

#weather-rule {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
}

#current-date {
    font-weight: bold;
    font-size: 1.5rem;
    color: black;
    text-align: center;
    font-family: roboto;
}

#today-weather {
    font-weight: bold;
    font-size: 3rem;
    color: rgb(15, 47, 79);
    text-align: center;
    font-family: roboto;
}

#weather-icon {
    width: 100px;
    height: 100px;
    margin-top: 1rem;
}

p {
    font-size: 1.5rem;
    color: black;
    text-align: center;
    font-family: roboto;
    margin-top: 0.5rem; 
}

</style>