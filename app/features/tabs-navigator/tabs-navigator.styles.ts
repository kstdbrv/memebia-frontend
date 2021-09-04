import {COLORS} from "@features/common/constants/colors"
import {Typography} from "@features/common/styles/typography"
import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
  container: {
    borderTopColor: COLORS.SKY.LIGHT,
    borderTopWidth: 1,
    flexDirection: "row",
    paddingVertical: 8,
  },
  itemWrapper: {
    alignItems: "center",
    flex: 1,
  },
})

export const getStylesForItemlabel = (isFocused: boolean) => {
  const color = isFocused ? COLORS.PRIMARY.BASE : COLORS.SKY.DARK
  return {
    ...Typography.Tiny.None.Regular,
    color: color,
    marginTop: 6,
  }
}
