import {StyleSheet} from "react-native"
import {COLORS} from "../../../common/constants/colors"
import {Typography} from "../../../common/styles/typography"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  item: {
    ...Typography.Regular.Tight.Regular,
    paddingLeft: 15,
    paddingVertical: 18,
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
})
