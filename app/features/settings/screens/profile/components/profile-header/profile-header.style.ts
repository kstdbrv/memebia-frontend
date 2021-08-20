import {Typography} from "@features/common/styles/typography"
import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 4,
    ...Typography.Regular.None.Medium,
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
