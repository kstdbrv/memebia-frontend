import {Swipe} from "../../../app/features/discoverer/components/swipe"
import {withKnobs} from "@storybook/addon-knobs"
import {storiesOf} from "@storybook/react-native"
import React from "react"
import CenterView from "../center-view"

const memes = [
  {
    name: "mem1",
    source: require("../../../assets/memes/1.png"),
  },
  {
    name: "mem2",
    source: require("../../../assets/memes/2.jpeg"),
  },
  {
    name: "mem3",
    source: require("../../../assets/memes/3.png"),
  },
  {
    name: "mem4",
    source: require("../../../assets/memes/4.jpeg"),
  },
]

storiesOf("Swipe", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Swipe", () => <Swipe memes={memes} />)
