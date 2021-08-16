export class KeychainService {
  async saveTokens(payload: {accessToken: string; refreshToken: string}): Promise<void> {
    // use AsyncStorage to save tokens
  }

  async restoreTokens(): Promise<{accessToken: string; refreshToken: string} | null> {
    return null
  }

  async getRefreshToken(): Promise<string> {
    // use AsyncStorage to extract token
    return "none"
  }

  async clear(): Promise<void> {
    // remove tokens from store
  }
}

export const keychainServiceSingleton = new KeychainService()
