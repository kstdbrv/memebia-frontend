import {StyleSheet} from "react-native"

import {WIDTH_CARD, HEIGHT_CARD, BORDER_RADIUS_CARD} from "./meme-card.constants"
import {COLORS} from "../../../common/constants/colors"

export const styles = StyleSheet.create({
  choiceContainer: {
    position: "absolute",
  },
  image: {
    borderRadius: BORDER_RADIUS_CARD,
    height: HEIGHT_CARD,
    resizeMode: "contain",
    width: WIDTH_CARD,
  },
  likeContainer: {
    left: 45,
    transform: [{rotate: "-30deg"}],
  },
  memeCardContainer: {
    position: "absolute",
    top: 45,
  },
  memeCardInner: {
    backgroundColor: COLORS.WHITE,
  },
  nopeContainer: {
    right: 45,
    transform: [{rotate: "30deg"}],
  },
})
