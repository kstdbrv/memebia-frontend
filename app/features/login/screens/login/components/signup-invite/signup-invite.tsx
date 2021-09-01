import React from "react"
import {View, Text} from "react-native"
import {styles} from "./signup-invite.styles"
import {Button} from "@features/common/components/button/button"

export const SignupInvite = (): JSX.Element => {
  const onSignupClick = () => {
    console.log()
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account?</Text>
      <Button color="transparent" title="Sign up" onPress={onSignupClick} />
    </View>
  )
}
