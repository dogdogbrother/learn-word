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
}
export function useGetFetch<ResProp = any>(config: GetFetchProp) {
  const { url, query = {} } = config
  const api = queryString.stringifyUrl({ url, query })
  return fetch(api, {
    headers: new Headers({
      Authorization: `Bearer ${getToken()}`,
    }),
  }).then((res) => {
    const { status } = res
    if (status >= 200 && status < 300) {
      return res.json() as ResProp
    } else if (status === 401) {
      alert('未登录')
    } else {
      alert('网络错误')
    }
  })
}

export function usePostFetch<ResProp = any>(config: PostFetchProp) {
  const { url, data = {} } = config
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    }),
  }).then((res) => {
    const { status } = res
    if (status >= 200 && status < 300) {
      console.log(res)
      return res.json() as ResProp
    }
    return Promise.reject(res)
  })
}
