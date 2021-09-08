import {ImageSourcePropType} from "react-native"

export type NotificationProps = {
  type: "warning" | "error" | "success"
  message: string
  icon?: ImageSourcePropType
  onClose?: () => void
  liveTime?: number
  id: string | number[]
  timeoutId?: ReturnType<typeof setTimeout>
}
