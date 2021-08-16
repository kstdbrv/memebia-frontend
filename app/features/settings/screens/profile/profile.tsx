import React, {FC} from "react"
import {styles} from "./profile.styles"
import {SectionList} from "react-native"
import {firstName, lastName, location, email, language} from "./constants"
import {ProfileHeader} from "./components/profile-header"
import {ItemProfileRender} from "./components/item-profile-render"
import {ListProfileHeader} from "./components/list-profile-header"

export const Profile: FC = (): JSX.Element => {
  /* eslint-disable @typescript-eslint/no-empty-function */
  const PROFILE_SCREEN_DATA = [
    {
      data: [
        {
          title: "First name",
          onPress: () => {},
          payload: firstName,
          placeholder: "enter first name",
        },
        {
          title: "Last name",
          onPress: () => {},
          payload: lastName,
          placeholder: "enter last name",
        },
        {
          title: "Location",
          onPress: () => {},
          payload: location,
          placeholder: "enter your location",
        },
      ],
    },
    {
      title: "ACCOUNT INFORMATION",
      data: [
        {
          title: "Email",
          onPress: () => {},
          payload: email,
          placeholder: "enter your email",
        },
      ],
    },
    {
      title: "INTERNATIONAL PREFERENCES",
      data: [
        {
          title: "Language",
          onPress: () => {},
          payload: language,
          placeholder: "",
        },
      ],
    },
  ]

  return (
    <SectionList
      style={styles.container}
      sections={PROFILE_SCREEN_DATA}
      keyExtractor={({title}, index) => title + index}
      renderItem={({item}) => (
        <ItemProfileRender
          title={item.title}
          onPress={item.onPress}
          payload={item.payload}
          placeholder={item.placeholder}
        />
      )}
      renderSectionHeader={({section: {title}}) => title && <ListProfileHeader title={title} />}
      ListHeaderComponent={ProfileHeader}
    />
  )
}
