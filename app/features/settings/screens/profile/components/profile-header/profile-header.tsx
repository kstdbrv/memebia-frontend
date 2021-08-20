import React from "react"
import {styles} from "./profile-header.style"
import {View, Image, ImageSourcePropType} from "react-native"
import {Button} from "../../../../../common/components/button/button"

export const ProfileHeader = ({profilePhoto}: {profilePhoto: ImageSourcePropType}): JSX.Element => (
  <View style={styles.container}>
    <Image style={styles.profilePhoto} source={profilePhoto} />
    <Button style={styles.button} color="secondary" title="Change" />
  </View>
)
