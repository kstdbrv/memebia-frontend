import {withKnobs} from "@storybook/addon-knobs"
import {storiesOf} from "@storybook/react-native"
import React from "react"
import {Settings} from "../../../app/features/settings/screens/settings"

storiesOf("Settings", module)
  .addDecorator(withKnobs)
  .add("Settings", () => <Settings />)
