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
import {TabsNavigator} from "@features/tabs-navigator"
import {Discoverer} from "@features/discoverer/screens/discoverer/discoverer"
import {Signup} from "@features/signup/screens/signup/signup"
import {Presenter} from "@features/notifications/components/presenter"

export const SCREEN_NAMES = {
  SIGN_UP: "Signup",
  HOME: "Home",
  PROFILE: "Profile",
} as const

export type RootStackParamList = {
  Login: undefined
  Signup: undefined
  Discoverer: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

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
              component={TabsNavigator}
              options={{
                headerTitle: "Home",
                headerShown: false,
              }}
            />
          ) : (
            <>
              <RootStack.Screen
                name="Login"
                component={Login}
                options={{
                  headerTitle: "Log in",
                  headerShadowVisible: false,
                }}
              />
              <RootStack.Screen
                name="Signup"
                component={Signup}
                options={{
                  headerTitle: "Sign up",
                  headerShadowVisible: false,
                }}
              />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
      <Presenter />
    </SafeAreaProvider>
  )
}

function ObservableApp() {
  return <Observer render={App} />
}

export default ObservableApp
