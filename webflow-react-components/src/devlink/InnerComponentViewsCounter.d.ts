import * as React from "react";
import * as Types from "./types";

declare function InnerComponentViewsCounter(props: {
  as?: React.ElementType;
  likesCounterLikesCounterVisibility?: Types.Visibility.VisibilityConditions;
  viewsCounterViewsCounterVisibility?: Types.Visibility.VisibilityConditions;
  viewsCounterViewsCountId?: Types.Basic.IdTextInput;
  /** Displays the number of views/likes for the corresponding ID/Slug*/
  viewsCounterViewsCountText?: React.ReactNode;
  viewsCounterViewsCountSlot?: Types.Devlink.Slot;
  viewsCounterViewsCountRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Count Total Views*/
  viewsCounterViewsCounterLabelText?: React.ReactNode;
  viewsCounterViewsCounterLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  viewsCounterViewsCounterLabelSlot?: Types.Devlink.Slot;
  likesCounterLikesCounterLabelVisibility?: Types.Visibility.VisibilityConditions;
  /** Display text regardless of the component state.*/
  likesCounterLikesCounterLabelText?: React.ReactNode;
  likesCounterLikesCounterLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  likesCounterLikesCounterLabelSlot?: Types.Devlink.Slot;
  likesCounterLikesCountId?: React.ReactNode;
  likesCounterLikesCountText?: React.ReactNode;
  likesCounterLikesCountRuntimeProps?: Types.Devlink.RuntimeProps;
  likesCounterLikesCountSlot?: Types.Devlink.Slot;
  likesCounterIconLikesCounterIconId?: Types.Basic.IdTextInput;
  likesCounterIconLikesCounterBlueIconOnOff?: Types.Visibility.VisibilityConditions;
  likesCounterIconLikesCounterRedIconOnOff?: Types.Visibility.VisibilityConditions;
  likesCounterIconLikesCounterIconRuntimeProps?: Types.Devlink.RuntimeProps;
  likesButtonLikesButtonVisibility?: Types.Visibility.VisibilityConditions;
  likesButtonLikesButtonId?: Types.Basic.IdTextInput;
  /** For use when the button has been selected or liked.*/
  likesButtonIsActive?: Types.Visibility.VisibilityConditions;
  /** Text when liked*/
  likesButtonDataUnlikedText?: React.ReactNode;
  /** Text when not liked*/
  likesButtonDataLikedText?: React.ReactNode;
  likesButtonLikesButtonRuntimeProps?: Types.Devlink.RuntimeProps;
  likesButtonLikesButtonLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  likesButtonLikesButtonLabelText?: React.ReactNode;
  viewsLikesLayoutVariants?: "Horizontal" | "Stacked";
  /** Unique ID for this item*/
  viewsLikesDataStorageKey?: React.ReactNode;
  likesIconLikeIconColorVariant?:
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
  likesIconLikeIconImage?: Types.Asset.Image;
  likesIconLikeIconImageAltText?: Types.Basic.AltText;
  likesIconLikeInnerIconColorVariant?:
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
  likesIconLikeInnerIconImage?: Types.Asset.Image;
  likesIconLikeInnerIconImageAltText?: Types.Basic.AltText;
  /** For use when the button has been selected or liked.*/
  componentLikeIconLikeInnerIconIsActive?: Types.Visibility.VisibilityConditions;
  likesIconComponentLikeIconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
}): React.JSX.Element;
