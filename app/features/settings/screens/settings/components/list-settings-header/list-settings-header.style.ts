import {StyleSheet} from "react-native"
import {COLORS} from "../../../../../common/constants/colors"
import {Typography} from "../../../../../common/styles/typography"

export const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  title: {
    color: COLORS.INK.DARKEST,
    ...Typography.Large.Normal.Bold,
  },
})
