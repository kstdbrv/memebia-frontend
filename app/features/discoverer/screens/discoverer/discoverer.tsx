import {discovererStyles} from "@features/discoverer/screens/discoverer/discoverer.styles"
import {SafeAreaView, View} from "react-native"
import React from "react"
import {Button} from "@features/common/components"
import {SwipeComponent} from "../../components/swipe"
import {observer} from "mobx-react-lite"
import {useDiscovererController} from "@features/discoverer/screens/discoverer/discoverer.controller"

const DiscovererScreen = observer(() => {
  const {onLike, onDislike, memesStore} = useDiscovererController()

  return (
    <SafeAreaView style={discovererStyles.container}>
      <SwipeComponent images={memesStore.memes} onLike={onLike} onDislike={onDislike} />
    </SafeAreaView>
  )
})

export const Discoverer = React.memo(DiscovererScreen)
