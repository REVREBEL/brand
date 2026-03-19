"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VariantsCardHeadline.module.css";

export function VariantsCardHeadline({
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
}) {
  const _styleVariantMap = {
    "Tiny Headline": "w-variant-2afb1133-8136-eb70-d1f9-5332ba439d00",
    "Extra Small Headline": "w-variant-62414350-2ba0-c64c-8ae7-fdc9b1b9ffda",
    "Small Headline": "",
    "Regular Headline": "w-variant-9d0b74e6-11d0-947a-cd79-77df9228f47c",
    "Medium Headline": "w-variant-efd8edec-4c71-f9ad-e943-f52b4a260949",
    "Large Headline": "w-variant-c7e935a5-383f-edff-2aa7-c8995cafd8ca",
  };

  const _activeStyleVariant = _styleVariantMap[headlineHeadlineFontSize];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--global-component_base",
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
              "rebel-style--variants_card-headline",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "rebel-style--headline-variant",
                "rebel-style--padding-bottom_xs",
                _activeStyleVariant
              )}
              tag={headlineHeadlineTag}
            >
              {headlineHeadlineText}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
