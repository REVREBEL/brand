import * as React from "react";
import * as Types from "./types";

declare function ArticleCardReact(props: {
  as?: React.ElementType;
  variant?: "Regular Layout" | "Inverse Layout";
  articleCardArticleCardVisibility?: Types.Visibility.VisibilityConditions;
  articleCardArticleCardCardId?: Types.Basic.IdTextInput;
  articleCardArticleCardPadding?:
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
  articleCardImageVisibility?: Types.Visibility.VisibilityConditions;
  articleCardPreviewImage?: Types.Asset.Image;
  articleCardImageAltText?: Types.Basic.AltText;
  /** Turn Devlink Component Slots On/Off*/
  devLinkComponentSlotsDevLinkComponentSlots?: Types.Visibility.VisibilityConditions;
  devLinkComponentSlotsCardMetaRuntimeProps?: Types.Devlink.RuntimeProps;
  devLinkComponentSlotsCardMetaSlot?: Types.Devlink.Slot;
  devLinkComponentSlotsSlotHeadlineRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Turn Webflow Component Slots On/Off*/
  webflowComponentSlotsWebflowComponentSlots?: Types.Visibility.VisibilityConditions;
  devLinkComponentSlotsSlotHeadline?: Types.Devlink.Slot;
  devLinkComponentSlotsSlotLinkRuntimeProps?: Types.Devlink.RuntimeProps;
  devLinkComponentSlotsSlotLink?: Types.Devlink.Slot;
  devLinkComponentSlotsSlotViewsLikesRuntimeProps?: Types.Devlink.RuntimeProps;
  devLinkComponentSlotsSlotViewsLikes?: Types.Devlink.Slot;
}): React.JSX.Element;
