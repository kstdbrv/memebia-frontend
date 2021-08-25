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
    this.notifications.push({...payload, id: uuid.v4()})
  }

  @action
  deleteNotification(
    id: string | number[],
    timeoutID?: null | ReturnType<typeof setTimeout>,
  ): void {
    const temp = [...this.notifications]
    const index = temp.findIndex(notification => notification?.id === id)
    if (index > -1) {
      temp.splice(index, 1)
      this.notifications = [...temp]
    }
    if (timeoutID) clearTimeout(timeoutID)
  }
}

export const notificationsStore = new NotificationsStore()
