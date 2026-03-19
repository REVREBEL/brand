"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Headline.module.css";

export function Headline({
  as: _Component = _Builtin.Block,
  headlineHeadlineFontSize = "Small Headline",
  headlineHeadlineTag = "h2",
  headlineHeadlineText = (
    <>
      {"Headline"}
      <br />
      {"Size Variant"}
    </>
  ),
  headlineTextRuntimeProps = {},
  headlineTextSlot,
}) {
  const _styleVariantMap = {
    "Tiny Headline": "w-variant-5ffb8911-5462-b435-d863-39baa5c81ecd",
    "Extra Small Headline": "w-variant-5ffb8911-5462-b435-d863-39baa5c81ece",
    "Small Headline": "",
    "Regular Headline": "w-variant-5ffb8911-5462-b435-d863-39baa5c81ecf",
    "Medium Headline": "w-variant-5ffb8911-5462-b435-d863-39baa5c81ed0",
    "Large Headline": "w-variant-5ffb8911-5462-b435-d863-39baa5c81ed1",
  };

  const _activeStyleVariant = _styleVariantMap[headlineHeadlineFontSize];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "global-component_base",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "global-component_wrapper",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "global-component_container",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "variants_card-headline",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "headline-variant",
                "padding-bottom_xs-2",
                _activeStyleVariant
              )}
              tag="h2"
              {...headlineTextRuntimeProps}
            >
              {headlineTextSlot ?? (
                <>
                  {"Headline"}
                  <br />
                  {"Size Variant"}
                </>
              )}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
