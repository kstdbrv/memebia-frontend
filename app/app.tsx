import "react-native-gesture-handler"
import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Login} from "./features/login/screens/login"
import {Typography} from "./features/common/styles/typography"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{...Typography.Large.None}}>
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
