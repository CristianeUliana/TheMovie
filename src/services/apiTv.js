import axios from 'axios';

const apiTv = axios.create({
    //baseURL: 'http://localhost:8080'
    baseURL: 'https://api.themoviedb.org/3/trending/tv/week?api_key=6f6ac16c48e86c7c1e800a462c1c1c4b&language=pt-BR'
});

export default apiTv;


