import React, {FC} from "react"
import {styles} from "./settings.style"
import {View, SectionList, useWindowDimensions} from "react-native"
import {Button} from "../../../common/components/button/button"
import {ListSettingsHeader} from "../settings/components/list-settings-header"
import {ItemSettings} from "./components/item-settings"
import {extractKeyFromItem} from "../utils/settings.utils"

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
          image: require("../settings/images/profile.png"),
        },
        {
          title: "Password",
          onPress: () => {},
          image: require("../settings/images/password.png"),
        },
        {
          title: "Notifications",
          onPress: () => {},
          image: require("../settings/images/notifications.png"),
        },
      ],
    },
    {
      title: "More",
      data: [
        {
          title: "Rate & Review",
          onPress: () => {},
          image: require("../settings/images/rate-review.png"),
        },
        {
          title: "Help",
          onPress: () => {},
          image: require("../settings/images/help.png"),
        },
      ],
    },
  ]

  return (
    <SectionList
      style={styles.container}
      sections={SETTINGS_SCREEN_DATA}
      keyExtractor={extractKeyFromItem}
      renderItem={({item}) => (
        <ItemSettings title={item.title} onPress={item.onPress} image={item.image} />
      )}
      renderSectionHeader={({section: {title}}) => <ListSettingsHeader title={title} />}
      ListFooterComponent={
        <View style={{marginTop: window.height - 530}}>
          <Button color="transparent" title="Log out" />
        </View>
      }
    />
  )
}
