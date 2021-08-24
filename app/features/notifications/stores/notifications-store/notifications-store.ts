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
    this.notifications = [...this.notifications, {...payload, id: uuid.v4()}]
  }

  @action
  deleteNotification(index: number): void {
    const temp = [...this.notifications]
    temp.splice(index, 1)
    this.notifications = [...temp]
  }
}

export const notificationsStore = new NotificationsStore()
