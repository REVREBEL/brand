"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { listOfElementsToText } from "./values/Basic/listOfElementsToText";
import * as _utils from "./utils";
import _styles from "./InnerComponentLikesCounter.module.css";

export function InnerComponentLikesCounter({
  as: _Component = _Builtin.Block,
  viewsLikesDataStorageKey = "post_123",
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
  viewsCounterViewsCounterLabelText = (
    <>
      {"Views"}
      <br />
    </>
  ),
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
}) {
  const _styleVariantMap = {
    Horizontal: "",
    Stacked: "w-variant-f8e3d4a3-5807-c594-56ee-61200c1c6967",
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
          _activeStyleVariant
        )}
        tag="div"
      >
        {likesCounterIconLikesCounterRedIconOnOff ? (
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "rebel-style--views-likes_label",
              _activeStyleVariant
            )}
            tag="div"
            id={listOfElementsToText(likesCounterLikesCountId)}
            {...likesCounterLikesCountRuntimeProps}
          >
            {likesCounterLikesCountSlot ?? likesCounterLikesCountText}
          </_Builtin.Block>
        ) : null}
        {likesCounterLikesCounterLabelVisibility ? (
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "rebel-style--views-likes_label",
              _activeStyleVariant
            )}
            tag="div"
            {...likesCounterLikesCounterLabelRuntimeProps}
          >
            {likesCounterLikesCounterLabelSlot ??
              likesCounterLikesCounterLabelText}
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
