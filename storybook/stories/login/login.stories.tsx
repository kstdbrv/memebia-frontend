import {Login} from "@features/login/screens/login"
import {withKnobs} from "@storybook/addon-knobs"
import {storiesOf} from "@storybook/react-native"
import React from "react"

storiesOf("Login", module)
  .addDecorator(withKnobs)
  .add("Login", () => <Login />)
