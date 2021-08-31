import {useState, useEffect, useCallback} from "react"
import {useMemesStore} from "@features/discoverer/stores/memes"

export function useDiscovererController() {
  const memesStore = useMemesStore()
  const [rateCounter, setRateCounter] = useState<number>(0)

  useEffect(() => {
    memesStore.requestNewMemes()
  }, [])

  useEffect(() => {
    rateMeme()

    if (rateCounter === 10) {
      memesStore.requestNewMemes()
      setRateCounter(0)
    }
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

  const rateMeme = async () => {
    await memesStore.submitRatedMemes()
  }

  return {
    onLike,
    onDislike,
    rateMeme,
  }
}
