import {useCallback, useRef, useState} from "react"
import {TextInput} from "react-native"
import {useFormik} from "formik"
import {useAuthStore} from "@features/auth/stores/auth/auth.hooks"

export function useLoginController() {
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const authStore = useAuthStore()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (payload: {email: string; password: string}) => {
    setIsLoading(false)
    try {
      await authStore.login(payload)
    } catch (e) {
      setIsLoading(false)
    }
  }

  const formik = useFormik({
    validateOnBlur: true,
    initialValues: {email: "", password: ""},
    onSubmit: handleSubmit,
  })

  const focusPasswordField = useCallback(() => {
    passwordInputRef.current?.focus()
  }, [passwordInputRef])

  const emailField = {
    ref: emailInputRef,
    value: formik.values.email,
    onChange: formik.handleChange("email"),
    handleSubmitEditing: focusPasswordField,
  }

  const passwordField = {
    ref: passwordInputRef,
    value: formik.values.password,
    onChange: formik.handleChange("password"),
    handleSubmitEditing: formik.handleSubmit,
  }

  const onLoginClick = formik.handleSubmit

  return {
    emailInputRef,
    passwordInputRef,
    emailField,
    passwordField,
    onLoginClick,
    isLoading,
  }
}
