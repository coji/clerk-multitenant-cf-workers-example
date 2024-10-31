import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from '@remix-run/cloudflare'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const json = await request.json()
  const log = {
    method: request.method,
    headers: request.headers,
    url: request.url,
    json,
  }
  console.dir(log, { depth: null })
  return Response.json(log)
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const json = await request.json()
  const log = {
    method: request.method,
    headers: request.headers,
    url: request.url,
    json,
  }
  console.dir(log, { depth: null })
  return Response.json(log)
}
