import React from "react"
import {SafeAreaView} from "react-native-safe-area-context"
import {Input} from "../../components/input"
import {Button} from "../../components/button"
import {LoginStyles} from "./login.style"
import {KeyboardAvoidingView, Text, View} from "react-native"
import {Typography} from "../../styles/typography"

export function Login(): JSX.Element {
  return (
    <SafeAreaView style={LoginStyles.container}>
      <KeyboardAvoidingView style={LoginStyles.container}>
        <View>
          <Input
            placeholder="email"
            styleContainer={LoginStyles.input}
            keyboardType={"email-address"}
          />
          <Input placeholder="password" styleContainer={LoginStyles.input} secureTextEntry={true} />
          <Button color="transparent" title="Forgot password?" style={LoginStyles.passwordButton} />
        </View>
        <View>
          <View style={LoginStyles.textView}>
            <Text style={Typography.Small.Normal.Regular}>By continuing, you agree to our </Text>
            <Button color="transparent" title="Terms of Service " style={LoginStyles.textButton} />
            <Text style={Typography.Small.Normal.Regular}>and</Text>
            <Button color="transparent" title=" Privacy Policy" style={LoginStyles.textButton} />
            <Text style={Typography.Small.Normal.Regular}>.</Text>
          </View>
          <Button color={"primary"} title={"Log in"} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
