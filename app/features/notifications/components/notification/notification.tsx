import React, {useRef} from "react"
import {Animated, Image, Pressable, Text} from "react-native"
import {getNotificationStyles} from "@features/notifications/components/notification/notification.styles"
import {NotificationProps} from "@features/notifications/components/notification/notification.types"

const OPEN_TIME = 1000
const CLOSE_TIME = 1000
const CLOSE_ICON = "https://image.flaticon.com/icons/png/512/1828/1828747.png"

const NotificationComponent: React.FC<NotificationProps> = ({type, message, onClose, liveTime}) => {
  const styles = getNotificationStyles(type)
  let timeoutId: null | ReturnType<typeof setTimeout> = null
  const animatedShown = useRef(new Animated.Value(0)).current
  const animatedTop = animatedShown.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
  })

  Animated.timing(animatedShown, {
    useNativeDriver: true,
    toValue: 1,
    duration: OPEN_TIME,
  }).start()

  const onPress = () => {
    Animated.timing(animatedShown, {
      useNativeDriver: true,
      toValue: 0,
      duration: CLOSE_TIME,
    }).start()
    setTimeout(onClose, CLOSE_TIME / 2)
    if (timeoutId) clearTimeout(timeoutId)
  }

  if (liveTime) {
    timeoutId = setTimeout(onPress, liveTime)
  }

  return (
    <Animated.View
      style={[
        styles.notificationContainer,
        {opacity: animatedShown},
        {transform: [{translateY: animatedTop}]},
      ]}>
      <Pressable onPress={onPress} style={styles.pressContainer}>
        <Text style={styles.notificationText}>
          {type}! {message}
        </Text>
        <Image source={{uri: CLOSE_ICON}} style={styles.notificationCloseIcon} />
      </Pressable>
    </Animated.View>
  )
}

export const Notification = React.memo(NotificationComponent)
