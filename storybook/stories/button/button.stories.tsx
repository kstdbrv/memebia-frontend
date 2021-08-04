// import {Button} from "@features/common/components"
// import {action} from "@storybook/addon-actions"
// import {boolean, text, withKnobs} from "@storybook/addon-knobs"
// import {storiesOf} from "@storybook/react-native"
// import React from "react"
// import CenterView from "../center-view"

// const actions = {
//   onPress: action("onButtonPress"),
// }
//
// storiesOf("Button", module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .addDecorator(withKnobs)
//   .add("Default", () => <Button title={text("Button Text", "Spend")} {...actions} />)
//   .add("Loading", () => (
//     <Button isLoading={true} title={text("Button Text", "Spend")} {...actions} />
//   ))
//   .add("Custom style", () => {
//     const customStyle = {
//       width: 300,
//     }
//
//     return (
//       <Button
//         style={customStyle}
//         isLoading={boolean("isLoading", false)}
//         title={text("Button Text", "Spend")}
//         {...actions}
//       />
//     )
//   })
//
