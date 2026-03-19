"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VariantsGapSize.module.css";

export function VariantsGapSize({
  as: _Component = _Builtin.Block,
  optionsCardPaddingVariants = "None",
  webflowComponentSlotsWebflowComponentSlots,
  webflowComponentSlotsSlotCardMeta,
  webflowComponentSlotsSlotHeadline,
  webflowComponentSlotsSlotViewsLikes,
  webflowComponentSlotsSlotLink,
  devLinkComponentSlotsDevLinkComponentSlots = false,
  devLinkComponentSlotsCardMetaSlot,
  devLinkComponentSlotsCardMetaRuntimeProps = {},
  devLinkComponentSlotsSlotHeadline,
  devLinkComponentSlotsSlotHeadlineRuntimeProps = {},
  devLinkComponentSlotsSlotLink,
  devLinkComponentSlotsSlotLinkRuntimeProps = {},
  devLinkComponentSlotsSlotViewsLikes,
  devLinkComponentSlotsSlotViewsLikesRuntimeProps = {},
}) {
  const _styleVariantMap = {
    None: "",
    "0x1 Gap": "w-variant-2ac2cad7-a2fd-7e1e-d135-5758c2225cb7",
    "0x2 Gap": "w-variant-0a1a6c07-5d48-29ff-41d0-9f372de3874b",
    "0x3 Gap": "w-variant-0a1a6c07-5d48-29ff-41d0-9f372de3874c",
    "1x1 Gap": "w-variant-0a1a6c07-5d48-29ff-41d0-9f372de3874d",
    "1x2 Gap": "w-variant-0a1a6c07-5d48-29ff-41d0-9f372de3874e",
    "2x1 Gap": "w-variant-0a1a6c07-5d48-29ff-41d0-9f372de3874f",
    "2x2 Gap": "w-variant-0a1a6c07-5d48-29ff-41d0-9f372de38750",
    "3x2 Gap": "w-variant-0a1a6c07-5d48-29ff-41d0-9f372de38751",
    "3x3 Gap": "w-variant-0a1a6c07-5d48-29ff-41d0-9f372de38752",
  };

  const _activeStyleVariant = _styleVariantMap[optionsCardPaddingVariants];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--global-component_base",
        _activeStyleVariant
      )}
      id={_utils.cx(
        _styles,
        "w-node-e6be10d8-7d6e-e3fa-5d19-16611640d57f-1640d57f"
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
              "rebel-style--component_size",
              "rebel-style--flex-grow",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "rebel-style--component-card_gap-size-variants",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "rebel-style--card_meta-wrapper",
                  _activeStyleVariant
                )}
                tag="div"
              >
                {webflowComponentSlotsSlotCardMeta}
                {devLinkComponentSlotsDevLinkComponentSlots ? (
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "rebel-style--slot_card-meta",
                      "rebel-style--is-devlink-slot",
                      _activeStyleVariant
                    )}
                    tag="div"
                    editable={true}
                    {...devLinkComponentSlotsCardMetaRuntimeProps}
                  >
                    {devLinkComponentSlotsCardMetaSlot ?? "Slot Card Meta"}
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "rebel-style--card_headline-wrapper",
                  _activeStyleVariant
                )}
                tag="div"
              >
                {webflowComponentSlotsSlotHeadline}
                {devLinkComponentSlotsDevLinkComponentSlots ? (
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "rebel-style--slot_headline",
                      "rebel-style--is-devlink-slot",
                      "rebel-style--spacer_4rem",
                      _activeStyleVariant
                    )}
                    tag="div"
                    {...devLinkComponentSlotsSlotHeadlineRuntimeProps}
                  >
                    {devLinkComponentSlotsSlotHeadline ?? "Slot Headline"}
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "rebel-style--card_item-wrapper",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rebel-style--slot-size-width_50pct",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  {webflowComponentSlotsSlotLink}
                  {devLinkComponentSlotsDevLinkComponentSlots ? (
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "rebel-style--slot_link",
                        "rebel-style--is-devlink-slot",
                        _activeStyleVariant
                      )}
                      tag="div"
                      {...devLinkComponentSlotsSlotLinkRuntimeProps}
                    >
                      {devLinkComponentSlotsSlotLink ?? "Slot Link"}
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "rebel-style--slot-size-width_50pct",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  {webflowComponentSlotsSlotViewsLikes}
                  {devLinkComponentSlotsDevLinkComponentSlots ? (
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "rebel-style--slot_views-likes",
                        "rebel-style--is-devlink-slot",
                        _activeStyleVariant
                      )}
                      tag="div"
                      {...devLinkComponentSlotsSlotViewsLikesRuntimeProps}
                    >
                      {devLinkComponentSlotsSlotViewsLikes ??
                        "Slot Views+Likes"}
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
