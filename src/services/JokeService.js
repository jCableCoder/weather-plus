import axios from 'axios';

const http = axios.create ( {
    baseURL: import.meta.env.VITE_JOKE_URL

/*     This line creates a new Axios instance using axios.create(), 
    which allows you to set a base URL (VITE_JOKE_URL in this case). 
    This base URL is probably stored in your environment variables 
    and defines the API endpoint you’ll be making requests to. */
});

let header = {
    headers: {
        'Accept': 'text/plain'
    }

/* 
    The header object is being declared here, and it contains an Accept header, which specifies 
    that the response 
    from the server should be in plain text format ('text/plain').
    In this case:
        •	headers: The key for the request headers.
        •	'Accept': 'text/plain': The Accept header tells the server that the client is 
        expecting a plain text response (not JSON, HTML, or other formats). */


};

export default {
    getRandomJoke(){
        return http.get('', header);

    }
}