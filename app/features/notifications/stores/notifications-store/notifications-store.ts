import {action, computed, makeObservable, observable} from "mobx"
import uuid from "react-native-uuid"
import {NotificationProps} from "@features/notifications/components/notification/notification.types"
import {ImageSourcePropType} from "react-native"

export class NotificationsStore {
  @observable
  private notifications: Array<NotificationProps | null> = []

  constructor() {
    makeObservable(this)
  }

  @computed
  get getNotifications(): Array<NotificationProps | null> {
    return this.notifications
  }

  @action
  addNotification(payload: {
    type: "warning" | "error" | "success"
    message: string
    icon?: ImageSourcePropType
    onClose?: () => void
    liveTime?: number
  }): void {
    const id = uuid.v4()
    let timeoutId
    if (payload.liveTime)
      timeoutId = setTimeout(() => this.deleteNotification(id), payload.liveTime)
    this.notifications.push({...payload, id, timeoutId})
  }

  @action
  deleteNotification(id: string | number[], timeoutID?: ReturnType<typeof setTimeout>): void {
    const index = this.notifications.findIndex(notification => notification?.id === id)
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
    const deletedNotification = this.notifications[index]
    if (deletedNotification && deletedNotification.onClose) deletedNotification.onClose()
    this.notifications.splice(index, 1)
  }
}

export const notificationsStore = new NotificationsStore()
