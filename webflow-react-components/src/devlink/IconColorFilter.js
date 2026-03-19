"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IconColorFilter.module.css";

export function IconColorFilter({
  as: _Component = _Builtin.Block,
  iconColor = "Primary",
  icon = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb63f8be4e0df1c0e4e52d_6238cdd153083476ac8a079d06a48cf9_computer-graph.svg",
  iconVisibility = true,
  iconAltText = "__wf_reserved_inherit",
}) {
  const _styleVariantMap = {
    Primary: "",
    "Color 1": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3027",
    "Color 2": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3028",
    "Color 3": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3029",
    "Color 4": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302a",
    "Color 5": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302b",
    "Color 6": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302c",
    "Color 7": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302d",
    "Color 8": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302e",
    "Color 9": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302f",
    Light: "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3030",
    Dark: "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3031",
    "Grey 1": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3032",
    "Grey 2": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3033",
    "Grey 3": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3034",
    None: "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3035",
  };

  const _activeStyleVariant = _styleVariantMap[iconColor];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--variants_icon-filter-color",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "rebel-style--component_icon-size-wapper",
          _activeStyleVariant
        )}
        tag="div"
      >
        {iconVisibility ? (
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "rebel-style--icon-variant",
              _activeStyleVariant
            )}
            loading="lazy"
            width="auto"
            height="auto"
            src={icon}
          />
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
