import * as React from "react";
import * as Types from "./types";

declare function CategoryLabel(props: {
  as?: React.ElementType;
  categoryLabelVisibility?: Types.Boolean.Boolean;
  categoryLabelColorVariants?:
    | "Clear"
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
    | "Primary Inverse"
    | "Color 1 Inverse"
    | "Color 2 Inverse"
    | "Color 3 Inverse"
    | "Color 4 Inverse"
    | "Color 5 Inverse"
    | "Color 6 Inverse"
    | "Color 7 Inverse"
    | "Color 8 Inverse"
    | "Color 9 Inverse"
    | "Light Inverse"
    | "Dark Inverse";
  categoryLabelTextSizeVariants?:
    | "Medium Label"
    | "Regular Label"
    | "Small Label"
    | "Extra Small Label";
  categoryLabelText?: React.ReactNode;
  categoryLabelLink?: Types.Basic.Link;
  categorySlug?: Types.Builtin.Text;
  /** Used as the background color for the label.*/
  categoryPrimaryColor?: Types.Builtin.Text;
  /** Used as the text color for the label.*/
  categoryInverseColor?: Types.Builtin.Text;
}): React.JSX.Element;
