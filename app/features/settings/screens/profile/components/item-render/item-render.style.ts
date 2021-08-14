import {StyleSheet} from "react-native"
import {COLORS} from "../../../../common/constants/colors"
import {Typography} from "../../../../common/styles/typography"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.SKY.LIGHTER,
    borderTopColor: COLORS.SKY.LIGHTER,
    borderTopWidth: 1,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
  },
  language: {
    ...Typography.Small.Tight.Regular,
    bottom: 0,
    color: COLORS.INK.LIGHTER,
    position: "absolute",
  },
  textPayload: {
    ...Typography.Regular.Tight.Regular,
    color: COLORS.INK.DARKEST,
  },
  textPlaceholder: {
    color: COLORS.SKY.DARK,
  },
  title: {
    ...Typography.Regular.Tight.Regular,
    color: COLORS.INK.DARKEST,
    paddingVertical: 22,
  },
  titleLanguage: {
    ...Typography.Regular.Tight.Regular,
    color: COLORS.INK.DARKEST,
    paddingBottom: 22,
    paddingTop: 12,
  },
})
