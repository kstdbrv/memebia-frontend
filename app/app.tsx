import "react-native-gesture-handler"

import {StyleSheet, View, Text} from "react-native"
import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {Typography} from "./features/common/styles/typography"

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.textTitle}>This is a title text</Text>
        <Text style={styles.textBody}>
          This is a plain body text. This is a plain body text. This is a plain body text. This is a
          plain body text.
        </Text>
        <Text style={styles.textFooter}>This is a plain tiny footer text.</Text>
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
  textBody: {
    ...Typography.Large.Normal.Bold,
    color: "#fff",
    marginBottom: 45,
  },
  textFooter: {
    ...Typography.Tiny.Normal.Medium,
    color: "#fff",
  },
  textTitle: {
    ...Typography.Title_2,
    alignItems: "center",
    color: "#fff",
    justifyContent: "center",
    marginBottom: 15,
  },
})
