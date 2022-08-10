import axios from 'axios'

const instance = axios.create({
    baseURL: "https://dating-mern-app-bck.herokuapp.com"
})

export default instance;