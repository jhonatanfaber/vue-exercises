import axios from "axios"

const getStocks = axios.get("https://stock-traider.firebaseio.com/data.json")
    .then(response => {
        return response.data

    })
    .catch(error => {
        return error

    })

export const data = {
    getStocks
}