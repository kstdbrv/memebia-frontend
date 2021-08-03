import React, {useState} from "react"
import {Pressable, PressableProps, Text, TextStyle} from "react-native"

import {stylesButton, stylesButtonTitle} from "./button.styles"

export type ButtonStyleProps = TextStyle

interface ButtonProps extends PressableProps {
  color: "primary" | "transparent"
  title: string
  style?: ButtonStyleProps
}

export const Button: React.FC<ButtonProps> = ({color, title, style, onPress, ...rest}) => {
  const [isButtonPressed, changeIsButtonPressed] = useState(false)

  return (
    <Pressable
      onPress={onPress}
      onPressOut={() => changeIsButtonPressed(true)}
      style={stylesButton(color, style, isButtonPressed)}
      {...rest}>
      <Text style={stylesButtonTitle(color, style, isButtonPressed)}>{title}</Text>
    </Pressable>
  )
}
