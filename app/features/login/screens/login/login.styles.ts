import {StyleSheet} from "react-native"
import {COLORS} from "../../../common/constants/colors"
import {Typography} from "../../../common/styles/typography"

export const loginStyles = StyleSheet.create({
  fillContainer: {
    flex: 1,
  },
  input: {
    marginBottom: 24,
  },
  inputLabel: {
    ...Typography.Regular.None.Medium,
    marginBottom: 12,
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
