import {View} from "react-native"
import React, {useEffect} from "react"
import {useAuthStore} from "@features/auth/stores/auth"
import {Button} from "@features/common/components"
import {Swipe} from "../../components/swipe"
import {memesStoreSingleton} from "@features/discoverer/stores/memes/memes.store"

function DiscovererScreen() {
  const authStore = useAuthStore()

  useEffect(() => {
    memesStoreSingleton.requestNewMemes()
  }, [])

  return (
    <View>
      <Button color="primary" title="Logout" onPress={() => authStore.logout()} />
      <Swipe memes={memesStoreSingleton.memes} />
    </View>
  )
}

export const Discoverer = React.memo(DiscovererScreen)
