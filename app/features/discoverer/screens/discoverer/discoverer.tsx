import {View} from "react-native"
import React from "react"
import {useAuthStore} from "@features/auth/stores/auth"
import {Button} from "@features/common/components"
import {SwipeComponent} from "../../components/swipe"
import {observer} from "mobx-react-lite"
import {useMemesStore} from "@features/discoverer/stores/memes"
import {useDiscovererController} from "@features/discoverer/screens/discoverer/discoverer.controller"

const DiscovererScreen = observer(() => {
  const authStore = useAuthStore()
  const memesStore = useMemesStore()

  const {onLike, onDislike} = useDiscovererController()

  return (
    <View>
      <Button color="primary" title="Logout" onPress={() => authStore.logout()} />
      <SwipeComponent
        images={memesStore.memes}
        onLike={onLike}
        onDislike={onDislike}
        isNewImagesUploaded={memesStore.isNewMemesUploaded}
      />
    </View>
  )
})

export const Discoverer = React.memo(DiscovererScreen)
