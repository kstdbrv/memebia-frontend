import {View} from "react-native"
import React from "react"
import {useAuthStore} from "@features/auth/stores/auth"
import {Button} from "@features/common/components"

function DiscovererScreen() {
  const authStore = useAuthStore()
  return (
    <View>
      <Button color="primary" title="Logout" onPress={() => authStore.logout()} />
    </View>
  )
}

export const Discoverer = React.memo(DiscovererScreen)
