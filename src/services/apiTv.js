import axios from 'axios';

const apiTv = axios.create({
    baseURL: 'http://localhost:8080'
});

export default apiTv;


