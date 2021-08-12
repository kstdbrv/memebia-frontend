import React, {useCallback, FC} from "react"
import {Image, Animated, ImageSourcePropType, GestureResponderHandlers} from "react-native"

import {Choice} from "../choice"
import {styles} from "./meme-card.styles"
import {
  ACTIONS_OFFSET,
  POSITIVE_DELAY_ANIMATION_DISPLAY,
  NEGATIVE_DELAY_ANIMATION_DISPLAY,
  OUTPUT_RANGE_INDEGRESS_1,
  OUTPUT_RANGE_INDEGRESS_2,
  OUTPUT_RANGE_INDEGRESS_3,
  POSITIVE_REACTION,
  NEGATIVE_REACTION,
} from "./constants"

type MemeCardPropsType = GestureResponderHandlers & {
  source: ImageSourcePropType
  isFirst: boolean
  swipe: Animated.ValueXY
  tiltSign: Animated.Value
}

export const MemeCard: FC<MemeCardPropsType> = ({source, isFirst, swipe, tiltSign, ...rest}) => {
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTIONS_OFFSET, 0, ACTIONS_OFFSET],
    outputRange: [OUTPUT_RANGE_INDEGRESS_1, OUTPUT_RANGE_INDEGRESS_2, OUTPUT_RANGE_INDEGRESS_3],
  })

  const likeOpacity = swipe.x.interpolate({
    inputRange: [POSITIVE_DELAY_ANIMATION_DISPLAY, ACTIONS_OFFSET],
    outputRange: [0, 1],
    extrapolate: "clamp",
  })

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTIONS_OFFSET, NEGATIVE_DELAY_ANIMATION_DISPLAY],
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
          <Choice type={POSITIVE_REACTION} />
        </Animated.View>
        <Animated.View
          style={[styles.choiceContainer, styles.nopeContainer, {opacity: nopeOpacity}]}>
          <Choice type={NEGATIVE_REACTION} />
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
