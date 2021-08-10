import {StyleSheet} from "react-native"

import {choiseContainerBGColor} from "./constants"

export const styles = StyleSheet.create({
  choiceContainer: {
    backgroundColor: choiseContainerBGColor,
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
