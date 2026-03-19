import * as React from "react";
import * as Types from "./types";

declare function VariantsCardHeadline(props: {
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
}): React.JSX.Element;
