export class LoggerService {
  // use npm package  "react-native-logs" to save log in file
  // but for when __DEV__ === true use console instead

  log(message: string): void {
    return undefined
  }

  info(message: string): void {
    return undefined
  }

  error(e: unknown): void {
    return undefined
  }
}

export const loggerServiceSingleton = new LoggerService()
