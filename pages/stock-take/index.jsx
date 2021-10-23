import axios from "axios"
import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"

export default function StockTake() {
    const router = useRouter(useRouter)

    useEffect(async () => {
        const getData = await axios.get('/api/search', { baseURL: process.env.BASE_URL })
    }, [])

    return <div className='animate-fade w-full relative'>StockTake</div>
}