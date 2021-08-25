import React from "react"
import {View} from "react-native"
import {observer} from "mobx-react-lite"
import {NotificationProps} from "@features/notifications/components/notification/notification.types"
import {Notification} from "@features/notifications/components/notification"
import {styles} from "@features/notifications/components/presenter/presenter.styles"
import {notificationsStore} from "@features/notifications/stores/notifications-store"

const PresenterComponent: React.FC = () => {
  const notifications = notificationsStore.getNotifications

  const onClose = (
    notification: NotificationProps | null,
    timeoutID?: null | ReturnType<typeof setTimeout>,
  ) => {
    if (notification?.onClose) notification.onClose()
    if (notification) notificationsStore.deleteNotification(notification.id, timeoutID)
  }

  return (
    <View style={styles.presenterContainer}>
      {notifications?.map((notification: NotificationProps | null) => {
        if (notification)
          return (
            <Notification
              type={notification.type}
              message={notification.message}
              icon={notification.icon}
              key={notification.id.toString()}
              id={notification.id}
              liveTime={notification.liveTime}
              onClose={(timeoutID?: null | ReturnType<typeof setTimeout>) =>
                onClose(notification, timeoutID)
              }
            />
          )
      })}
    </View>
  )
}

export const Presenter = observer(PresenterComponent)
