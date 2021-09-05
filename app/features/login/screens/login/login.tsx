import React from "react"
import {SafeAreaView} from "react-native-safe-area-context"
import {Button, Input, ErrorMessage} from "@features/common/components"
import {loginStyles} from "./login.styles"
import {KeyboardAvoidingView, Platform, ScrollView, Text} from "react-native"
import {useLoginController} from "@features/login/screens/login/login.controller"
import {observer} from "mobx-react-lite"
import {SignupInvite} from "./components/signup-invite"

function LoginScreen() {
  const {emailField, passwordField, onLoginClick, onSignupClick, errors} = useLoginController()

  return (
    <SafeAreaView style={loginStyles.fillContainer}>
      <KeyboardAvoidingView
        style={loginStyles.fillContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={loginStyles.scrollView}
          bounces={false}>
          <Text style={loginStyles.inputLabelEmail}>Email</Text>
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
            hasError={Boolean(errors.email)}
            onChangeText={emailField.onChange}
          />
          {errors.email && <ErrorMessage title={errors.email} />}
          <Text style={loginStyles.inputLabelPassword}>Password</Text>
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
            hasError={Boolean(errors.password)}
            onChangeText={passwordField.onChange}
          />
          {errors.password && <ErrorMessage title={errors.password} />}
          <SignupInvite onSignupClick={onSignupClick} />
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
