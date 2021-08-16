import {AuthStore, authStoreSingleton} from "@features/auth/stores/auth/auth.store"

export function useAuthStore(): AuthStore {
  return authStoreSingleton
}
