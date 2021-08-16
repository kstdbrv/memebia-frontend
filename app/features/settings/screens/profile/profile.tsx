import React, {FC} from "react"
import {styles} from "./profile.styles"
import {SectionList} from "react-native"
import {firstName, lastName, location, email, language} from "./constants"
import {ProfileHeader} from "./components/profile-header"
import {ItemProfile} from "./components/item-profile"
import {ListProfileHeader} from "./components/list-profile-header"
import {extractKeyFromItem} from "../utils/settings.utils"

export const Profile: FC = (): JSX.Element => {
  /* eslint-disable @typescript-eslint/no-empty-function */
  const PROFILE_SCREEN_DATA = [
    {
      data: [
        {
          title: "First name",
          onPress: () => {},
          profileItemData: firstName,
          placeholder: "enter first name",
          rightText: true,
        },
        {
          title: "Last name",
          onPress: () => {},
          profileItemData: lastName,
          placeholder: "enter last name",
          rightText: true,
        },
        {
          title: "Location",
          onPress: () => {},
          profileItemData: location,
          placeholder: "enter your location",
          rightText: true,
        },
      ],
    },
    {
      title: "ACCOUNT INFORMATION",
      data: [
        {
          title: "Email",
          onPress: () => {},
          profileItemData: email,
          placeholder: "enter your email",
          rightText: true,
        },
      ],
    },
    {
      title: "INTERNATIONAL PREFERENCES",
      data: [
        {
          title: "Language",
          onPress: () => {},
          profileItemData: language,
          placeholder: "",
          rightText: false,
        },
      ],
    },
  ]

  return (
    <SectionList
      style={styles.container}
      sections={PROFILE_SCREEN_DATA}
      keyExtractor={extractKeyFromItem}
      renderItem={({item}) => (
        <ItemProfile
          title={item.title}
          onPress={item.onPress}
          profileItemData={item.profileItemData}
          placeholder={item.placeholder}
          rightText={item.rightText}
        />
      )}
      renderSectionHeader={({section: {title}}) => title && <ListProfileHeader title={title} />}
      ListHeaderComponent={ProfileHeader}
    />
  )
}
