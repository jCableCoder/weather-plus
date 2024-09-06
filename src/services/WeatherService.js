/* This is where we put the code that will let us talk to the API 
We use the axios library to make HTTP requests to the weather API.
*/

import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_WEATHER_URL
});
const KEY = import.meta.env.VITE_API_KEY;

export default {
    getWeather(zipCode) {
        return http.get(`current.json?key=${KEY}&q=${zipCode}&aqi=no`);
    }
}