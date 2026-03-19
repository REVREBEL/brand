"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InnerComponentIcon.module.css";

export function InnerComponentIcon({
  as: _Component = _Builtin.HFlex,
  text = "is-first-name",
  imageImage = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb3fb7528c93f9891091e5_7147de7aff4529a7d3a38715f91519b1_Liike.png",
  imageImageAltText = "__wf_reserved_inherit",
  isActive = true,
}) {
  return isActive ? (
    <_Component
      className={_utils.cx(_styles, "rebel-style--icon-variant_wrapper")}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "rebel-style--icon_variant")}
        id={_utils.cx(
          _styles,
          "w-node-f7df0d35-963c-818b-4812-51b9526176b8-526176b7"
        )}
        width="auto"
        height="auto"
        loading="lazy"
        src={imageImage}
      />
    </_Component>
  ) : null;
}
