type IParams = {
  [key: string]: string | number | boolean | [] | object
}
type IAPI = {
  // If a URL is provided, will use it and ignore the 'path', 'queryParams', and
  // 'hash' parameters.
  url: string
  method: import('axios').Method

  // If no URL is provided, these parameters will be used to construct the URL.
  config?: AxiosRequestConfig
}
type IError = {}
