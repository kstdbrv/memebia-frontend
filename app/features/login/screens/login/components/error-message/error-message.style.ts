import {COLORS} from "@features/common/constants/colors"
import {StyleSheet} from "react-native"
import {Typography} from "@features/common/styles/typography"

export const styles = StyleSheet.create({
  errorText: {
    color: COLORS.RED.BASE,
    ...Typography.Small.Normal.Regular,
    marginTop: 10,
  },
})
