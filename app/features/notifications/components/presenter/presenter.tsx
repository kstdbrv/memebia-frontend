import React from "react"
import {NotificationProps} from "@features/notifications/components/notification/notification.types"
import {observer} from "mobx-react"
import {Notification} from "@features/notifications/components/notification"
import {View} from "react-native"
import {styles} from "@features/notifications/components/presenter/presenter.styles"

const PresenterComponent = observer(({store}) => {
  const notifications = store.getNotifications

  const onClose = (index: number, notification: NotificationProps) => {
    if (notification.onClose) notification.onClose()
    store.deleteNotification(index)
  }

  return (
    <View style={styles.presenterContainer}>
      {notifications?.map((notification: NotificationProps, index: number) => {
        return (
          <Notification
            type={notification.type}
            message={notification.message}
            icon={notification.icon}
            key={notification.id.toString()}
            id={notification.id}
            liveTime={notification.liveTime}
            onClose={() => onClose(index, notification)}
          />
        )
      })}
    </View>
  )
})

export const Presenter = React.memo(PresenterComponent)
