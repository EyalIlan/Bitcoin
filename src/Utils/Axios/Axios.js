
import Axios from 'axios'

export const coinsRequest = Axios.create({
    baseURL:'http://localhost:1880/'
})