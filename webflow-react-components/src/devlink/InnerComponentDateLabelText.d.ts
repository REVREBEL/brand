import * as React from "react";
import * as Types from "./types";

declare function InnerComponentDateLabelText(props: {
  as?: React.ElementType;
  dateLabelText?: React.ReactNode;
  settingsVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
