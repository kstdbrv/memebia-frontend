import {StyleSheet} from "react-native"
import {COLORS} from "../../../../../common/constants/colors"
import {Typography} from "../../../../../common/styles/typography"

export const styles = StyleSheet.create({
  button: {
    color: COLORS.PRIMARY.BASE,
    paddingVertical: 4,
    ...Typography.Regular.None.Medium,
    backgroundColor: COLORS.PRIMARY.LIGHTEST,
    width: "auto",
  },
  container: {
    alignItems: "center",
    marginBottom: 33,
    marginTop: 16,
  },
  profilePhoto: {
    borderRadius: 50,
    height: 64,
    marginBottom: 24,
    width: 64,
  },
})
