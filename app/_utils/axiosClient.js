import axios from "axios"; 

const apiKey = process.env.NEXT_PUBLIC_API_REST_API
const apiUrl = "http://localhost:1337/api"

const axiosClient = axios.create({
    baseURL: apiUrl, 
    headers: {
        Authorization : `Bearer ${apiKey}`
    } 
})
     
export default axiosClient