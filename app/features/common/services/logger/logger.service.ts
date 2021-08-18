import {logger, fileAsyncTransport} from "react-native-logs"
import RNFS from "react-native-fs"

export class LoggerService {
  private log: ReturnType<typeof logger.createLogger> | Console
  constructor() {
    if (__DEV__) {
      this.log = console
    } else {
      this.log = logger.createLogger({
        transport: fileAsyncTransport,
        severity: "info",
        transportOptions: {
          colors: `ansi`,
          FS: RNFS,
          fileName: "log.txt",
        },
      })
    }
  }

  info(message: string): void {
    this.log.info(message)
  }

  warn(warn: unknown): void {
    this.log.warn(warn)
  }

  error(error: unknown): void {
    this.log.error(error)
  }
}

export const loggerServiceSingleton = new LoggerService()
