import axios, { AxiosInstance, AxiosRequestConfig }  from 'axios'


export default (baseURL: string, options: AxiosRequestConfig = {}): AxiosInstance => {
  const instance = axios.create({ baseURL, ...options })

  instance.interceptors.request.use(
    (config) => (config),
    (err) => {
      console.error('Error in API request:')
      console.error(JSON.stringify(err))
      return Promise.reject(err)
    },
  )

  instance.interceptors.response.use(
    (config) => (config),
    (err) => {
      console.error('Error in API response:')
      console.error(JSON.stringify(err))
      return Promise.reject(err)
    },
  )

  return instance
}
