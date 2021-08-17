import AsyncStorage from "@react-native-async-storage/async-storage"

export class KeychainService {
  async saveTokens(payload: {accessToken: string; refreshToken: string}): Promise<void> {
    try {
      await AsyncStorage.setItem("key", JSON.stringify(payload))
    } catch (error) {
      console.log(error.message)
    }
  }

  async restoreTokens(): Promise<{accessToken: string; refreshToken: string} | null> {
    const jsonTokens = await AsyncStorage.getItem("key")
    return jsonTokens ? JSON.parse(jsonTokens) : null
  }

  async getRefreshToken(): Promise<string> {
    const jsonTokens = await AsyncStorage.getItem("key")
    return jsonTokens ? JSON.parse(jsonTokens).refreshToken : "none"
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
