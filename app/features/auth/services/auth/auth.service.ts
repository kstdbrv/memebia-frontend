import {backendServiceSingleton, HttpService} from "@features/common/services/http/http.service"
import {
  LoginRequest,
  LoginResponse,
  RefreshRequest,
  RefreshResponse,
} from "@features/auth/services/auth/auth.types"

export class AuthService {
  constructor(private readonly httpService: HttpService = backendServiceSingleton) {}

  async refreshToken(payload: RefreshRequest): Promise<RefreshResponse> {
    const response = await this.httpService.post<RefreshResponse>("/auth/refresh", payload)
    return response.data
  }

  async login(payload: LoginRequest): Promise<LoginResponse> {
    const response = await this.httpService.post<LoginResponse>("/auth/login", payload)
    return response.data
  }
}

export const authServiceSingleton = new AuthService()
