import {Dimensions} from "react-native"

const {height, width} = Dimensions.get("screen")

type MemeCardConstantsType = {
  actionsOffset: 100
  positiveDelayAnimationDisplay: number
  negativeDelayAnimationDisplay: number
  outputRangeIndegrees1: string
  outputRangeIndegrees2: string
  outputRangeIndegrees3: string
  positiveReaction: "LIKE"
  negativeReaction: "NOPE"
  widthCard: number
  heightCard: number
  borderRadiusCard: number
}

export const memeCardConstants: MemeCardConstantsType = {
  actionsOffset: 100,
  positiveDelayAnimationDisplay: 10,
  negativeDelayAnimationDisplay: -10,
  outputRangeIndegrees1: "9deg",
  outputRangeIndegrees2: "0deg",
  outputRangeIndegrees3: "-8deg",
  positiveReaction: "LIKE",
  negativeReaction: "NOPE",
  widthCard: width * 0.9,
  heightCard: height * 0.78,
  borderRadiusCard: 20,
}
