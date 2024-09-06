
<template>
  <header>
    <img src="@/assets/Weather vane.png" alt="weather vane" id="vane" />
    <img src="@/assets/weather-plus-transparent (1).png" alt="weather-plus" id="plus">
    <img src="@/assets/Clouds.png" alt="clouds" id="clouds" />
    <nav>
      <!-- <RouterLink to="/">Home</RouterLink> -->
      <!-- <RouterLink to="/about">About</RouterLink> -->
      <!-- <router-link :to="{ name: 'weather' }">Weather</router-link> -->
    </nav>
  </header>




  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

h1  {
  font-family: 'Roboto', sans-serif;
  font-weight: bold; 
  font-size: 4rem;
  letter-spacing: 2px; 
  /* background: linear-gradient(to right, #efebea, #ffffff);
  -webkit-background-clip: text;
   background-clip: text; /* Add the standard property
  -webkit-text-fill-color: transparent;  
  -webkit-text-stroke: 1px black; For WebKit browsers  */
 
  color: white; 

}

body, html {
  margin: 0;
  padding: 0;
}

body  {
background-color: rgb(225, 230, 241);

 

}

header {
  background-color: rgb(49, 119, 218);
  /* background: linear-gradient(to right, rgb(202, 142, 29), #feb47b); */
  width: 100%; /* Full viewport width */
  height: 10rem; 
  margin-top: -40px;
  margin-bottom: 0px;
  z-index: auto; 
  position: absolute; 
  left: 0;   
  padding: 0;  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  align-items: center;
  color: white; 
  border: solid 2px black; 
}

footer   {
background-color: white; 

}

#vane  {
width: 25%;
height: 60%;
margin-bottom: 52px; 
margin-left: 200px; 
}

#clouds  {
  margin-left: 80px; 
  margin-bottom: 50px; 
}


#plus  {

width: 95%;
height: 95%;
margin-top: 10px; 

}




/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.page {
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* nav {
  width: 100%;
  font-size: 30px;
  font-family: 'Nerko One', cursive;   
  /* display: flex; } */


/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  
} */

</style>
