import {useState, useEffect, useCallback} from "react"
import {useMemesStore} from "@features/discoverer/stores/memes"
import {useAuthStore} from "@features/auth/stores/auth"

export function useDiscovererController() {
  const authStore = useAuthStore()
  const memesStore = useMemesStore()
  const [rateCounter, setRateCounter] = useState<number>(0)

  useEffect(() => {
    memesStore.requestNewMemes()
  }, [])

  useEffect(() => {
    ;(async function () {
      if (rateCounter === 5) {
        await memesStore.submitRatedMemes()
        await memesStore.requestNewMemes()
        setRateCounter(0)
      }
    })()
  }, [rateCounter])

  const onLike = useCallback(
    (id: string) => {
      memesStore.addMemeToLikedCategory(id)
      setRateCounter(rateCounter => rateCounter + 1)
    },
    [setRateCounter],
  )

  const onDislike = useCallback(
    (id: string) => {
      memesStore.addMemeToDislikedCategory(id)
      setRateCounter(rateCounter => rateCounter + 1)
    },
    [setRateCounter],
  )

  return {
    onLike,
    onDislike,
    authStore,
    memesStore,
  }
}
