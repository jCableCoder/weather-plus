<template>

  <div class="grid-container">  
    <!-- Use TheWeather and DadJoke components -->
    <TheWeather />
    <DadJoke />
  </div>
</template>

<script>
import TheWeather from '../components/TheWeather.vue';
import DadJoke from '../components/DadJoke.vue';

export default {
  components: {
    TheWeather,
    DadJoke
  }
}
</script>

<style>


.grid-container {
  display: grid;
  grid-template-columns: 2fr 2fr; /* Two equal-width columns */
  gap: 300px; /* Space between the columns */
  padding: 20px; /* Adds padding around the grid */
  margin-top: 120px;
  margin-bottom: 50px; 
}

</style>