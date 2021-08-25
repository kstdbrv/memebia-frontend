import {View} from "react-native"
import React, {useEffect, useState} from "react"
import {useAuthStore} from "@features/auth/stores/auth"
import {Button} from "@features/common/components"
import {Swipe} from "../../components/swipe"
import {memesServiceSingleton} from "../../services/memes/memes.service"
import {MemeResponse} from "@features/discoverer/services/memes/memes.types"

function DiscovererScreen() {
  const authStore = useAuthStore()
  const [memes, setMemes] = useState<MemeResponse[]>([])

  useEffect(() => {
    memesServiceSingleton.next().then(({memes}) => setMemes(memes))
  }, [])

  return (
    <View>
      <Button color="primary" title="Logout" onPress={() => authStore.logout()} />
      <Swipe memes={memes} />
    </View>
  )
}

export const Discoverer = React.memo(DiscovererScreen)
