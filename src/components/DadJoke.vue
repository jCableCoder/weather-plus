<template>
    <div class="jod-container">
        <div class="marquee-container">
            <div id="marquee-text">Joke of the Day</div>
            <hr id="rule" />
        </div>
        <h2 id="joke">{{ joke }}</h2>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import jokeService from '../services/JokeService';

export default {
    setup() {
        // Declare reactive variable
        const joke = ref('');

        // Fetch the random joke on component mount
        const fetchJoke = () => {
            jokeService.getRandomJoke()
                .then((response) => {
                    console.log(response.data); // Log to check the API response structure
                    joke.value = response.data; // Use response.data or response.data.joke based on API
                })
                .catch((error) => {
                    console.error('Error fetching joke:', error);
                });
        };

        // Fetch joke on component mount
        onMounted(() => {
            fetchJoke();
        });

        // Return the joke so it's available in the template
        return {
            joke,
        };
    },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.jod-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10rem auto 4rem auto; 
    border-radius: 8px;
    background-color: white; 
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.523);
    text-align: center;
    font-size: 1.2rem;
    color: var(--color-text);
    width: 60%;
    height: 80%;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 3rem;
    padding-top: 1rem;     
}

.marquee-container {
  width: 100%;          
  overflow: hidden;      /* Hides the text when it moves out of the container */
 /*  background-color: #f9f9f9;
  border: 1px solid #ccc; */
  padding-top: 2rem;
}

#marquee-text {
  display: inline-block;  /* Inline block to allow horizontal scrolling */
  white-space: nowrap;    /* Prevents text from wrapping to the next line */
  animation: crawl 15s linear infinite; /* Crawl effect: duration, speed, and infinite loop */
  font-size: 2.5rem;
  font-family: roboto; 
  font-weight: bold; 
  color: black; 
  margin-top: 0;  
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(132, 41, 41, 0.2); 
}

@keyframes crawl {
  0% {
    transform: translateX(100%); /* Start outside the right of the container */
  }
  100% {
    transform: translateX(-100%); /* End outside the left of the container */
  }
}

#rule {
    width: 100%;
    margin-top: 0;
    margin-bottom: 50px;
}

#joke {
    font-weight: bold;
    font-size: 1.5rem;
    color: black;
    text-align: center;
    font-family: roboto; 
    font-style: italic; 
    /* text-shadow: 2px 2px 4px rgba(132, 41, 41, 0.2);  */
    margin-top: 10px; 
    margin-bottom: 2rem; 

}

</style>