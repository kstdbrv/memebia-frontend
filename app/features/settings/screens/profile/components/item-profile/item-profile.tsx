import React, {FC} from "react"
import {styles} from "./item-profile.style"
import {View, Text, TouchableOpacity, Image} from "react-native"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageRight = require("../../../../../../../assets/images/arrow.png")

interface ItemProfileProps {
  title: string | undefined
  onPress: () => void
  profileItemData: string | null
  placeholder: string
  rightText: boolean
}

export const ItemProfile: FC<ItemProfileProps> = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    {props.rightText ? (
      <Text style={styles.title}>{props.title}</Text>
    ) : (
      <View>
        <Text style={styles.titleLanguage}>{props.title}</Text>
        <Text style={styles.language}>{props.profileItemData}</Text>
      </View>
    )}
    {!props.rightText ? (
      <Image source={imageRight} />
    ) : props.profileItemData ? (
      <Text style={styles.textPayload}>{props.profileItemData}</Text>
    ) : (
      <Text style={styles.textPlaceholder}>{props.placeholder}</Text>
    )}
  </TouchableOpacity>
)
