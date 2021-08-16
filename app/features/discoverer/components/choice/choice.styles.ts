import {StyleSheet} from "react-native"

import {CHOICE_CONTAINER_BG_COLOR} from "./constants"
import {Typography} from "../../../common/styles/typography"

export const styles = StyleSheet.create({
  choiceContainer: {
    backgroundColor: CHOICE_CONTAINER_BG_COLOR,
    borderRadius: 15,
    borderWidth: 7,
    paddingHorizontal: 15,
  },
  choiceText: {
    ...Typography.Title_1,
    textTransform: "uppercase",
  },
})
