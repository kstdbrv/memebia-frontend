import {ButtonStyleProps} from "./button"
import {COLORS} from "../../constants/colors"

export const stylesButton = (
  color: "primary" | "transparent",
  style: ButtonStyleProps | undefined,
): ButtonStyleProps => {
  return {
    alignItems: "center",
    borderRadius: 48,
    padding: 16,
    width: 327,
    backgroundColor: color === "primary" ? COLORS.PRIMARY : COLORS.TRANSPARENT,
    ...style,
  }
}

export const stylesButtonTitle = (
  color: "primary" | "transparent",
  style: ButtonStyleProps | undefined,
): ButtonStyleProps => {
  return {
    fontSize: 16,
    lineHeight: 16,
    color: color === "primary" ? COLORS.WHITE : COLORS.PRIMARY,
    ...style,
  }
}
