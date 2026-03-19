"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VariantsLabelFontSize.module.css";

export function VariantsLabelFontSize({
  as: _Component = _Builtin.Block,
  slotResponsiveTextSlotResponsiveText,
  settingsResponsiveTextVariants = "Regular Label",
}) {
  const _styleVariantMap = {
    "Medium Label": "w-variant-45e0c150-ea2b-2af4-2474-4676295f03c1",
    "Regular Label": "",
    "Small Label": "w-variant-45e0c150-ea2b-2af4-2474-4676295f03c0",
    "Extra Small Label": "w-variant-45e0c150-ea2b-2af4-2474-4676295f03bf",
  };

  const _activeStyleVariant = _styleVariantMap[settingsResponsiveTextVariants];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--variants_label-text-size",
        _activeStyleVariant
      )}
      tag="div"
    >
      {slotResponsiveTextSlotResponsiveText}
    </_Component>
  );
}
