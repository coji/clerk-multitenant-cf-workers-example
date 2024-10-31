import {
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
  data,
} from '@remix-run/cloudflare'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const json = await request.json()
  return data({
    method: request.method,
    headers: request.headers,
    url: request.url,
    json,
  })
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const json = await request.json()
  return data({
    method: request.method,
    headers: request.headers,
    url: request.url,
    json,
  })
}
