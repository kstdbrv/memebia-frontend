import React from "react"
import {styles} from "./list-profile-header.style"
import {Text} from "react-native"

export const ListProfileHeader = ({title}: {title: string}): JSX.Element => (
  <Text style={styles.title}>{title}</Text>
)
