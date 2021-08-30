import {View, Animated} from "react-native"
import React, {useEffect} from "react"
import {useAuthStore} from "@features/auth/stores/auth"
import {Button} from "@features/common/components"
import {SwipeComponent} from "../../components/swipe"
import {memesStoreSingleton} from "@features/discoverer/stores/memes/memes.store"
import {memesServiceSingleton} from "@features/discoverer/services/memes/memes.service"
import {observer} from "mobx-react-lite"

const DiscovererScreen = observer(() => {
  const authStore = useAuthStore()

  useEffect(() => {
    memesStoreSingleton.requestNewMemes()
  }, [])

  const submitRatedMemes = async () => {
    await memesServiceSingleton.rate({
      likedMemes: memesStoreSingleton.likedMemes,
      dislikedMemes: memesStoreSingleton.dislikedMemes,
    })
  }

  const requestNewMemes = async () => {
    await memesStoreSingleton.requestNewMemes()
  }

  const cleanArrayWithRatedMemes = () => {
    memesStoreSingleton.cleanAllCategories()
  }

  const submitRatedMemesAndRequestNewMemesAndCleanRatedMemes = async () => {
    await submitRatedMemes()
    await requestNewMemes()
    cleanArrayWithRatedMemes()
  }

  const addAMemeToTheCategoryLikedOrNot = (id: number, reaction: Animated.ValueXY["x"]) => {
    const reactionValue: number = reaction.__getValue()

    if (reactionValue > 100) {
      memesStoreSingleton.addMemeToDislikedCategory(id)
    }
    if (reactionValue < -100) {
      memesStoreSingleton.addMemeToLikedCategory(id)
    }
  }

  return (
    <View>
      <Button color="primary" title="Logout" onPress={() => authStore.logout()} />
      <SwipeComponent
        memes={memesStoreSingleton.memes}
        submitRatedMemesAndRequestNewMemesAndCleanRatedMemes={
          submitRatedMemesAndRequestNewMemesAndCleanRatedMemes
        }
        addAMemeToTheCategoryLikedOrNot={addAMemeToTheCategoryLikedOrNot}
      />
    </View>
  )
})

export const Discoverer = React.memo(DiscovererScreen)
