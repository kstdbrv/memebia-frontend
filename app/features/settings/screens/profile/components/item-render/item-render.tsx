import React, {FC} from "react"
import {styles} from "./item-render.style"
import {View, Text, TouchableOpacity, Image} from "react-native"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageRight = require("../../../../../../assets/images/arrow.png")

interface Props {
  title: string | undefined
  onPress: () => void
  payload: string | null
  placeholder: string
}

export const ItemRender: FC<Props> = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    {!(props.title === "Language") ? (
      <Text style={styles.title}>{props.title}</Text>
    ) : (
      <View>
        <Text style={styles.titleLanguage}>{props.title}</Text>
        <Text style={styles.language}>{props.payload}</Text>
      </View>
    )}
    {!props.placeholder ? (
      <Image source={imageRight} />
    ) : props.payload ? (
      <Text style={styles.textPayload}>{props.payload}</Text>
    ) : (
      <Text style={styles.textPlaceholder}>{props.placeholder}</Text>
    )}
  </TouchableOpacity>
)
