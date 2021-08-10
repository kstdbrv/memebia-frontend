import {Button} from "../../../app/features/common/components/button"
import {action} from "@storybook/addon-actions"
import {withKnobs} from "@storybook/addon-knobs"
import {storiesOf} from "@storybook/react-native"
import React from "react"
import CenterView from "../center-view"

const actions = {
  onPress: action("onButtonPress"),
}

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Default", () => <Button color="primary" title="Button" />)
  .add("Custom style", () => {
    return <Button color="primary" title="Button" {...actions} />
  })
