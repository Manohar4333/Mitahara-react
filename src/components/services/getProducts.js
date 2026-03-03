import axios from 'axios'

const BASE_URL = 'http://localhost:4300/products'

export const getProducts = async () =>{
    const response = await axios.get(
        `${BASE_URL}`
    );
    return response.data
}