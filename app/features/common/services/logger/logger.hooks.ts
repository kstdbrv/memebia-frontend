import {
  LoggerService,
  loggerServiceSingleton,
} from "@features/common/services/logger/logger.service"

export function useLogger(): LoggerService {
  return loggerServiceSingleton
}
