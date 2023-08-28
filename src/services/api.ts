import axios from 'axios';

export const api = axios.create({
    baseURL: "https://lancer-mobile.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})