import {backendServiceSingleton, HttpService} from "@features/common/services/http/http.service"
import {TokensStore, tokensStoreSingleton} from "@features/auth/stores/token-store"
import {makeObservable, observable, runInAction} from "mobx"
import {AuthService, authServiceSingleton} from "@features/auth/services/auth/auth.service"

export class AuthStore {
  @observable
  isLogged: boolean | null = null

  constructor(
    private readonly authService: AuthService = authServiceSingleton,
    private readonly tokensStore: TokensStore = tokensStoreSingleton,
  ) {
    makeObservable(this)
  }

  async restoreSession(): Promise<void> {
    const hasToken = await this.tokensStore.restoreTokens()
    runInAction(() => {
      this.isLogged = hasToken
    })
  }

  async login(payload: {email: string; password: string}): Promise<void> {
    const tokens = await this.authService.login(payload)
    await this.tokensStore.saveTokens(tokens)
    runInAction(() => {
      this.isLogged = true
    })
  }
}

export const authStoreSingleton = new AuthStore()
