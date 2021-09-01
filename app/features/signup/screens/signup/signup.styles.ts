import {StyleSheet} from "react-native"
import {COLORS} from "@features/common/constants/colors"
import {Typography} from "@features/common/styles/typography"

export const styles = StyleSheet.create({
  fillContainer: {
    flex: 1,
  },
  input: {
    color: COLORS.INK.DARKEST,
    ...Typography.Large.None.Bold,
  },
  inputLabelEmail: {
    ...Typography.Large.None.Bold,
    marginBottom: 12,
  },
  inputLabelPassword: {
    marginBottom: 12,
    marginTop: 36,
    ...Typography.Large.None.Bold,
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
