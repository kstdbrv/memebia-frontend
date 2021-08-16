import {ImageSourcePropType, StyleSheet, ViewStyle} from "react-native"
import {COLORS} from "../../constants/colors"
import {Typography} from "../../styles/typography"

export const inputStyles = StyleSheet.create({
  input: {
    flex: 1,
    ...Typography.Regular.None.Regular,
    lineHeight: undefined,
    paddingVertical: 16,
  },
  inputImage: {
    alignItems: "center",
    height: 20,
    margin: 3,
    resizeMode: "stretch",
    width: 20,
  },
})

export const getInputStyles = (
  focused?: boolean,
  hasError?: boolean,
  leftIcon?: ImageSourcePropType,
  rightIcon?: ImageSourcePropType,
) => {
  let borderStyle: ViewStyle
  if (hasError) {
    borderStyle = {
      borderColor: COLORS.RED.BASE,
      borderWidth: 1,
    }
  } else {
    if (focused) {
      borderStyle = {
        borderColor: COLORS.PRIMARY.BASE,
        borderWidth: 1,
      }
    } else {
      borderStyle = {
        borderColor: COLORS.SKY.LIGHT,
        borderWidth: 1,
      }
    }
  }

  return StyleSheet.create({
    inputContainer: {
      alignItems: "center",
      borderRadius: 8,
      flexDirection: "row",
      paddingLeft: leftIcon ? 10 : 16,
      paddingRight: rightIcon ? 10 : 16,
      ...borderStyle,
    },
  })
}
