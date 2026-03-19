"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VariantsGapSize } from "./VariantsGapSize";
import * as _utils from "./utils";
import _styles from "./ArticleCardReact.module.css";

export function ArticleCardReact({
  as: _Component = _Builtin.Block,
  variant = "Regular Layout",
  articleCardArticleCardVisibility = true,
  articleCardArticleCardCardId,
  articleCardArticleCardPadding = "Regular Layout",
  articleCardImageVisibility = true,
  articleCardPreviewImage = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb3fb7528c93f9891091e0_4e10d242d5cc037173d1e612c9761d93_revrebel_nostalgic-stylish-social-mood-camera-35mm-f4-iso-2__83432.avif",
  articleCardImageAltText = "__wf_reserved_inherit",
  devLinkComponentSlotsDevLinkComponentSlots = true,
  devLinkComponentSlotsCardMetaRuntimeProps = {},
  devLinkComponentSlotsCardMetaSlot,
  devLinkComponentSlotsSlotHeadlineRuntimeProps = {},
  webflowComponentSlotsWebflowComponentSlots = false,
  devLinkComponentSlotsSlotHeadline,
  devLinkComponentSlotsSlotLinkRuntimeProps = {},
  devLinkComponentSlotsSlotLink,
  devLinkComponentSlotsSlotViewsLikesRuntimeProps = {},
  devLinkComponentSlotsSlotViewsLikes,
}) {
  const _styleVariantMap = {
    "Regular Layout": "",
    "Inverse Layout": "w-variant-f16f5ba4-53bd-260b-dd42-c416c7af2bba",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return articleCardArticleCardVisibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--global-component_base",
        _activeStyleVariant
      )}
      tag="div"
      id={articleCardArticleCardCardId}
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
              "rebel-style--component-card_body-wrapper",
              "rebel-style--card-radius_sm",
              "rebel-style--is-regular",
              _activeStyleVariant
            )}
            tag="div"
          >
            {articleCardImageVisibility ? (
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "rebel-style--component-card_image-cover",
                  "rebel-style--component-card_border-radius",
                  _activeStyleVariant
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_14ec59fc-5902-692c-84d9-cb0e7687ae4e-7687ae4a"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "rebel-style--component-card_image-animated",
                    "rebel-style--radius-bottom_none",
                    _activeStyleVariant
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  src={articleCardPreviewImage}
                />
              </_Builtin.Block>
            ) : null}
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "rebel-style--variants_card-body",
                "rebel-style--text-color_primary",
                _activeStyleVariant
              )}
              id={_utils.cx(
                _styles,
                "w-node-_14ec59fc-5902-692c-84d9-cb0e7687ae50-7687ae4a"
              )}
              tag="div"
            >
              <VariantsGapSize
                optionsCardPaddingVariants={articleCardArticleCardPadding}
                devLinkComponentSlotsCardMetaSlot={
                  devLinkComponentSlotsCardMetaSlot
                }
                devLinkComponentSlotsCardMetaRuntimeProps={
                  devLinkComponentSlotsCardMetaRuntimeProps
                }
                devLinkComponentSlotsSlotViewsLikesRuntimeProps={
                  devLinkComponentSlotsSlotViewsLikesRuntimeProps
                }
                devLinkComponentSlotsSlotHeadlineRuntimeProps={
                  devLinkComponentSlotsSlotHeadlineRuntimeProps
                }
                devLinkComponentSlotsSlotHeadline={
                  devLinkComponentSlotsSlotHeadline
                }
                devLinkComponentSlotsSlotLinkRuntimeProps={
                  devLinkComponentSlotsSlotLinkRuntimeProps
                }
                devLinkComponentSlotsSlotLink={devLinkComponentSlotsSlotLink}
                devLinkComponentSlotsSlotViewsLikes={
                  devLinkComponentSlotsSlotViewsLikes
                }
                devLinkComponentSlotsDevLinkComponentSlots={
                  devLinkComponentSlotsDevLinkComponentSlots
                }
                webflowComponentSlotsWebflowComponentSlots={
                  webflowComponentSlotsWebflowComponentSlots
                }
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
