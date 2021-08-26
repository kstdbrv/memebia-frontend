import {MemesStore, memesStoreSingleton} from "@features/discoverer/stores/memes/memes.store"

export function useMemesStore(): MemesStore {
  return memesStoreSingleton
}
