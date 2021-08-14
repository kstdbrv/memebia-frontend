import {StyleSheet} from "react-native"
import {COLORS} from "../../../../common/constants/colors"
import {Typography} from "../../../../common/styles/typography"

export const styles = StyleSheet.create({
  title: {
    color: COLORS.INK.LIGHT,
    ...Typography.Tiny.None.Regular,
    backgroundColor: COLORS.SKY.LIGHTEST,
    borderTopColor: COLORS.SKY.LIGHTER,
    borderTopWidth: 1,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 32,
  },
})
