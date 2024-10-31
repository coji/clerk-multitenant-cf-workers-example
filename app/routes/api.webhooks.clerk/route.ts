import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from '@remix-run/cloudflare'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const json = await request.json()
  return {
    method: request.method,
    headers: request.headers,
    url: request.url,
    json,
  }
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const json = await request.json()
  return {
    method: request.method,
    headers: request.headers,
    url: request.url,
    json,
  }
}
