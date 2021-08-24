import "react-native-gesture-handler"
import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Login} from "@features/login/screens/login"
import {COLORS} from "@features/common/constants/colors"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {useAuthStore} from "@features/auth/stores/auth/auth.hooks"
import {useEffect} from "react"
import {Observer} from "mobx-react-lite"
import {Presenter} from "@features/notifications/components/presenter"
import {notificationsStore} from "@features/notifications/stores/notifications-store"
import {Discoverer} from "@features/discoverer/screens/discoverer/discoverer"

const RootStack = createNativeStackNavigator()

export function App() {
  const authStore = useAuthStore()

  useEffect(() => {
    authStore.restoreSession()
    // hide splash screen
  }, [])

  if (authStore.isLogged === null) {
    // Show splash screen
    return null
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: COLORS.WHITE,
            },
          }}>
          {authStore.isLogged ? (
            <RootStack.Screen
              name="Discoverer"
              component={Discoverer}
              options={{
                headerTitle: "Home",
              }}
            />
          ) : (
            <RootStack.Screen
              name="Login"
              component={Login}
              options={{
                headerTitle: "Log in",
                headerShadowVisible: true,
              }}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
      <Presenter store={notificationsStore} />
    </SafeAreaProvider>
  )
}

function ObservableApp() {
  return <Observer render={App} />
}

export default ObservableApp
