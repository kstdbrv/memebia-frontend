import {StyleSheet} from "react-native"

import {CHOICE_CONTAINER_BG_COLOR} from "./constants"

export const styles = StyleSheet.create({
  choiceContainer: {
    backgroundColor: CHOICE_CONTAINER_BG_COLOR,
    borderRadius: 15,
    borderWidth: 7,
    paddingHorizontal: 15,
  },
  choiceText: {
    fontSize: 48,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
})
