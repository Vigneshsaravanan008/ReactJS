import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const RegisterApi = async (data) => {
    try {
        const config = {
            method: "post",
            url: "/login",
        }
        const response = await axios(config)
        return response.data
    } catch (err) {
        console.error(err)
        return []
    }
} 