import React, {FC} from "react"
import {styles} from "./settings.style"
import {ScrollView, View} from "react-native"
import {Button} from "../../../common/components/button/button"
import {ListSettingsHeader} from "../settings/components/list-settings-header"
import {ItemSettings} from "./components/item-settings"

export const Settings: FC = (): JSX.Element => {
  /* eslint-disable @typescript-eslint/no-empty-function */
  const onPressProfile = () => {}
  const onPressPassword = () => {}
  const onPressNotifications = () => {}
  const onPressRateReview = () => {}
  const onPressHelp = () => {}

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <View style={styles.wrapper}>
        <ListSettingsHeader title="Account" />
        <ItemSettings
          title="Profile"
          image={require("../settings/images/profile.png")}
          onPress={onPressProfile}
        />
        <ItemSettings
          title="Password"
          image={require("../settings/images/password.png")}
          onPress={onPressPassword}
        />
        <ItemSettings
          title="Notifications"
          image={require("../settings/images/notifications.png")}
          onPress={onPressNotifications}
        />
        <ListSettingsHeader title="More" />
        <ItemSettings
          title="Rate & Review"
          image={require("../settings/images/rate-review.png")}
          onPress={onPressRateReview}
        />
        <ItemSettings
          title="Help"
          image={require("../settings/images/help.png")}
          onPress={onPressHelp}
        />
      </View>
      <Button style={styles.button} title="Log Out" color="secondary" />
    </ScrollView>
  )
}
