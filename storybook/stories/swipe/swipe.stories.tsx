import {Swipe} from "../../../app/features/common/components/swipe"
import {withKnobs} from "@storybook/addon-knobs"
import {storiesOf} from "@storybook/react-native"
import React from "react"
import CenterView from "../center-view"

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Swipe", () => <Swipe />)
