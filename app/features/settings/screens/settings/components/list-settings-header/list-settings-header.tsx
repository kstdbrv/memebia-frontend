import React from "react"
import {styles} from "./list-settings-header.style"
import {Text, View} from "react-native"

export const ListSettingsHeader = ({title}: {title: string}): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
)
