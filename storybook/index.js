import {configure, getStorybookUI} from "@storybook/react-native"
import React from "react"

configure(() => {
  require("./stories")
}, module)

export const StorybookUI = getStorybookUI({
  port: 9001,
  host: "localhost",
  onDeviceUI: true,
  asyncStorage: null,
})

export function StorybookUIRoot() {
  return <StorybookUI />
}
