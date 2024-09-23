<template>
  <header>
    <div class="new-logo">
      <img src="@/assets/NewLogo.png" alt="weather-plus" id="plus">
    </div>
    <div class="zipcode">
      <input 
        id="zip-input" 
        type="text" 
        v-model="zipCode" 
        @keyup.enter="emitZipCode" 
        placeholder="Enter your zip code" 
      />
    </div>
  </header>

  <!-- Pass the zipCode as a prop to HomeView via RouterView -->
  <RouterView :zipCode="zipCode" />
</template>

<script setup>
import { ref } from 'vue';

const zipCode = ref('');

// Emit zip code only when Enter key is pressed
const emitZipCode = () => {
  if (zipCode.value.length === 5) { // Make sure zipCode is valid (5 characters)
    console.log(`Zip code entered: ${zipCode.value}`); // Debugging log
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');


body,
html {
  margin: 0;
  padding: 0;

}

body {
  background: linear-gradient(to bottom, rgb(225, 230, 241), rgb(15, 47, 79));
  height: auto;


}


/* Style for the zipcode input */
.zipcode {
  justify-self: center;
  /* Centers the zipcode input in the middle */
  display: flex;
  flex-direction: column;
  align-items: center;
}

#zip-input {
  width: 30rem;
  height: 3rem;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  font-family: roboto;
  font-size: 1.5rem;
}

/* Style for the logo container */
.new-logo {
  justify-self: start;
  /* Aligns the logo to the far left */
  padding-left: 20px;
  /* Adds some padding for aesthetics */
  margin-left: 5rem;
}

h1 {
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

header {
  background-color: rgb(15, 47, 79);
  /* background: linear-gradient(to right, rgb(202, 142, 29), #feb47b); */
  width: 100%;
  /* Full viewport width */
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


#plus {
  width: 100%;
  height: auto;
}

/* footer  {
  background-color: white;
  color: white; 
  height: 13rem; 
  width: 100vw; 
  position: absolute; 

} */


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
