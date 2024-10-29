import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { json, Link, useLoaderData } from '@remix-run/react'

export const loader = ({ context }: LoaderFunctionArgs) => {
  return {
    message: 'hello',
  }
}

export default function Index() {
  const { message } = useLoaderData<typeof loader>()

  return (
    <div>
      <Link to="/sign-in">Sign in</Link>
    </div>
  )
}
