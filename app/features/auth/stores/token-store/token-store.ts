import {backendServiceSingleton, HttpService} from "@features/common/services/http/http.service"
import {
  KeychainService,
  keychainServiceSingleton,
} from "@features/auth/services/keychain/keychain.service"
import {KeychainTokens} from "@features/auth/services/keychain/keychain.types"
import {
  LoggerService,
  loggerServiceSingleton,
} from "@features/common/services/logger/logger.service"
import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios"
import {action, makeObservable, observable, runInAction} from "mobx"
import {AuthService, authServiceSingleton} from "../../services/auth/auth.service"
import {needToRefreshTokens} from "@features/auth/stores/token-store/token-store.utils"

const BACKEND_HTTP_AUTH_HEADER = "Authentication"

/**
 * Tokens store
 * TS doesn't have ability to hide package from other packages,
 * so please use this service only throw auth service
 */
export class TokensStore {
  @observable
  private accessToken?: string | null

  constructor(
    private readonly authService: AuthService = authServiceSingleton,
    private readonly httpService: HttpService = backendServiceSingleton,
    private readonly keychain: KeychainService = keychainServiceSingleton,
    private readonly loggerService: LoggerService = loggerServiceSingleton,
  ) {
    makeObservable(this)
    this.addAccessTokenToHeader()
    this.refreshTokenIfAccessTokenIsExpired()
  }

  @action
  async saveTokens(tokens: KeychainTokens): Promise<void> {
    await this.keychain.saveTokens(tokens)
  }

  @action
  async restoreTokens(): Promise<boolean> {
    await this.refreshTokens()
    return !!this.accessToken
  }

  @action
  async refreshTokens(): Promise<void> {
    const refreshToken = await this.keychain.getRefreshToken()
    if (refreshToken) {
      const tokens = await this.authService.refreshToken({
        token: refreshToken,
      })
      await this.keychain.saveTokens({
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      })
      runInAction(() => {
        this.accessToken = tokens.accessToken
      })
    }
  }

  @action
  async clear(): Promise<void> {
    this.accessToken = null
    await this.keychain.clear()
  }

  private addAccessTokenToHeader(): void {
    this.httpService.addRequestInterceptor(config => {
      if (this.accessToken) {
        config.headers[BACKEND_HTTP_AUTH_HEADER] = this.accessToken
      }
      return config
    })
  }

  private refreshTokenIfAccessTokenIsExpired(): void {
    this.httpService.addResponseInterceptor(
      response => response,
      async (error: AxiosError): Promise<AxiosError | AxiosResponse> => {
        const originalRequest: AxiosRequestConfig & {_retry?: boolean} = error.config
        if (needToRefreshTokens(error)) {
          originalRequest._retry = true
          try {
            await this.refreshTokens()
            return this.httpService.request(originalRequest)
          } catch (e) {
            this.loggerService.error(e)
          }
        }
        return Promise.reject(error)
      },
    )
  }
}

export const tokensStoreSingleton = new TokensStore()
