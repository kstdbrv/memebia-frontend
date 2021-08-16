import {backendServiceSingleton, HttpService} from "@features/common/services/http/http.service"

export class AuthService {
  constructor(private readonly httpService: HttpService = backendServiceSingleton) {}

  // create types in auth.types.ts
  async refreshToken(payload: {
    token: string
  }): Promise<{accessToken: string; refreshToken: string}> {
    // use httpService to make requests and return new tokens
    return {
      accessToken: "",
      refreshToken: "",
    }
  }

  // create types in auth.types.ts
  async login(payload: {
    email: string
    password: string
  }): Promise<{accessToken: string; refreshToken: string}> {
    // use httpService to make requests and return new tokens
    return {
      accessToken: "",
      refreshToken: "",
    }
  }
}

export const authServiceSingleton = new AuthService()
