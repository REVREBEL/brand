import * as React from "react";
import * as Types from "./types";

declare function VariantsIconSize(props: {
  as?: React.ElementType;
  iconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  slotIconSize?: React.ReactNode;
}): React.JSX.Element;
