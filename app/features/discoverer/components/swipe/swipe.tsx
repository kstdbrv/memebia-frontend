import React, {useState, useRef, useCallback, useEffect, FC} from "react"
import {View, Animated, PanResponder, ImageURISource} from "react-native"
import {observer} from "mobx-react-lite"

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

type MemeType = {
  id: string
  imageUrl: ImageURISource["uri"]
}

type MemesType = MemeType[]

type SwipePropsType = {
  memes: MemesType
}

const SwipeScreen: FC<SwipePropsType> = ({memes}) => {
  const [memesToDisplay, setMemesToDisplay] = useState(memes)
  const swipe = useRef(new Animated.ValueXY()).current
  const tiltSign = useRef(new Animated.Value(1)).current

  useEffect(() => {
    if (!memesToDisplay.length) {
      setMemesToDisplay(memes)
    }
  }, [memesToDisplay.length])

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
    setMemesToDisplay(prevState => prevState.slice(1))
    swipe.setValue({x: 0, y: 0})
  }, [swipe])

  return (
    <View style={styles.swipeContainer}>
      {memesToDisplay
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

export const Swipe = observer(SwipeScreen)
