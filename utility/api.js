import axios from 'axios'

const method = {
  url:
    process.env.NODE_ENV !== 'production'
      ? process.env.NEXT_PUBLIC_API_URL_LOCAL
      : process.env.NEXT_PUBLIC_API_URL_LIVE
}
export default method
export const gallaryURL = {
  url:
    process.env.NODE_ENV !== 'production'
      ? process.env.NEXT_PUBLIC_GALLARY
      : process.env.NEXT_PUBLIC_GALLARY_LIVE
}
export const apiFetch = async url => await (await fetch(`${url}`)).json()
export const apiSSR = async (url, data, method) => {
  // Get current host to determine which API url to use
  const apiURL =
    process.env.NODE_ENV !== 'production'
      ? process.env.NEXT_PUBLIC_API_URL_LOCAL
      : process.env.NEXT_PUBLIC_API_URL_LIVE

  const res = await fetch(`${apiURL}${url}`, {
    method: method,
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const body = await res.json()

  // const obj = {
  //   data: {
  //     ...body,
  //     status: res.status,
  //     headers: res.headers,
  //     ok: res.ok,
  //     redirected: res.redirected,
  //     statusText: res.statusText,
  //     type: res.type,
  //     url: res.url
  //   }
  // };
  return body
}
