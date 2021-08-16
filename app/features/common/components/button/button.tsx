import React, {useCallback, useState} from "react"
import {Pressable, PressableProps, Text, TextStyle} from "react-native"

import {getStylesForButton, getStylesForButtonText} from "./button.styles"
import {ButtonColor} from "@features/common/components/button/button.types"

interface ButtonProps extends PressableProps {
  color: ButtonColor
  title: string
  style?: TextStyle
}

const ButtonComponent: React.FC<ButtonProps> = ({
  color,
  disabled,
  title,
  style,
  onPress,
  ...rest
}) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const onPressIn = useCallback(() => setIsButtonPressed(true), [])
  const onPressOut = useCallback(() => setIsButtonPressed(false), [])

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={getStylesForButton({
        color,
        disabled,
        style,
        isButtonPressed,
      })}
      {...rest}>
      <Text
        style={getStylesForButtonText({
          color,
          disabled,
          isButtonPressed,
        })}>
        {title}
      </Text>
    </Pressable>
  )
}

export const Button = React.memo(ButtonComponent)
