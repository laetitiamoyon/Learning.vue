import axios from "axios";

const getPlayers =  async () =>
  (await axios.get('https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json'))
    .data.players;

export default getPlayers


