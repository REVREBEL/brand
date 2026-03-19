"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { listOfElementsToText } from "./values/Basic/listOfElementsToText";
import * as _utils from "./utils";
import _styles from "./InnerComponentViewsCounter.module.css";

export function InnerComponentViewsCounter({
  as: _Component = _Builtin.Block,
  likesCounterLikesCounterVisibility = true,
  viewsCounterViewsCounterVisibility = true,
  viewsCounterViewsCountId = "number-views-count",
  viewsCounterViewsCountText = (
    <>
      {"0"}
      <br />
    </>
  ),
  viewsCounterViewsCountSlot,
  viewsCounterViewsCountRuntimeProps = {},
  viewsCounterViewsCounterLabelText = "Views +",
  viewsCounterViewsCounterLabelRuntimeProps = {},
  viewsCounterViewsCounterLabelSlot,
  likesCounterLikesCounterLabelVisibility = true,
  likesCounterLikesCounterLabelText = "Likes",
  likesCounterLikesCounterLabelRuntimeProps = {},
  likesCounterLikesCounterLabelSlot,
  likesCounterLikesCountId = "This is the default text value",
  likesCounterLikesCountText = "0",
  likesCounterLikesCountRuntimeProps = {},
  likesCounterLikesCountSlot,
  likesCounterIconLikesCounterIconId = "likes-icon",
  likesCounterIconLikesCounterBlueIconOnOff = false,
  likesCounterIconLikesCounterRedIconOnOff = true,
  likesCounterIconLikesCounterIconRuntimeProps = {},
  likesButtonLikesButtonVisibility = true,
  likesButtonLikesButtonId,
  likesButtonIsActive = false,
  likesButtonDataUnlikedText = "Like?",
  likesButtonDataLikedText = "Liked",
  likesButtonLikesButtonRuntimeProps = {},
  likesButtonLikesButtonLabelRuntimeProps = {},
  likesButtonLikesButtonLabelText = "Like",
  viewsLikesLayoutVariants = "Horizontal",
  viewsLikesDataStorageKey = "post_123",
  likesIconLikeIconColorVariant = "Horizontal",
  likesIconLikeIconImage = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb3fb7528c93f9891091e5_7147de7aff4529a7d3a38715f91519b1_Liike.png",
  likesIconLikeIconImageAltText = "__wf_reserved_inherit",
  likesIconLikeInnerIconColorVariant = null,
  likesIconLikeInnerIconImage = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb3fb7528c93f9891091e7_610b3cb61cb960b5e740df212d21c742_Like%20Inner.png",
  likesIconLikeInnerIconImageAltText = "__wf_reserved_inherit",
  componentLikeIconLikeInnerIconIsActive = true,
  likesIconComponentLikeIconSizeVariant = "Horizontal",
}) {
  const _styleVariantMap = {
    Horizontal: "",
    Stacked: "w-variant-0f21e3b7-af5e-cd74-3b31-8a6535db1d6c",
  };

  const _activeStyleVariant = _styleVariantMap[viewsLikesLayoutVariants];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--views-likes-layout",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "rebel-style--views-likes_count-wrapper",
          "rebel-style--is-views",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "rebel-style--views-likes_label",
            _activeStyleVariant
          )}
          tag="div"
        >
          {viewsCounterViewsCounterLabelSlot ??
            viewsCounterViewsCounterLabelText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "rebel-style--views-likes_label",
            _activeStyleVariant
          )}
          tag="div"
          id="This is the default text value"
          {...viewsCounterViewsCountRuntimeProps}
        >
          {viewsCounterViewsCountSlot ?? viewsCounterViewsCountText}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
