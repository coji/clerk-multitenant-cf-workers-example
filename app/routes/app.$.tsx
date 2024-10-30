import { useParams } from '@remix-run/react'

export default function AppIndexPage() {
  const params = useParams()

  return (
    <div className="p-2">
      <h1 className="ml-8 text-2xl font-semibold capitalize">{params['*']}</h1>
    </div>
  )
}
