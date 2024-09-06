<!-- I want TheWeather to be a child of WeatherView  -->

<!-- There is a three-step process make a Vue file the parent of another one:
1. Add it to the template.
2. Tell the file where to find it (import)
3. Tell the file it's a child of another (export) -->
<template>
    <div>
        <the-weather></the-weather>
    </div>
</template>

<script>
/* import TheWeather from '../components/TheWeather.vue'
export default {
    components: {
        TheWeather
    }
} */
</script>

<style></style>