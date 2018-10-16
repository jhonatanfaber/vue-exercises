import axios from "axios"

const usersAPI = axios.create({
    baseURL: 'http://localhost:3000'
});

export default usersAPI
