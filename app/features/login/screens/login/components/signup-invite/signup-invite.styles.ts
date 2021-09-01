import {StyleSheet} from "react-native"
import {Typography} from "@features/common/styles/typography"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  text: {
    paddingBottom: 5,
    ...Typography.Regular.Normal.Medium,
  },
})
