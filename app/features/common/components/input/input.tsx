import React, {useCallback} from "react"
import {Image, ImageSourcePropType, TextInput, TextInputProps, View} from "react-native"
import {getInputStyles} from "./input.style"
import {COLORS} from "../../constants/colors"

export interface InputProps extends TextInputProps {
  hasError?: boolean
  leftIcon?: ImageSourcePropType
  rightIcon?: ImageSourcePropType
}

export const Input: React.FC<InputProps> = ({hasError, rightIcon, leftIcon, style, ...props}) => {
  const [focused, setFocused] = React.useState(false)
  const styles = getInputStyles(focused, hasError, leftIcon, rightIcon)

  const handleFocus = useCallback(() => setFocused(true), [])
  const handleBlur = useCallback(() => setFocused(false), [])

  return (
    <View style={[styles.inputContainer, style]}>
      {leftIcon && <Image source={leftIcon} style={styles.inputImage} />}
      <TextInput
        style={styles.input}
        placeholderTextColor={COLORS.INK.LIGHTER}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {rightIcon && <Image source={rightIcon} style={styles.inputImage} />}
    </View>
  )
}
