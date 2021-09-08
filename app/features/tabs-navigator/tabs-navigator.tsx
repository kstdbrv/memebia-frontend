import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import * as React from "react"
import {Image} from "react-native"
import {Discoverer} from "../discoverer/screens/discoverer/discoverer"
import {Profile} from "@features/settings/screens/profile"

const Tab = createBottomTabNavigator()

export function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Discoverer"
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({color}) => {
            return <Image style={{tintColor: color}} source={require("./images/homeIcon.png")} />
          },
        }}
        component={Discoverer}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Me",
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({color}) => {
            return <Image style={{tintColor: color}} source={require("./images/profileIcon.png")} />
          },
        }}
        component={Profile}
      />
    </Tab.Navigator>
  )
}
