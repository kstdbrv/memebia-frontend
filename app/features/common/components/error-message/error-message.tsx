import React from "react"
import {Text} from "react-native"
import {styles} from "./error-message.style"

export const ErrorMessage = ({title}: {title: string}): JSX.Element => (
  <Text style={styles.errorText}>{title}</Text>
)
