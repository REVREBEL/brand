"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VariantsBgBorderFontColor.module.css";

export function VariantsBgBorderFontColor({
  as: _Component = _Builtin.Block,
  slotBgBorderFontColor,
  optionsColor = "Color 5",
}) {
  const _styleVariantMap = {
    Clear: "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263c4",
    Primary: "",
    "Color 1": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263c6",
    "Color 2": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263c8",
    "Color 3": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263ca",
    "Color 4": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263cc",
    "Color 5": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263ce",
    "Color 6": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d0",
    "Color 7": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d2",
    "Color 8": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d4",
    "Color 9": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d6",
    Light: "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d8",
    Dark: "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263da",
    "Primary Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263c5",
    "Color 1 Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263c7",
    "Color 2 Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263c9",
    "Color 3 Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263cb",
    "Color 4 Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263cd",
    "Color 5 Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263cf",
    "Color 6 Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d1",
    "Color 7 Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d3",
    "Color 8 Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d5",
    "Color 9 Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d7",
    "Light Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263d9",
    "Dark Inverse": "w-variant-4e110404-552b-5b98-bc46-5f1c2aa263db",
  };

  const _activeStyleVariant = _styleVariantMap[optionsColor];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--variants_bg-border-font-color",
        _activeStyleVariant
      )}
      tag="div"
    >
      {slotBgBorderFontColor}
    </_Component>
  );
}
