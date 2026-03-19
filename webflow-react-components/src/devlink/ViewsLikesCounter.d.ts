import * as React from "react";
import * as Types from "./types";

declare function ViewsLikesCounter(props: {
  as?: React.ElementType;
  viewsCounterFontColorVariants?:
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
  viewsCounterLayoutVariants?: "Horizontal" | "Stacked";
  /** Count Total Views*/
  viewsCounterViewsCounterLabelText?: React.ReactNode;
  /** Displays the number of views/likes for the corresponding ID/Slug*/
  viewsCounterViewsCountText?: React.ReactNode;
  likesCounterLikesCounterLabelVisibility?: Types.Visibility.VisibilityConditions;
  likesCounterLikesCountId?: React.ReactNode;
  /** Display text regardless of the component state.*/
  likesCounterLikesCounterLabelText?: React.ReactNode;
  likesCounterLikesCounterLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  likesCounterLikesCounterLabelSlot?: Types.Devlink.Slot;
  /** Displays the number of views/likes for the corresponding ID/Slug*/
  likesCounterLikesCountText?: React.ReactNode;
  /** For use when the button has been selected or liked.*/
  likeIconIsActive?: Types.Visibility.VisibilityConditions;
  likeIconLikeIconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  likeIconLikeIconColorVariant?:
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
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  likeIconLikeInnerIconColorVariant?:
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
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  likeIconLikeIconImage?: Types.Asset.Image;
  likeIconLikeIconImageAltText?: Types.Basic.AltText;
  likeIconLikeInnerIconImage?: Types.Asset.Image;
  likeIconLikeInnerIconImageAltText?: Types.Basic.AltText;
  componentLayoutVariant?: "Align Left" | "Align Center" | "Align Right";
  /** Unique ID for this item*/
  componentDataStorageKey?: React.ReactNode;
  viewsCounterViewsCounterLabelSlot?: Types.Devlink.Slot;
  viewsCounterViewsCountRuntimeProps?: Types.Devlink.RuntimeProps;
  viewsCounterViewsCountSlot?: Types.Devlink.Slot;
  likesCounterLikesCountRuntimeProps?: Types.Devlink.RuntimeProps;
  likesCounterLikesCountSlot?: Types.Devlink.Slot;
  responsiveTextVariants?:
    | "Medium Label"
    | "Regular Label"
    | "Small Label"
    | "Extra Small Label";
}): React.JSX.Element;
