import React from "react"
import {NotificationProps} from "@features/notifications/components/notification/notification.types"
import {observer} from "mobx-react"
import {Notification} from "@features/notifications/components/notification"
import {View} from "react-native"
import {styles} from "@features/notifications/components/presenter/presenter.styles"

const PresenterComponent = observer(({store}) => {
  const notifications = store.getNotifications

  const onClose = (
    notification: NotificationProps,
    timeoutID?: null | ReturnType<typeof setTimeout>,
  ) => {
    if (notification.onClose) notification.onClose()
    store.deleteNotification(notification.id, timeoutID)
  }

  return (
    <View style={styles.presenterContainer}>
      {notifications?.map((notification: NotificationProps) => {
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
})

export const Presenter = React.memo(PresenterComponent)
