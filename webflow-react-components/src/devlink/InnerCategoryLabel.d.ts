import * as React from "react";
import * as Types from "./types";

declare function InnerCategoryLabel(props: {
  as?: React.ElementType;
  categoryNameLink?: Types.Basic.Link;
  categoryNameText?: React.ReactNode;
  categorySlug?: Types.Builtin.Text;
  /** Used as the text color for the label.*/
  categoryInverseColor?: Types.Builtin.Text;
  /** Used as the background color for the label.*/
  categoryPrimaryColor?: Types.Builtin.Text;
  categoryNameRuntimeProps?: Types.Devlink.RuntimeProps;
  categoryNameSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
