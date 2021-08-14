import React from "react"
import {styles} from "./list-header.style"
import {Text} from "react-native"

export const ListHeader = ({title}: {title: string}): JSX.Element => (
  <Text style={styles.title}>{title}</Text>
)
