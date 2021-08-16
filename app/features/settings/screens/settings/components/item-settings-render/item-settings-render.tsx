import React, {FC} from "react"
import {styles} from "./item-settings-render.style"
import {View, Text, TouchableOpacity, Image, ImageSourcePropType} from "react-native"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageRight = require("../../../../../../../assets/images/arrow.png")

interface Props {
  title: string
  onPress: () => void
  image: ImageSourcePropType
}

export const ItemSettingsRender: FC<Props> = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <View style={styles.wrapper}>
      <Image source={props.image} />
      <Text style={styles.item}>{props.title}</Text>
    </View>
    <Image source={imageRight} />
  </TouchableOpacity>
)
