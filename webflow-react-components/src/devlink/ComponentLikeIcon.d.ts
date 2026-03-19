import * as React from "react";
import * as Types from "./types";

declare function ComponentLikeIcon(props: {
  as?: React.ElementType;
  /** For use when the button has been selected or liked.*/
  isActive?: Types.Visibility.VisibilityConditions;
  /** The main icon color when is normal status (before being liked)*/
  mainIconColorVariants?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  /** The inner part of the icon that displays after being liked.*/
  innerIconColorVariants?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  mainIconImage?: Types.Asset.Image;
  mainIconAltText?: Types.Basic.AltText;
  innerIconImage?: Types.Asset.Image;
  innerIconAltText?: Types.Basic.AltText;
  iconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
}): React.JSX.Element;
