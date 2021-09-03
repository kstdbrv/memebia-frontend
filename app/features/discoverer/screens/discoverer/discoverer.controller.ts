import {useState, useEffect, useCallback} from "react"
import {useMemesStore} from "@features/discoverer/stores/memes"
import {useAuthStore} from "@features/auth/stores/auth"
import {RATE_COUNT, TOTAL_COUNT} from "@features/discoverer/screens/discoverer/constants"

export function useDiscovererController() {
  const authStore = useAuthStore()
  const memesStore = useMemesStore()
  const [rateCounter, setRateCounter] = useState<number>(0)

  useEffect(() => {
    memesStore.requestNewMemes(TOTAL_COUNT, 0)
  }, [])

  useEffect(() => {
    ;(async function () {
      if (rateCounter === RATE_COUNT) {
        await memesStore.submitRatedMemes()
        await memesStore.requestNewMemes(TOTAL_COUNT, 0)
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
