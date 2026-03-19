"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InnerComponentReadMore.module.css";

export function InnerComponentReadMore({
  as: _Component = _Builtin.Block,
  variant = "Underline",
  text = "Read post",
}) {
  const _styleVariantMap = {
    Underline: "",
    "Underline [ON-HOVER]": "w-variant-202646fc-6ca8-0e88-050d-c144913ba3f6",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--component_read-more_underline",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "rebel-style--read-more_link",
          "rebel-style--is-underline",
          _activeStyleVariant
        )}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
