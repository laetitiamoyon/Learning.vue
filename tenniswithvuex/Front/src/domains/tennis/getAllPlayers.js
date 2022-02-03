import axios from 'axios'

export const url = 'http://localhost:3001/players'
export const configuration  = { headers : { 'Content-Type' : 'application/json' } }

export const getAllPlayers = async () =>
    (await axios.get(url, configuration)).data