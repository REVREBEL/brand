import * as React from "react";
import * as Types from "./types";

declare function Icon(props: {
  as?: React.ElementType;
  iconVisibility?: Types.Boolean.Boolean;
  iconColor?:
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
  iconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  icon?: Types.Asset.Image;
  iconAltText?: Types.Basic.AltText;
}): React.JSX.Element;
