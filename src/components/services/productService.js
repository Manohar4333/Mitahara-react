import axios from 'axios'

const BASE_URL = 'http://localhost:4300/products'

export const getProductsByCategory = async (category) =>{
    const response = await axios.get(
        `${BASE_URL}/${category}`
    );
    return response.data
}