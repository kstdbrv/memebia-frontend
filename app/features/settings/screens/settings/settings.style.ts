import {StyleSheet} from "react-native"
import {COLORS} from "../../../common/constants/colors"

export const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    paddingVertical: 8,
    width: 110,
  },
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    paddingHorizontal: 24,
  },
  wrapper: {
    flexBasis: 400,
  },
})
