import {useCallback, useRef, useState} from "react"
import {TextInput} from "react-native"
import {useFormik} from "formik"
import {useAuthStore} from "@features/auth/stores/auth/auth.hooks"
import * as yup from "yup"
import {StackNavigationProp} from "@react-navigation/stack"
import {RootStackParamList, SCREEN_NAMES} from "../../../../app"
import {useNavigation} from "@react-navigation/native"

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList>

export function useLoginController() {
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const authStore = useAuthStore()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigation = useNavigation<SignupScreenNavigationProp>()
  const onSignupClick = () => navigation.navigate(SCREEN_NAMES.SIGN_UP)

  const handleSubmit = async (payload: {email: string; password: string}) => {
    setIsLoading(false)
    try {
      await authStore.login(payload)
    } catch (e) {
      setIsLoading(false)
    }
  }

  const loginValidationSchema = yup.object().shape({
    email: yup.string().email("Must be a valid email").required("Email is required"),
    password: yup
      .string()
      .min(4, "Password must be of minimum 4 characters length")
      .required("Password is required"),
  })

  const formik = useFormik({
    validateOnBlur: true,
    initialValues: {email: "", password: ""},
    onSubmit: handleSubmit,
    validationSchema: loginValidationSchema,
  })

  const {errors} = formik

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
    errors,
    onSignupClick,
  }
}
