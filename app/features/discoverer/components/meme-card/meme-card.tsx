import React, {useCallback, FC} from "react"
import {Image, View, Animated, ImageURISource, GestureResponderHandlers} from "react-native"

import {Choice} from "../choice"
import {styles} from "./meme-card.styles"
import {
  ACTIONS_OFFSET,
  LIKE_X_OFFSET,
  DISLIKE_X_OFFSET,
  POSITIVE_REACTION,
  NEGATIVE_REACTION,
  ROTATE_RANGE,
} from "./meme-card.constants"

type MemeCardPropsType = GestureResponderHandlers & {
  source: ImageURISource
  id: number
  addAMemeToTheCategoryLikedOrNot: (id: number, xAxisSwipeValue: Animated.ValueXY["x"]) => void
  isFirst: boolean
  swipe: Animated.ValueXY
  tiltSign: Animated.Value
}

export const MemeCard: FC<MemeCardPropsType> = ({
  source,
  id,
  addAMemeToTheCategoryLikedOrNot,
  isFirst,
  swipe,
  tiltSign,
  ...rest
}) => {
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTIONS_OFFSET, 0, ACTIONS_OFFSET],
    outputRange: ROTATE_RANGE,
  })

  const likeOpacity = swipe.x.interpolate({
    inputRange: [LIKE_X_OFFSET, ACTIONS_OFFSET],
    outputRange: [0, 1],
    extrapolate: "clamp",
  })

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTIONS_OFFSET, DISLIKE_X_OFFSET],
    outputRange: [1, 0],
    extrapolate: "clamp",
  })

  const animatedCardStyled = {
    transform: [...swipe.getTranslateTransform(), {rotate}],
  }

  const xAxisSwipeValue = swipe.x

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
    <Animated.View
      style={[styles.memeCardContainer, isFirst && animatedCardStyled]}
      {...rest}
      onTouchEnd={() => addAMemeToTheCategoryLikedOrNot(id, xAxisSwipeValue)}>
      <View style={styles.memeCardInner}>
        <Image style={styles.image} source={source} />
      </View>
      {isFirst && renderChoice()}
    </Animated.View>
  )
}
