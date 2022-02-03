import axios from 'axios'

export const url = 'http://localhost:3001/players'
export const configuration  = { headers : { 'Content-Type' : 'application/json' } }

export const getAllPlayers = async () =>
    (await axios.get(url, configuration)).data

export const addPlayers = async (player) =>
    (await axios.post(url, player, configuration)).data

export const deletePlayers = async (id) =>
    (await axios.delete(`${url}/${id}`, configuration)).data