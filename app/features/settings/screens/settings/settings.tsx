import React, {FC} from "react"
import {styles} from "./settings.style"
import {View, SectionList, useWindowDimensions} from "react-native"
import {Button} from "../../../common/components/button/button"
import {ListHeader} from "../../components/list-header"
import {ItemRender} from "../../components/item-render"

export const Settings: FC = (): JSX.Element => {
  const window = useWindowDimensions()
  /* eslint-disable @typescript-eslint/no-empty-function */
  const SETTINGS_SCREEN_DATA = [
    {
      title: "Account",
      data: [
        {
          title: "Profile",
          onPress: () => {},
          image: require("../../images/profile.png"),
        },
        {
          title: "Password",
          onPress: () => {},
          image: require("../../images/password.png"),
        },
        {
          title: "Notifications",
          onPress: () => {},
          image: require("../..//images/notifications.png"),
        },
      ],
    },
    {
      title: "More",
      data: [
        {
          title: "Rate & Review",
          onPress: () => {},
          image: require("../../images/rate-review.png"),
        },
        {
          title: "Help",
          onPress: () => {},
          image: require("../../images/help.png"),
        },
      ],
    },
  ]

  return (
    <SectionList
      style={styles.container}
      sections={SETTINGS_SCREEN_DATA}
      keyExtractor={({title}, index) => title + index}
      renderItem={({item}) => (
        <ItemRender title={item.title} onPress={item.onPress} image={item.image} />
      )}
      renderSectionHeader={({section: {title}}) => <ListHeader title={title} />}
      ListFooterComponent={
        <View style={{marginTop: window.height - 530}}>
          <Button color="transparent" title="Log out" style={styles.logoutButton} />
        </View>
      }
    />
  )
}
