import {View} from "react-native"
import React from "react"
import {Button} from "@features/common/components"
import {SwipeComponent} from "../../components/swipe"
import {observer} from "mobx-react-lite"
import {useDiscovererController} from "@features/discoverer/screens/discoverer/discoverer.controller"

const DiscovererScreen = observer(() => {
  const {onLike, onDislike, memesStore, authStore} = useDiscovererController()

  return (
    <View>
      <Button color="primary" title="Logout" onPress={() => authStore.logout()} />
      <SwipeComponent images={memesStore.memes} onLike={onLike} onDislike={onDislike} />
    </View>
  )
})

export const Discoverer = React.memo(DiscovererScreen)
