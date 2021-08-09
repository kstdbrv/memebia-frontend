import "react-native-gesture-handler"
import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "react-native-screens/native-stack"
import {Login} from "./features/common/screens/login"
import {Typography} from "./features/common/styles/typography"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{...Typography.Large.None, headerHideShadow: true}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "Log in",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
