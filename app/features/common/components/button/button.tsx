import React from "react"
import {Pressable, PressableProps, Text} from "react-native"

import {stylesButton, stylesButtonTitle} from "./button.styles"

interface ButtonProps extends PressableProps {
  color: "primary" | "transparent"
  title: string
  style?: Record<string, number | string> | undefined
}

export const Button: React.FC<ButtonProps> = ({color, title, style, onPress}) => {
  return (
    <Pressable onPress={onPress} style={stylesButton(color, style)}>
      <Text style={stylesButtonTitle(color, style)}>{title}</Text>
    </Pressable>
  )
}
