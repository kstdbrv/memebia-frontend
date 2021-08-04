import {ButtonStyleProps} from "./button"
import {COLORS} from "../../constants/colors"

export const stylesButton = (
  color: "primary" | "transparent",
  style: ButtonStyleProps | undefined,
  isButtonPressed: boolean,
): ButtonStyleProps => {
  return {
    alignItems: "center",
    borderRadius: 48,
    padding: 16,
    width: 327,
    backgroundColor: !isButtonPressed
      ? color === "primary"
        ? COLORS.PRIMARY.BASE
        : COLORS.TRANSPARENT
      : COLORS.PRIMARY.LIGHTER,
    ...style,
  }
}

export const stylesButtonTitle = (
  color: "primary" | "transparent",
  style: ButtonStyleProps | undefined,
  isButtonPressed: boolean,
): ButtonStyleProps => {
  return {
    fontSize: 16,
    lineHeight: 16,
    color: !isButtonPressed
      ? color === "primary"
        ? COLORS.WHITE
        : COLORS.PRIMARY.BASE
      : COLORS.PRIMARY.BASE,
    ...style,
  }
}
