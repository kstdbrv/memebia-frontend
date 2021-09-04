import * as React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Discoverer} from "../discoverer/screens/discoverer/discoverer"
import {Profile} from "../settings/screens/profile/profile"
import {View, Text, Image, TouchableOpacity} from "react-native"
import {styles, getStylesForItemlabel} from "./tabs-navigator.styles"
import {SCREEN_NAMES} from "../../app"

/* eslint-disable @typescript-eslint/no-var-requires, react/display-name */
const homeIcon = require("./images/homeIcon.png")
const profileIcon = require("./images/profileIcon.png")

const Tab = createBottomTabNavigator()

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]
        const itemLabel =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        let iconItemBar
        route.name === SCREEN_NAMES.HOME && (iconItemBar = homeIcon)
        route.name === SCREEN_NAMES.PROFILE && (iconItemBar = profileIcon)

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.itemWrapper}>
            <Image source={iconItemBar} />
            <Text style={getStylesForItemlabel(isFocused)}>{itemLabel}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Discoverer} />
      <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: "Me"}} />
    </Tab.Navigator>
  )
}
