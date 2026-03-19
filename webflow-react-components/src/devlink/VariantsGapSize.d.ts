import * as React from "react";
import * as Types from "./types";

declare function VariantsGapSize(props: {
  as?: React.ElementType;
  optionsCardPaddingVariants?:
    | "None"
    | "0x1 Gap"
    | "0x2 Gap"
    | "0x3 Gap"
    | "1x1 Gap"
    | "1x2 Gap"
    | "2x1 Gap"
    | "2x2 Gap"
    | "3x2 Gap"
    | "3x3 Gap";
  /** Turn Webflow Component Slots On/Off*/
  webflowComponentSlotsWebflowComponentSlots?: Types.Visibility.VisibilityConditions;
  webflowComponentSlotsSlotCardMeta?: React.ReactNode;
  webflowComponentSlotsSlotHeadline?: React.ReactNode;
  webflowComponentSlotsSlotViewsLikes?: React.ReactNode;
  webflowComponentSlotsSlotLink?: React.ReactNode;
  /** Turn DevLink Component Slots On/Off*/
  devLinkComponentSlotsDevLinkComponentSlots?: Types.Visibility.VisibilityConditions;
  devLinkComponentSlotsCardMetaSlot?: Types.Devlink.Slot;
  devLinkComponentSlotsCardMetaRuntimeProps?: Types.Devlink.RuntimeProps;
  devLinkComponentSlotsSlotHeadline?: Types.Devlink.Slot;
  devLinkComponentSlotsSlotHeadlineRuntimeProps?: Types.Devlink.RuntimeProps;
  devLinkComponentSlotsSlotLink?: Types.Devlink.Slot;
  devLinkComponentSlotsSlotLinkRuntimeProps?: Types.Devlink.RuntimeProps;
  devLinkComponentSlotsSlotViewsLikes?: Types.Devlink.Slot;
  devLinkComponentSlotsSlotViewsLikesRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
