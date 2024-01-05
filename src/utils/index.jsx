import axios from 'axios';
const URL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
    baseURL:URL
});