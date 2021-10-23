import axios from "axios";

const axiosConfig = {
    baseURL: process.env.BASE_URL,
    headers: { sessionId: 'tes' }
}

export default async function search(req, res) {
    const result = await axios.get('jokes/random', axiosConfig)
    res.json(result?.data)
}