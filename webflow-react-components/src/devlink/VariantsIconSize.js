"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VariantsIconSize.module.css";

export function VariantsIconSize({
  as: _Component = _Builtin.Block,
  iconSizeVariant = "Regular",
  slotIconSize,
}) {
  const _styleVariantMap = {
    "Extra Small": "w-variant-1dfb94d1-b2b3-6af2-8905-577ae96067c7",
    Small: "w-variant-1833206a-3486-0b59-6020-a303fdefa5c9",
    Regular: "",
    Medium: "w-variant-a441894a-e12b-a947-a974-075d4ae3a99c",
    Large: "w-variant-b8494849-ba4e-d8c3-81fc-949431f3e04a",
    "Extra Large": "w-variant-ab5a8a23-9a75-20da-96f1-fa2ae0a44221",
  };

  const _activeStyleVariant = _styleVariantMap[iconSizeVariant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--variants_icon-size",
        _activeStyleVariant
      )}
      tag="div"
    >
      {slotIconSize}
    </_Component>
  );
}
