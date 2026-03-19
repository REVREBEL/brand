"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InnerComponentDateLabelText.module.css";

export function InnerComponentDateLabelText({
  as: _Component = _Builtin.Block,
  dateLabelText = "Month YYYY",
  settingsVisibility = true,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--component_base",
        "rebel-style--component_date-label"
      )}
      tag="div"
      data-copilot="true"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "rebel-style--component_date-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "rebel-style--component_date-label-text"
          )}
          tag="div"
        >
          {dateLabelText}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
