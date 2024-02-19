import queryString, { StringifiableRecord } from 'query-string'
function getToken() {
  return localStorage.getItem('token')
}
interface GetFetchProp {
  url: string
  query?: StringifiableRecord
}
interface PostFetchProp {
  url: string
  data?: object
  method?: 'POST' | 'DELETE'
}
export function useGetFetch<ResProp = any>(config: GetFetchProp) {
  const { url, query = {} } = config
  const api = queryString.stringifyUrl({ url, query })
  return fetch(api, {
    headers: new Headers({
      Authorization: `Bearer ${getToken()}`,
    }),
  }).then(async (res) => {
    const { status } = res
    if (status >= 200 && status < 300) {
      return res.json() as ResProp
    } else if (status === 401) {
      return Promise.reject(await res.text())
    } else {
      return Promise.reject(await res.text())
    }
  })
}

export function usePostFetch<ResProp = any>(config: PostFetchProp) {
  const { url, data = {}, method = 'POST' } = config
  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: new Headers({
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    }),
  }).then(async (res) => {
    console.log(res)
    const { status, headers } = res
    if (status >= 200 && status < 300) {
      const contentType = headers.get('Content-Type')
      if (contentType && contentType.includes('application/json')) {
        return (await res.json()) as ResProp
      } else if (contentType && contentType.includes('text/plain')) {
        return await res.text()
      } else return Promise.reject('error: fetch封装报错')
    }
    return Promise.reject(await res.text())
  })
}
