<template>

   
    <div class="weather-display">
        <div class="get-it">
        <h1 id="get">↓ Get your weather here ↓</h1>
        </div>        
        <div class="zipcode">
            <label for="zipCode">Enter your zip code: </label>
            <input id="input" type="text" v-model="zipCode">
            <button @click="getWeatherByZip">Get Weather!</button>
        </div>
        <hr />
        <div v-show="isLoaded" class="weather">
            <h2 id="your-city">Today's weather for {{ location.name }}, {{ location.region }}!</h2>
            <!-- <p id="current-date">{{ currentDate }}</p> -->
            <hr id="weather-rule" />
            <p>Temperature: {{ current.temp_f }} F (feels like {{ current.feelslike_f }}    F) </p>
            <p>Humidity: {{ humidity }}%</p>
            <p>Wind Speed (mph): {{ current.wind_mph }}</p>
            <p>{{ text }}</p>
            <img :src="icon" alt="">
        </div>
    </div>
</template>

<script>

const currentDate = new Date().toLocaleDateString()
const currentTime = new Date().toLocaleTimeString()

import weatherService from '../services/WeatherService';

export default {

    data() {
        return {
            zipCode: '',
            current: {},
            text: '',
            icon: '',
            location: {},
            humidity: '',
            windSpeed: '',
            isLoaded: false
            
        }
    },
    methods: {
        getWeatherByZip() {
            weatherService.getWeather(this.zipCode)
                .then((response) => {
                    console.log(response.data);
                    this.current = response.data.current;
                    this.text = response.data.current.condition.text;
                    this.icon = response.data.current.condition.icon;
                    this.location = response.data.location;
                    this.humidity = response.data.current.humidity;
                    this.windSpeed = response.data.current.wind_mph;
                    this.isLoaded = true;
                })
        }
    },

    
}
</script>

<style>

.weather-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 8px;
    background: var(--color-background);
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 1.2rem;
    color: var(--color-text);
    width: 100%;
    height: 80%; 
    padding-top: 0px; 
    margin-bottom: 40px; 
}

.get-it {
    background-color: rgb(49, 119, 218);
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





button {
    margin: 5px;
    font-family: roboto;
    font-size: 15px;
    height: 2.5rem;
    width: 8rem;
    border-radius: 5px;
    margin-left: 25px;
    margin-top: 20px;
}

#input {
    height: 2.5rem;
    width: 10rem;
    border-radius: 5px;
    margin-left:    5px;
    text-align: left;
    font-size: 15px;
    padding-left: 20px;
}


.weather {
    background-color: white;
    margin-top: 20px;
}

#your-city  {
    line-height: 1.5; 
    font-family: roboto;
    font-size: 2rem;
    font-weight: bold; 
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

</style>