import * as React from "react";
import * as Types from "./types";

declare function InnerComponentLikesCounter(props: {
  as?: React.ElementType;
  /** Unique ID for this item*/
  viewsLikesDataStorageKey?: React.ReactNode;
  likesCounterLikesCounterVisibility?: Types.Visibility.VisibilityConditions;
  viewsCounterViewsCounterVisibility?: Types.Visibility.VisibilityConditions;
  viewsCounterViewsCountId?: Types.Basic.IdTextInput;
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
  /** Displays the number of views/likes for the corresponding ID/Slug*/
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
}): React.JSX.Element;
