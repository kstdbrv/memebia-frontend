import {StyleSheet} from "react-native"

import {memeCardConstants} from "./constants"

export const styles = StyleSheet.create({
  choiceContainer: {
    position: "absolute",
  },
  image: {
    borderRadius: memeCardConstants.borderRadiusCard,
    height: memeCardConstants.heightCard,
    width: memeCardConstants.widthCard,
  },
  likeContainer: {
    left: 45,
    transform: [{rotate: "-30deg"}],
  },
  memeCardContainer: {
    position: "absolute",
    top: 45,
  },
  nopeContainer: {
    right: 45,
    transform: [{rotate: "30deg"}],
  },
})
