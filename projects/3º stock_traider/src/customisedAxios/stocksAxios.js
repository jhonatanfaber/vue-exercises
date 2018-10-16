import axios from "axios"

const stocksAPI = axios.create({
    baseURL: 'https://stock-traider.firebaseio.com'
});

export default stocksAPI
