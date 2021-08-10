import React, {FC} from "react"
import {View, Text} from "react-native"

import {styles} from "./choice.styles"
import {choicesColors} from "./constants"

type ChoicePropsType = {
  type: "LIKE" | "NOPE"
}

export const Choice: FC<ChoicePropsType> = ({type}) => {
  const color: string = choicesColors[type]

  return (
    <View style={[styles.choiceContainer, {borderColor: color}]}>
      <Text style={[styles.choiceText, {color: color}]}>{type}</Text>
    </View>
  )
}
