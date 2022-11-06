export const resJSON = <T>(
  json: T,
  statusCode?: number,
  headers?: HeadersInit
) => {
  return new Response(JSON.stringify(json), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...headers,
    },
    status: statusCode,
  })
}
