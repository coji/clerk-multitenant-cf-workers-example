import { useParams } from '@remix-run/react'

export default function AppIndexPage() {
  const params = useParams()

  return (
    <div>
      <h1>{params['*']}</h1>
    </div>
  )
}
