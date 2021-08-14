import {StyleSheet} from "react-native"
import {COLORS} from "../../../common/constants/colors"
import {Typography} from "../../../common/styles/typography"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  logoutButton: {
    backgroundColor: COLORS.WHITE,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 60,
    paddingHorizontal: 0,
    paddingVertical: 5,
    width: "auto",
    ...Typography.Regular.None.Regular,
    color: COLORS.SKY.DARK,
  },
})
