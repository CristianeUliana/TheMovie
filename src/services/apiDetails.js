import axios from 'axios';

const apiDetails = axios.create({
   baseURL: 'https://api.themoviedb.org/3/movie/454626?api_key=6f6ac16c48e86c7c1e800a462c1c1c4b&language=pt-BR'
   //baseURL: 'https://api.themoviedb.org/3'
});


export default apiDetails;

