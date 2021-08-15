import React from "react"
import {styles} from "./profile-header.style"
import {View, Image} from "react-native"
import {Button} from "../../../../../common/components/button/button"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const profilePhoto = require("../../images/profile-photo.png")

export const ProfileHeader = (): JSX.Element => (
  <View style={styles.container}>
    <Image style={styles.profilePhoto} source={profilePhoto} />
    <Button style={styles.button} color="primary" title="Change" />
  </View>
)
