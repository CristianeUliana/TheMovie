import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3000'
    baseURL: 'https://api.themoviedb.org/3/trending/movie/week?api_key=6f6ac16c48e86c7c1e800a462c1c1c4b&language=pt-BR'
});

export default api;