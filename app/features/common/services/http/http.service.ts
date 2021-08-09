import AxiosLibrary, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios"

export class HttpService {
  constructor(private readonly axiosService = AxiosLibrary.create()) {}

  get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosService
      .get(url)
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  post<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosService
      .post(url, data, config)
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosService
      .patch(url, data, config)
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<number | void> {
    return this.axiosService
      .delete(url, config)
      .then(response => response.status)
      .catch(error => console.log(error))
  }

  head<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosService
      .head(url, config)
      .then(response => response.headers)
      .catch(error => console.log(error))
  }

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosService
      .put(url, data, config)
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  options<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosService
      .options(url, config)
      .then(response => response.headers)
      .catch(error => console.log(error))
  }

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosService
      .request(config)
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  addRequestInterceptor(
    onFulfilled?: (value: AxiosRequestConfig) => Promise<AxiosRequestConfig> | AxiosRequestConfig,
    onRejected?: (error: unknown) => unknown,
  ): number {
    return this.axiosService.interceptors.request.use(onFulfilled, onRejected)
  }

  removeRequestInterceptor(id: number): void {
    this.axiosService.interceptors.request.eject(id)
  }

  addResponseInterceptor(
    onFulfilled?: (value: AxiosResponse) => Promise<AxiosResponse> | AxiosResponse,
    onRejected?: (error: AxiosError) => AxiosError | Promise<AxiosError | AxiosResponse>,
  ): number {
    return this.axiosService.interceptors.response.use(onFulfilled, onRejected)
  }

  removeResponseInterceptor(id: number): void {
    this.axiosService.interceptors.response.eject(id)
  }
}
