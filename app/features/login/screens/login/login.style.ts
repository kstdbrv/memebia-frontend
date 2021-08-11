import {StyleSheet} from "react-native"
import {COLORS} from "../../../common/constants/colors"
import {Typography} from "../../../common/styles/typography"

export const LoginStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 22,
  },
  input: {
    marginVertical: 7,
  },
  passwordButton: {
    alignItems: "flex-start",
    backgroundColor: COLORS.WHITE,
    marginVertical: 7,
    padding: 0,
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
