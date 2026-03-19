import * as React from "react";
import * as Types from "./types";

declare function Headline(props: {
  as?: React.ElementType;
  headlineHeadlineFontSize?:
    | "Tiny Headline"
    | "Extra Small Headline"
    | "Small Headline"
    | "Regular Headline"
    | "Medium Headline"
    | "Large Headline";
  headlineHeadlineTag?: Types.Basic.HeadingTag;
  headlineHeadlineText?: React.ReactNode;
  headlineTextRuntimeProps?: Types.Devlink.RuntimeProps;
  headlineTextSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
