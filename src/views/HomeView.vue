<template>
  <TheWeather :weatherData="weatherData" />
  <DadJoke />
</template>

<script>
import TheWeather from '../components/TheWeather.vue';
import DadJoke from '../components/DadJoke.vue';
import { ref, watch } from 'vue';
import weatherService from '@/services/WeatherService';

export default {
  components: {
    TheWeather,
    DadJoke,
  },
  props: {
    zipCode: String, // Receive the zipCode from App.vue
  },
  setup(props) {
    const weatherData = ref(null); // Store the fetched weather data

    // Function to fetch weather data by zip code
    const getWeatherByZip = (zip) => {
      weatherService.getWeather(zip)
        .then((response) => {
          weatherData.value = response.data; // Store fetched weather data
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    };

    // Watch the zipCode prop and fetch weather only when it's set and "Enter" is pressed
    watch(() => props.zipCode, (newZipCode) => {
      if (newZipCode && newZipCode.length === 5) {
        console.log(`Fetching weather for: ${newZipCode}`); // Debugging log
        getWeatherByZip(newZipCode);
      }
    });

    return {
      weatherData,
    };
  },
};
</script>


<style>

footer {

  background-color: white;
  width: 100%;
  z-index: 3;

}
</style>