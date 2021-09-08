import React from "react"
import {SafeAreaView} from "react-native-safe-area-context"
import {Button, Input, ErrorMessage} from "@features/common/components"
import {styles} from "./signup.styles"
import {KeyboardAvoidingView, Platform, ScrollView, Text} from "react-native"
import {useSignupController} from "@features/signup/screens/signup/signup.controller"
import {observer} from "mobx-react-lite"

function SignupScreen() {
  const {emailField, passwordField, onLoginClick, errors} = useSignupController()
  return (
    <SafeAreaView style={styles.fillContainer}>
      <KeyboardAvoidingView
        style={styles.fillContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollView}
          bounces={false}>
          <Text style={styles.inputLabelEmail}>What’s your email address?</Text>
          <Input
            ref={emailField.ref}
            placeholder="Enter your email"
            value={emailField.value}
            onChange={emailField.onChange}
            style={styles.input}
            keyboardType="email-address"
            textContentType="emailAddress"
            onSubmitEditing={emailField.handleSubmitEditing}
            returnKeyType="next"
            autoCapitalize="none"
            hasError={Boolean(errors.email)}
            onChangeText={emailField.onChange}
          />
          {errors.email && <ErrorMessage title={errors.email} />}
          <Text style={styles.inputLabelPassword}>Set up your password</Text>
          <Input
            ref={passwordField.ref}
            placeholder="Enter your password"
            style={styles.input}
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
          <Button
            onPress={onLoginClick}
            style={styles.loginButton}
            color="primary"
            title="Sign up"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export const Signup = observer(SignupScreen)
