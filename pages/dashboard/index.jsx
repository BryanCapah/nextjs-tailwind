import axios from "axios";

const kontol = async () => {
    const result = await axios.get('api/search')
    if (result?.data) {
        console.log(result);
    }
}

export default function Dashboard() {
    return (
        <div className='animate-fade w-full relative'>
            Dashboard
        </div>
    )
}
