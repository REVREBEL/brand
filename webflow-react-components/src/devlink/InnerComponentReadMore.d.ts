import * as React from "react";
import * as Types from "./types";

declare function InnerComponentReadMore(props: {
  as?: React.ElementType;
  variant?: "Underline" | "Underline [ON-HOVER]";
  text?: React.ReactNode;
}): React.JSX.Element;
