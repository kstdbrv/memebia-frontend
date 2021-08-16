import {Dimensions} from "react-native"

const {height, width} = Dimensions.get("screen")

export const ACTIONS_OFFSET = 100
export const LIKE_X_OFFSET = 10
export const DISLIKE_X_OFFSET = -10
export const ROTATE_RANGE = ["9deg", "0deg", "-8deg"]
export const POSITIVE_REACTION = "LIKE"
export const NEGATIVE_REACTION = "NOPE"
export const WIDTH_CARD = width * 0.9
export const HEIGHT_CARD = height * 0.78
export const BORDER_RADIUS_CARD = 20
