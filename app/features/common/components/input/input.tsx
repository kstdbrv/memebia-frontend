import React, {ForwardedRef, forwardRef, Ref, RefObject, useCallback} from "react"
import {Image, ImageSourcePropType, TextInput, TextInputProps, View} from "react-native"
import {getInputStyles, inputStyles} from "./input.styles"
import {COLORS} from "../../constants/colors"

export interface InputProps extends TextInputProps {
  hasError?: boolean
  leftIcon?: ImageSourcePropType
  rightIcon?: ImageSourcePropType
}

// eslint-disable-next-line react/display-name
const InputComponent = forwardRef<TextInput, InputProps>((props, forwardRef) => {
  const {hasError, rightIcon, onBlur, onFocus, leftIcon, style, ...rest} = props
  const [focused, setFocused] = React.useState(false)
  const handleFocus = useCallback(
    event => {
      setFocused(true)
      onFocus && onFocus(event)
    },
    [onFocus],
  )
  const handleBlur = useCallback(
    event => {
      setFocused(false)
      onBlur && onBlur(event)
    },
    [onBlur],
  )

  const styles = getInputStyles(focused, hasError, leftIcon, rightIcon)

  return (
    <View style={[styles.inputContainer, style]}>
      {leftIcon && <Image source={leftIcon} style={inputStyles.inputImage} />}
      <TextInput
        {...rest}
        ref={forwardRef}
        style={inputStyles.input}
        placeholderTextColor={COLORS.INK.LIGHTER}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {rightIcon && <Image source={rightIcon} style={inputStyles.inputImage} />}
    </View>
  )
})

export const Input = React.memo(InputComponent)
