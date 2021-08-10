import React, {useState, useRef, useCallback, useEffect, FC} from "react"
import {View, Animated, PanResponder, ImageSourcePropType} from "react-native"

import {MemeCard} from "../../../display-oriented/components/meme-card"
import {ACTIONS_OFFSET} from "../../constants/actions-offset"
import {CARD} from "../../constants/card"
import {styles} from "./swipe.styles"
import {swipeConstants} from "./constants"

type MemeHardcodeType = {
  name: string
  source: ImageSourcePropType
}

type MemesHardcodeType = MemeHardcodeType[]

const memesHardcode: MemesHardcodeType = [
  {
    name: "mem1",
    source: require("../../../../../assets/memes/1.png"),
  },
  {
    name: "mem2",
    source: require("../../../../../assets/memes/2.jpeg"),
  },
  {
    name: "mem3",
    source: require("../../../../../assets/memes/3.png"),
  },
  {
    name: "mem4",
    source: require("../../../../../assets/memes/4.jpeg"),
  },
]

export const Swipe: FC = () => {
  const [memes, setMemes] = useState(memesHardcode)
  const swipe = useRef(new Animated.ValueXY()).current
  const tiltSign = useRef(new Animated.Value(1)).current

  useEffect(() => {
    if (!memes.length) {
      setMemes(memesHardcode)
    }
  }, [memes.length])

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy, y0}) => {
      swipe.setValue({x: dx, y: dy})
      tiltSign.setValue(
        y0 > CARD.HEIGHT / swipeConstants.cardHeightDivider
          ? swipeConstants.positiveTouchHeight
          : swipeConstants.negativeTouchHeight,
      )
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx)
      const isActionActive = Math.abs(dx) > ACTIONS_OFFSET

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: swipeConstants.duration,
          toValue: {
            x: direction * swipeConstants.directionFactor,
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
          friction: 5,
        }).start()
      }
    },
  })

  const removeTopCard = useCallback(() => {
    setMemes(prevState => prevState.slice(1))
    swipe.setValue({x: 0, y: 0})
  }, [swipe])

  return (
    <View style={styles.swipeContainer}>
      {memes
        .map(({name, source}, index) => {
          const isFirst = index === 0
          const dragHandlers = isFirst ? panResponder.panHandlers : {}

          return (
            <MemeCard
              key={name}
              source={source}
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
