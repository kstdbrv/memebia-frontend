import React from "react"
import {SafeAreaView} from "react-native-safe-area-context"
import {Button, Input} from "@features/common/components"
import {loginStyles} from "./login.styles"
import {KeyboardAvoidingView, Platform, ScrollView, Text} from "react-native"
import {useLoginController} from "@features/login/screens/login/login.controller"
import {observer} from "mobx-react-lite"

function LoginScreen() {
  const {emailField, passwordField, onLoginClick} = useLoginController()
  return (
    <SafeAreaView style={loginStyles.fillContainer}>
      <KeyboardAvoidingView
        style={loginStyles.fillContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={loginStyles.scrollView}
          bounces={false}>
          <Text style={loginStyles.inputLabel}>Email</Text>
          <Input
            ref={emailField.ref}
            placeholder="Enter your email"
            value={emailField.value}
            onChange={emailField.onChange}
            style={loginStyles.input}
            keyboardType="email-address"
            textContentType="emailAddress"
            onSubmitEditing={emailField.handleSubmitEditing}
            returnKeyType="next"
            autoCapitalize="none"
          />
          <Text style={loginStyles.inputLabel}>Password</Text>

          <Input
            ref={passwordField.ref}
            placeholder="Enter your password"
            style={loginStyles.input}
            secureTextEntry={true}
            value={passwordField.value}
            onChange={passwordField.onChange}
            textContentType="password"
            onSubmitEditing={passwordField.handleSubmitEditing}
            returnKeyType="done"
            autoCapitalize="none"
          />
          <Button
            onPress={onLoginClick}
            style={loginStyles.loginButton}
            color="primary"
            title="Log in"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export const Login = observer(LoginScreen)
