import * as React from "react";
import * as Types from "./types";

declare function CardMeta(props: {
  as?: React.ElementType;
  metaLayoutVariant?:
    | "Space Between"
    | "Align Right"
    | "Align Left"
    | "Align Center"
    | "Stacked";
  categoryLabelTextSizeVariants?:
    | "Medium Label"
    | "Regular Label"
    | "Small Label"
    | "Extra Small Label";
  category1LabelCategoryLabelVisibility?: Types.Visibility.VisibilityConditions;
  category1LabelCategoryLabelId?: Types.Basic.IdTextInput;
  category1LabelCategoryLabelColorVariants?:
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
  category1LabelCategoryLabelLink?: Types.Visibility.VisibilityConditions;
  category1LabelCategoryLabelText?: Types.Basic.Link;
  category1LabelCategorySlug?: Types.Basic.IdTextInput;
  /** Used as the background color for the label.*/
  category1LabelCategory1LabelCategoryPrimaryColor2?: Types.Builtin.Text;
  category1LabelCategoryInverseColor?:
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
  category1LabelCategoryLabelTextSizeVariants2?: React.ReactNode;
  category1LabelCategoryPrimaryColor?: Types.Basic.Link;
  category1LabelCategory1LabelCategorySlug?: Types.Builtin.Text;
  category2LabelCategoryLabelText?: React.ReactNode;
  /** Used as the text color for the label.*/
  category1LabelCategory1LabelCategoryInverseColor?: Types.Builtin.Text;
  /** Used as the background color for the label.*/
  category2LabelCategoryPrimaryColor?: Types.Builtin.Text;
  /** Used as the text color for the label.*/
  category2LabelCategoryInverseColor?: Types.Builtin.Text;
  category2LabelCategorySlug?: Types.Builtin.Text;
  dateLabelDateLabelVisibility?: Types.Boolean.Boolean;
  dateLabelDateLabelFontColorVariants?:
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
  dateLabelDateLabelText?: React.ReactNode;
}): React.JSX.Element;
