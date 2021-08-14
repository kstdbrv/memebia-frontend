import React from "react"
import {styles} from "./list-header.style"
import {Text, View} from "react-native"

export const ListHeader = ({title}: {title: string}): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
)
