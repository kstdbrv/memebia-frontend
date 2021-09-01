import React, {useState, useRef, useCallback, useEffect, FC} from "react"
import {View, Animated, PanResponder} from "react-native"

import {MemeCard} from "../meme-card"
import {styles} from "./swipe.styles"
import {
  DURATION,
  DIRECTION_FACTOR,
  FRICTION,
  CARD_HEIGHT_DIVIDER,
  POSITIVE_TOUCH_HEIGHT,
  NEGATIVE_TOUCH_HEIGHT,
} from "./constants"
import {ACTIONS_OFFSET, HEIGHT_CARD} from "../meme-card/meme-card.constants"
import {MemeResponse} from "@features/discoverer/services/memes/memes.types"

type SwipeComponentPropsType = {
  images: MemeResponse[]
  isNewImagesUploaded: boolean
  onLike: (id: string) => void
  onDislike: (id: string) => void
}

export const SwipeComponent: FC<SwipeComponentPropsType> = ({
  images,
  isNewImagesUploaded,
  onLike,
  onDislike,
}) => {
  const [imagesToDisplay, setImagesToDisplay] = useState(images)
  const swipe = useRef(new Animated.ValueXY()).current
  const tiltSign = useRef(new Animated.Value(1)).current

  useEffect(() => {
    if (!imagesToDisplay.length && isNewImagesUploaded) {
      setImagesToDisplay(images)
    }
  }, [imagesToDisplay.length, isNewImagesUploaded])

  const addAMemeToTheCategoryLikedOrNot = (direction: number, id: string) => {
    if (direction > 0) {
      onLike(id)
    }
    if (direction < 0) {
      onDislike(id)
    }
  }

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy, y0}) => {
      swipe.setValue({x: dx, y: dy})
      tiltSign.setValue(
        y0 > HEIGHT_CARD / CARD_HEIGHT_DIVIDER ? POSITIVE_TOUCH_HEIGHT : NEGATIVE_TOUCH_HEIGHT,
      )
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx)
      const isActionActive = Math.abs(dx) > ACTIONS_OFFSET

      if (isActionActive) {
        addAMemeToTheCategoryLikedOrNot(direction, imagesToDisplay[0].id)

        Animated.timing(swipe, {
          duration: DURATION,
          toValue: {
            x: direction * DIRECTION_FACTOR,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard)
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: FRICTION,
        }).start()
      }
    },
  })

  const removeTopCard = useCallback(() => {
    setImagesToDisplay(prevState => prevState.slice(1))
    swipe.setValue({x: 0, y: 0})
  }, [swipe])

  return (
    <View style={styles.swipeContainer}>
      {imagesToDisplay
        .map(({id, imageUrl}, index) => {
          const isFirst = index === 0
          const dragHandlers = isFirst ? panResponder.panHandlers : {}

          return (
            <MemeCard
              key={id}
              source={{uri: imageUrl}}
              isFirst={isFirst}
              swipe={swipe}
              tiltSign={tiltSign}
              {...dragHandlers}
            />
          )
        })
        .reverse()}
    </View>
  )
}
