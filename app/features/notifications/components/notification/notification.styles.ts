import {StyleSheet, TextStyle, ViewStyle} from "react-native"
import {COLORS} from "@features/common/constants/colors"
import {Typography} from "@features/common/styles/typography"

export const getNotificationStyles = (type: "warning" | "error" | "success") => {
  let viewStyle: ViewStyle
  let textStyle: TextStyle
  switch (type) {
    case "success": {
      viewStyle = {
        backgroundColor: COLORS.GREEN.LIGHTER,
        borderColor: COLORS.GREEN.BASE,
      }
      textStyle = {
        color: COLORS.GREEN.DARKEST,
      }
      break
    }
    case "warning": {
      viewStyle = {
        backgroundColor: COLORS.YELLOW.LIGHTER,
        borderColor: COLORS.YELLOW.BASE,
      }
      textStyle = {
        color: COLORS.YELLOW.DARKEST,
      }
      break
    }
    case "error": {
      viewStyle = {
        backgroundColor: COLORS.RED.LIGHTER,
        borderColor: COLORS.RED.BASE,
      }
      textStyle = {
        color: COLORS.RED.DARKEST,
      }
    }
  }

  return StyleSheet.create({
    notificationCloseIcon: {
      height: 10,
      position: "absolute",
      resizeMode: "stretch",
      right: 15,
      top: 15,
      width: 10,
    },
    notificationContainer: {
      alignItems: "center",
      borderRadius: 3,
      borderWidth: 1,
      opacity: 0.9,
      width: "98%",
      ...viewStyle,
    },
    notificationText: {
      paddingHorizontal: 30,
      paddingVertical: 10,
      ...Typography.Small.Normal.Regular,
      ...textStyle,
    },
    pressContainer: {
      alignItems: "center",
      width: "100%",
    },
  })
}
