import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { id, name } = router.query

    return <div className='bg-gray-500 bg-color-default'>
        <p>Post: {id + name}</p>
    </div>
}

export default Post