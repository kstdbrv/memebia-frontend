import React from "react"
import {StyleProp, View, ViewProps, ViewStyle} from "react-native"
import {centerViewStyles} from "./style"

export interface CenterViewProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export default function CenterView({children, style}: CenterViewProps) {
  return <View style={[centerViewStyles.main, style]}>{children}</View>
}

CenterView.defaultProps = {
  children: null,
}
