import React from "react"
import {View, Text} from "react-native"
import {styles} from "./signup-invite.styles"
import {Button} from "@features/common/components/button/button"
import {useNavigation} from "@react-navigation/native"
import {SCREEN_NAMES, RootStackParamList} from "../../../../../../app"
import {StackNavigationProp} from "@react-navigation/stack"

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList>

export const SignupInvite = (): JSX.Element => {
  const navigation = useNavigation<SignupScreenNavigationProp>()
  const onSignupClick = () => navigation.navigate(SCREEN_NAMES.SIGN_UP)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account?</Text>
      <Button color="transparent" title="Sign up" onPress={onSignupClick} />
    </View>
  )
}
