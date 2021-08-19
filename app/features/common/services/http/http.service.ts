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
    return this.axiosService.post<T>(url, data, config)
  }

  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosService.patch<T>(url, data, config)
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<number | void> {
    return this.axiosService.delete(url, config)
  }

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosService.put<T>(url, data, config)
  }

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosService.request<T>(config)
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

export const backendServiceSingleton = new HttpService(
  AxiosLibrary.create({
    baseURL: "https://api.memebia.com",
  }),
)
