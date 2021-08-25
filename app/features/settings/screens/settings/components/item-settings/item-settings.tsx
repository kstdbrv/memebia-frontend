import React, {FC} from "react"
import {styles} from "./item-settings.style"
import {View, Text, TouchableOpacity, Image, ImageSourcePropType} from "react-native"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageRight = require("../../../../../../../assets/images/arrow.png")

interface ItemSettingsProps {
  title: string
  onPress: () => void
  image: ImageSourcePropType
}

export const ItemSettings: FC<ItemSettingsProps> = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <View style={styles.wrapper}>
      <Image source={props.image} />
      <Text style={styles.item}>{props.title}</Text>
    </View>
    <Image source={imageRight} />
  </TouchableOpacity>
)
