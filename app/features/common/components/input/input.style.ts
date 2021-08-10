import {ImageSourcePropType, StyleSheet} from "react-native"
import {COLORS} from "../../constants/colors"
import {Typography} from "../../styles/typography"

type BorderStyle = {
  borderColor: string
  borderWidth: number
}

export const getInputStyles = (
  focused?: boolean,
  hasError?: boolean,
  leftIcon?: ImageSourcePropType,
  rightIcon?: ImageSourcePropType,
) => {
  let borderStyle: BorderStyle
  if (hasError) {
    borderStyle = {
      borderColor: COLORS.RED.BASE,
      borderWidth: 2,
    }
  } else {
    if (focused) {
      borderStyle = {
        borderColor: COLORS.PRIMARY.BASE,
        borderWidth: 2,
      }
    } else {
      borderStyle = {
        borderColor: COLORS.SKY.LIGHT,
        borderWidth: 1,
      }
    }
  }

  return StyleSheet.create({
    input: {
      flex: 1,
      height: 48,
      ...Typography.Regular.None.Regular,
    },
    inputContainer: {
      alignItems: "center",
      borderBottomWidth: 1,
      borderRadius: 8,
      borderStyle: "solid",
      flexDirection: "row",
      height: 48,
      justifyContent: "center",
      padding: 16,
      paddingLeft: leftIcon ? 10 : 16,
      paddingRight: rightIcon ? 10 : 16,
      width: 327,
      ...borderStyle,
    },
    inputImage: {
      alignItems: "center",
      height: 20,
      margin: 3,
      resizeMode: "stretch",
      width: 20,
    },
  })
}
