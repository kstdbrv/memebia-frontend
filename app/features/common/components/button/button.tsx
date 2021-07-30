import React from "react"
import {Pressable, PressableProps, Text, TextStyle} from "react-native"

import {stylesButton, stylesButtonTitle} from "./button.styles"

export type ButtonStyleProps = TextStyle

interface ButtonProps extends PressableProps {
  color: "primary" | "transparent"
  title: string
  style?: ButtonStyleProps
}

export const Button: React.FC<ButtonProps> = ({color, title, style, onPress}) => {
  return (
    <Pressable onPress={onPress} style={stylesButton(color, style)}>
      <Text style={stylesButtonTitle(color, style)}>{title}</Text>
    </Pressable>
  )
}
