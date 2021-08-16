import {AxiosError, AxiosRequestConfig} from "axios"

const BLACK_LIST_401 = ["/api/login"]

export function needToRefreshTokens(error: AxiosError): boolean {
  const originalRequest: AxiosRequestConfig & {_retry?: boolean} = error.config

  const urlIn401BlackList = originalRequest.url && BLACK_LIST_401.includes(originalRequest.url)
  const isAlreadyRetried = originalRequest._retry
  const is401Error = error.response?.status === 401

  return is401Error && !urlIn401BlackList && !isAlreadyRetried
}
