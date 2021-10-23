import { useRouter } from "next/dist/client/router"

function logic(router) {
  const a = 0
  if (a === 0) router.push('/dashboard')
}

export default function Main() {
  const router = useRouter()

  return (
    <div className='container'>
      <button onClick={() => logic(router)}>do</button>
      <a>Root</a>
    </div>
  )
}
