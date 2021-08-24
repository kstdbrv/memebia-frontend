import {withKnobs} from "@storybook/addon-knobs"
import {storiesOf} from "@storybook/react-native"
import React from "react"
import {Profile} from "../../../app/features/settings/screens/profile"

storiesOf("Profile", module)
  .addDecorator(withKnobs)
  .add("Profile", () => <Profile />)
