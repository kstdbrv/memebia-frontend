import {Typography} from "../../../app/features/common/styles/typography"
import {withKnobs} from "@storybook/addon-knobs"
import {storiesOf} from "@storybook/react-native"
import React from "react"
import {Text, View, StyleSheet} from "react-native"
import CenterView from "../center-view"

storiesOf("Typography", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Default", () => <Text>Text goes to here</Text>)
  .add("Custom style", () => {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>This is a title text</Text>
        <Text style={styles.textBody}>
          This is a plain body text. This is a plain body text. This is a plain body text. This is a
          plain body text.
        </Text>
        <Text style={styles.textFooter}>This is a plain tiny footer text.</Text>
      </View>
    )
  })

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
