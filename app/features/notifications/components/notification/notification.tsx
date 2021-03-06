import React, {useEffect, useRef} from "react"
import {Animated, Image, Pressable, Text} from "react-native"
import {getNotificationStyles} from "@features/notifications/components/notification/notification.styles"
import {NotificationProps} from "@features/notifications/components/notification/notification.types"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const CLOSE_ICON = require("../../../../../assets/images/close.png")
const OPEN_TIME = 1000
const CLOSE_TIME = 1000

const NotificationComponent: React.FC<NotificationProps> = ({type, message, icon, onClose}) => {
  const styles = getNotificationStyles(type)
  const animatedShown = useRef(new Animated.Value(0)).current
  const animatedTop = animatedShown.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
  })

  const closeNotification = () => {
    if (onClose) {
      Animated.timing(animatedShown, {
        useNativeDriver: true,
        toValue: 0,
        duration: CLOSE_TIME,
      }).start(onClose)
    }
  }

  useEffect(() => {
    Animated.timing(animatedShown, {
      useNativeDriver: true,
      toValue: 1,
      duration: OPEN_TIME,
    }).start()
  }, [])

  return (
    <Animated.View
      style={[
        styles.notificationContainer,
        {opacity: animatedShown},
        {transform: [{translateY: animatedTop}]},
      ]}>
      <Pressable onPress={closeNotification} style={styles.pressContainer}>
        {icon && <Image source={icon} style={styles.notificationIcon} />}
        <Text style={styles.notificationText}>
          {type}! {message}
        </Text>
        <Image source={CLOSE_ICON} style={styles.notificationCloseIcon} />
      </Pressable>
    </Animated.View>
  )
}

export const Notification = React.memo(NotificationComponent)
