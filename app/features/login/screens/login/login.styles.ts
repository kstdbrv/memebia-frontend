import {StyleSheet} from "react-native"
import {COLORS} from "../../../common/constants/colors"
import {Typography} from "../../../common/styles/typography"

export const loginStyles = StyleSheet.create({
  fillContainer: {
    flex: 1,
  },
  input: {
    color: COLORS.INK.DARKEST,
    ...Typography.Regular.None.Regular,
  },
  inputLabelEmail: {
    ...Typography.Regular.None.Medium,
    marginBottom: 12,
  },
  inputLabelPassword: {
    marginBottom: 12,
    marginTop: 36,
    ...Typography.Regular.None.Medium,
  },
  loginButton: {
    marginBottom: 20,
    marginTop: "auto",
  },
  passwordButton: {
    alignItems: "flex-start",
    backgroundColor: COLORS.WHITE,
    marginVertical: 7,
    padding: 0,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  textButton: {
    backgroundColor: COLORS.WHITE,
    padding: 0,
    width: "auto",
    ...Typography.Small.Normal.Regular,
  },
  textView: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 22,
    width: 347,
  },
})
