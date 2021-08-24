import {ImageSourcePropType} from "react-native"

export type NotificationProps = {
  type: "warning" | "error" | "success"
  message: string
  icon?: ImageSourcePropType
  onClose?: (timeoutID?: null | ReturnType<typeof setTimeout>) => void
  liveTime?: number
  id: string | number[]
}
