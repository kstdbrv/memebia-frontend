import "react-native-gesture-handler"
import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Login} from "./features/login/screens/login"
import {Typography} from "./features/common/styles/typography"
import {Settings} from "./features/settings/screens/settings/settings"

export type RootStackParamList = {
  Login: undefined
  Settings: undefined
}

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>()

const App: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          ...Typography.Large.None,
        }}>
        <Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "Log in",
          }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitle: "Settings",
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default App
