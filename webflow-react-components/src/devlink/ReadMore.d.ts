import * as React from "react";
import * as Types from "./types";

declare function ReadMore(props: {
  as?: React.ElementType;
  readMoreReadMoreId?: Types.Basic.IdTextInput;
  readMoreReadMoreVisibility?: Types.Visibility.VisibilityConditions;
  readMoreFontColorVariants?:
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
    | "Color 1 Inverse"
    | "Color 2 Inverse"
    | "Color 3 Inverse"
    | "Color 4 Inverse"
    | "Color 5 Inverse"
    | "Color 6 Inverse"
    | "Color 7 Inverse"
    | "Color 8 Inverse"
    | "Color 9 Inverse"
    | "Light"
    | "Dark";
  readMoreUnderlineVariants?: "Underline" | "Underline [ON-HOVER]";
  readMoreResponsiveTextVariants?:
    | "Medium Label"
    | "Regular Label"
    | "Small Label"
    | "Extra Small Label";
  readMoreReadMoreLink?: Types.Basic.Link;
  readMoreReadMoreText?: React.ReactNode;
}): React.JSX.Element;
