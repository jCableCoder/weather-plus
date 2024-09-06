<template>
    <div class="jod-container">
        <div class="marquee-container">
            <div id="marquee-text">Joke of the Day</div>
            <hr id="rule"/>
        </div>
        <h2 id="joke">{{ joke }}</h2>
    </div>

</template>

<script>
import jokeService from '../services/JokeService'

export default {
    data() {
        return {
            joke: ''
        }
    },
    created() {
        jokeService.getRandomJoke()
            .then((response) => {
                this.joke = response.data;
            })
    }


}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.jod-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;
    border-radius: 8px;
    background: var(--color-background);
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 1.2rem;
    color: var(--color-text);
    width: auto;
    height: 80%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 3rem;     
}

.marquee-container {
  width: 100%;          
  overflow: hidden;      /* Hides the text when it moves out of the container */
 /*  background-color: #f9f9f9;
  border: 1px solid #ccc; */
  padding: 0;
}

#marquee-text {
  display: inline-block;  /* Inline block to allow horizontal scrolling */
  white-space: nowrap;    /* Prevents text from wrapping to the next line */
  animation: crawl 15s linear infinite; /* Crawl effect: duration, speed, and infinite loop */
  font-size: 2rem;
  font-family: roboto; 
  font-weight: bold; 
  color: black; 
  margin-top: 0;  
  margin-bottom: 4rem;
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
    margin-top: 20px; 

}









</style>