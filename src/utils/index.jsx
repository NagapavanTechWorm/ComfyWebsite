import axios from 'axios';
const URL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
    baseURL:URL
});


export const formatPrice = (price)=>{
    const Dollar = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }).format((price/100).toFixed(2));
    return Dollar;
}