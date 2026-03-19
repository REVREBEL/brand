"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VariantsLabelFontSize } from "./VariantsLabelFontSize";
import { VariantsTextColor } from "./VariantsTextColor";
import { InnerComponentViewsCounter } from "./InnerComponentViewsCounter";
import { ComponentLikeIcon } from "./ComponentLikeIcon";
import { InnerComponentLikesCounter } from "./InnerComponentLikesCounter";
import * as _utils from "./utils";
import _styles from "./ViewsLikesCounter.module.css";

export function ViewsLikesCounter({
  as: _Component = _Builtin.Block,
  viewsCounterFontColorVariants = "Align Center",
  viewsCounterLayoutVariants = "Align Center",
  viewsCounterViewsCounterLabelText = "Views +",
  viewsCounterViewsCountText = (
    <>
      {"0"}
      <br />
    </>
  ),
  likesCounterLikesCounterLabelVisibility = false,
  likesCounterLikesCountId = "This is the default text value",
  likesCounterLikesCounterLabelText = "Likes",
  likesCounterLikesCounterLabelRuntimeProps = {},
  likesCounterLikesCounterLabelSlot,
  likesCounterLikesCountText = "0",
  likeIconIsActive = false,
  likeIconLikeIconSizeVariant = null,
  likeIconLikeIconColorVariant = null,
  likeIconLikeInnerIconColorVariant = null,
  likeIconLikeIconImage = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb3fb7528c93f9891091e5_7147de7aff4529a7d3a38715f91519b1_Liike.png",
  likeIconLikeIconImageAltText = "__wf_reserved_inherit",
  likeIconLikeInnerIconImage = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb3fb7528c93f9891091e7_610b3cb61cb960b5e740df212d21c742_Like%20Inner.png",
  likeIconLikeInnerIconImageAltText = "__wf_reserved_inherit",
  componentLayoutVariant = "Align Right",
  componentDataStorageKey = "post_123",
  viewsCounterViewsCounterLabelSlot,
  viewsCounterViewsCountRuntimeProps = {},
  viewsCounterViewsCountSlot,
  likesCounterLikesCountRuntimeProps = {},
  likesCounterLikesCountSlot,
  responsiveTextVariants = "Align Center",
}) {
  const _styleVariantMap = {
    "Align Left": "w-variant-ad9852a4-63de-fa79-825f-5a1f588feeda",
    "Align Center": "",
    "Align Right": "w-variant-96659799-e9f7-7eca-d099-9d384fb8228e",
  };

  const _activeStyleVariant = _styleVariantMap[componentLayoutVariant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--global-component_base",
        "rebel-style--component_views-likes-counter",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "rebel-style--global-component_wrapper",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "rebel-style--global-component_container",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "rebel-style--component_views-likes-counter-layout",
              _activeStyleVariant
            )}
            tag="div"
          >
            <VariantsLabelFontSize
              settingsResponsiveTextVariants={responsiveTextVariants}
              slotResponsiveTextSlotResponsiveText={
                <>
                  <VariantsTextColor
                    settingsFontColorVariants={viewsCounterFontColorVariants}
                    slotTextColorSlotFontColor={
                      <InnerComponentViewsCounter
                        viewsCounterViewsCounterLabelText={
                          viewsCounterViewsCounterLabelText
                        }
                        viewsCounterViewsCountText={viewsCounterViewsCountText}
                        viewsLikesLayoutVariants={viewsCounterLayoutVariants}
                        viewsLikesDataStorageKey={componentDataStorageKey}
                        likesIconLikeIconColorVariant={
                          likeIconLikeIconColorVariant
                        }
                        likesIconLikeInnerIconColorVariant={
                          likeIconLikeInnerIconColorVariant
                        }
                        likesIconComponentLikeIconSizeVariant={
                          likeIconLikeIconSizeVariant
                        }
                        viewsCounterViewsCounterLabelSlot={
                          viewsCounterViewsCounterLabelSlot
                        }
                        viewsCounterViewsCountSlot={viewsCounterViewsCountSlot}
                        viewsCounterViewsCountRuntimeProps={
                          viewsCounterViewsCountRuntimeProps
                        }
                      />
                    }
                  />
                  <ComponentLikeIcon
                    innerIconAltText={likeIconLikeInnerIconImageAltText}
                    isActive={likeIconIsActive}
                  />
                  <VariantsTextColor
                    settingsFontColorVariants={viewsCounterFontColorVariants}
                    slotTextColorSlotFontColor={
                      <InnerComponentLikesCounter
                        viewsLikesDataStorageKey={componentDataStorageKey}
                        likesCounterLikesCounterLabelVisibility={
                          likesCounterLikesCounterLabelVisibility
                        }
                        likesCounterLikesCounterLabelText={
                          likesCounterLikesCounterLabelText
                        }
                        likesCounterLikesCountId={likesCounterLikesCountId}
                        likesCounterLikesCountText={likesCounterLikesCountText}
                        likesCounterLikesCountSlot={likesCounterLikesCountSlot}
                        likesCounterLikesCountRuntimeProps={
                          likesCounterLikesCountRuntimeProps
                        }
                        likesCounterLikesCounterLabelRuntimeProps={
                          likesCounterLikesCounterLabelRuntimeProps
                        }
                        likesCounterLikesCounterLabelSlot={
                          likesCounterLikesCounterLabelSlot
                        }
                        viewsLikesLayoutVariants="Horizontal"
                      />
                    }
                  />
                </>
              }
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
