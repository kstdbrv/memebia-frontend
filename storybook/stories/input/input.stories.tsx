import React from "react"
import {Input} from "../../../app/features/common/components/input"
import {storiesOf} from "@storybook/react-native"
import CenterView from "../center-view"
import {boolean, text, withKnobs} from "@storybook/addon-knobs"

storiesOf("Input", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("default", () => <Input placeholder={text("input text", "default")} />)
  .add("with error", () => (
    <Input
      placeholder={text("input text", "error")}
      hasError={boolean("hasError", true)}
      keyboardType="numeric"
    />
  ))
  .add("leftIcon", () => (
    <Input
      placeholder={text("input text", "with left icon")}
      leftIcon={{uri: "https://image.flaticon.com/icons/png/512/33/33281.png"}}
    />
  ))
  .add("rightIcon", () => (
    <Input
      placeholder={text("input text", "with right icon")}
      rightIcon={{uri: "https://image.flaticon.com/icons/png/512/159/159604.png"}}
    />
  ))
