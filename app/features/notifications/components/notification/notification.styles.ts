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
      margin: 10,
      resizeMode: "stretch",
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
    notificationIcon: {
      alignItems: "center",
      height: 20,
      margin: 10,
      resizeMode: "stretch",
      width: 20,
    },
    notificationText: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      ...Typography.Small.Normal.Regular,
      ...textStyle,
    },
    pressContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
  })
}
