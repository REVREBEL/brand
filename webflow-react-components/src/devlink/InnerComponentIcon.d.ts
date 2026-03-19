import * as React from "react";
import * as Types from "./types";

declare function InnerComponentIcon(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  imageImage?: Types.Asset.Image;
  imageImageAltText?: Types.Basic.AltText;
  /** For use when the button has been selected or liked.*/
  isActive?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
