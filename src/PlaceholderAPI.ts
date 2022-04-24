import axios from "axios"

const BASE_API = 'https://jsonplaceholder.typicode.com/'

export const basicAxios = async (url: string) => {
    const response = await axios.get(`${BASE_API}${url}`)

    return response.data
}