import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key: 'd99274e81bc240279dfad7a04e53b3e2'
    }
})