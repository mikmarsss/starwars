import axios from 'axios'
export const APi_URL = 'https://swapi.dev/api'

const $api = axios.create({
    baseURL: APi_URL
})

export default $api;