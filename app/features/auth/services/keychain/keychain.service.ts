import AsyncStorage from "@react-native-async-storage/async-storage"

const STORAGE_KEY = "key"

export class KeychainService {
  async saveTokens(payload: {accessToken: string; refreshToken: string}): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    } catch (error) {
      console.log(error.message)
    }
  }

  async restoreTokens(): Promise<{accessToken: string; refreshToken: string} | null> {
    const jsonTokens = await AsyncStorage.getItem(STORAGE_KEY)
    return jsonTokens ? JSON.parse(jsonTokens) : null
  }

  async getRefreshToken(): Promise<string | null> {
    const jsonTokens = await AsyncStorage.getItem(STORAGE_KEY)
    return jsonTokens ? JSON.parse(jsonTokens).refreshToken : null
  }

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const keychainServiceSingleton = new KeychainService()
