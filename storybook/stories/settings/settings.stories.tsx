import {withKnobs} from "@storybook/addon-knobs"
import {storiesOf} from "@storybook/react-native"
import React from "react"
import CenterView from "../center-view"
import {Settings} from "../../../app/features/settings/screens/settings"

storiesOf("Settings", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Settings", () => <Settings />)
