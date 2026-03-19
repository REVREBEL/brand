import * as React from "react";
import * as Types from "./types";

declare function IconVariant(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  iconAltText?: Types.Basic.AltText;
}): React.JSX.Element;
