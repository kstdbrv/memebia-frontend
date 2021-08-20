import React, {FC} from "react"
import {styles} from "./profile.styles"
import {ScrollView} from "react-native"
import {profilePersonalData} from "./constants"
import {ProfileHeader} from "./components/profile-header"
import {ItemProfile} from "./components/item-profile"
import {ListProfileHeader} from "./components/list-profile-header"

export const Profile: FC = (): JSX.Element => {
  /* eslint-disable @typescript-eslint/no-empty-function */
  const onPressFirstName = () => {}
  const onPressLasrtName = () => {}
  const onPressLocation = () => {}
  const onPressEmail = () => {}
  const onPressLanguage = () => {}

  const {firstName, lastName, email, location, language, profilePhoto} = profilePersonalData

  return (
    <ScrollView style={styles.container} bounces={false}>
      <ProfileHeader profilePhoto={profilePhoto} />
      <ItemProfile
        title="First name"
        profileItemData={firstName}
        placeholder="enter first name"
        rightText
        onPress={onPressFirstName}
      />
      <ItemProfile
        title="Last name"
        profileItemData={lastName}
        placeholder="enter last name"
        rightText
        onPress={onPressLasrtName}
      />
      <ItemProfile
        title="Location"
        profileItemData={location}
        placeholder="enter your location"
        rightText
        onPress={onPressLocation}
      />
      <ListProfileHeader title="ACCOUNT INFORMATION" />
      <ItemProfile
        title="Email"
        profileItemData={email}
        placeholder="enter your email"
        rightText
        onPress={onPressEmail}
      />
      <ListProfileHeader title="INTERNATIONAL PREFERENCES" />
      <ItemProfile
        title="Language"
        profileItemData={language}
        placeholder=""
        rightText={false}
        onPress={onPressLanguage}
      />
    </ScrollView>
  )
}
