import "react-native-gesture-handler"

import {StyleSheet, View, Text} from "react-native"
import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.textTitle}>This is a title text</Text>
      </View>
    </NavigationContainer>
  )
}
/* eslint-disable react-native/no-color-literals */
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#373AF5",
    flex: 1,
    justifyContent: "center",
  },
  textTitle: {
    alignItems: "center",
    color: "#fff",
    fontFamily: "Inter-Regular",
    fontSize: 22,
    justifyContent: "center",
  },
})
