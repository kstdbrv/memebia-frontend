export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  expiresIn: number
  refreshToken: string
}

export interface RefreshRequest {
  token: string
}

export interface RefreshResponse {
  accessToken: string
  expiresIn: number
  refreshToken: string
}
