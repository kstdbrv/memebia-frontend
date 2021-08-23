export type NotificationProps = {
  type: "warning" | "error" | "success"
  message: string
  onClose?: () => void
  liveTime?: number
  id: string | number[]
}
