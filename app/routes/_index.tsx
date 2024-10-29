import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { json, useLoaderData } from '@remix-run/react'

export const loader = ({ context }: LoaderFunctionArgs) => {
  return {
    message: 'hello',
  }
}

export default function Index() {
  const { message } = useLoaderData<typeof loader>()

  return <div>{message}</div>
}
