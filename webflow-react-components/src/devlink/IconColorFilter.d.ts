import * as React from "react";
import * as Types from "./types";

declare function IconColorFilter(props: {
  as?: React.ElementType;
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
  icon?: Types.Asset.Image;
  iconVisibility?: Types.Boolean.Boolean;
  iconAltText?: Types.Basic.AltText;
}): React.JSX.Element;
