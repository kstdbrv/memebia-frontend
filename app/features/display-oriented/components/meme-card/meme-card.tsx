import React, {useCallback, FC} from "react"
import {Image, Animated, ImageSourcePropType, GestureResponderHandlers} from "react-native"

import {Choice} from "../choice"
import {styles} from "./meme-card.styles"
import {memeCardConstants} from "./constants"

type MemeCardPropsType = GestureResponderHandlers & {
  source: ImageSourcePropType
  isFirst: boolean
  swipe: Animated.ValueXY
  tiltSign: Animated.Value
}

export const MemeCard: FC<MemeCardPropsType> = ({source, isFirst, swipe, tiltSign, ...rest}) => {
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-memeCardConstants.actionsOffset, 0, memeCardConstants.actionsOffset],
    outputRange: [
      memeCardConstants.outputRangeIndegrees1,
      memeCardConstants.outputRangeIndegrees2,
      memeCardConstants.outputRangeIndegrees3,
    ],
  })

  const likeOpacity = swipe.x.interpolate({
    inputRange: [memeCardConstants.positiveDelayAnimationDisplay, memeCardConstants.actionsOffset],
    outputRange: [0, 1],
    extrapolate: "clamp",
  })

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-memeCardConstants.actionsOffset, memeCardConstants.negativeDelayAnimationDisplay],
    outputRange: [1, 0],
    extrapolate: "clamp",
  })

  const animatedCardStyled = {
    transform: [...swipe.getTranslateTransform(), {rotate}],
  }

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[styles.choiceContainer, styles.likeContainer, {opacity: likeOpacity}]}>
          <Choice type={memeCardConstants.positiveReaction} />
        </Animated.View>
        <Animated.View
          style={[styles.choiceContainer, styles.nopeContainer, {opacity: nopeOpacity}]}>
          <Choice type={memeCardConstants.negativeReaction} />
        </Animated.View>
      </>
    )
  }, [likeOpacity, nopeOpacity])

  return (
    <Animated.View style={[styles.memeCardContainer, isFirst && animatedCardStyled]} {...rest}>
      <Image style={styles.image} source={source} />
      {isFirst && renderChoice()}
    </Animated.View>
  )
}
