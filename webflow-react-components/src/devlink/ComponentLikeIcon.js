"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Icon } from "./Icon";
import * as _utils from "./utils";
import _styles from "./ComponentLikeIcon.module.css";

export function ComponentLikeIcon({
  as: _Component = _Builtin.Block,
  isActive = true,
  mainIconColorVariants = null,
  innerIconColorVariants = null,
  mainIconImage = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb87052600ec4e43a52173_b29fbfdf61255e42d3985da94a4b8d54_heart.svg",
  mainIconAltText = "__wf_reserved_inherit",
  innerIconImage = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb3fb7528c93f9891091e7_610b3cb61cb960b5e740df212d21c742_Like%20Inner.png",
  innerIconAltText = "__wf_reserved_inherit",
  iconSizeVariant = null,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "rebel-style--component_like-icon")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "rebel-style--componet_like-icon-z-index"
        )}
        tag="div"
      >
        <Icon
          icon={mainIconImage}
          iconColor={mainIconColorVariants}
          iconAltText={mainIconAltText}
          iconSizeVariant={iconSizeVariant}
          iconVisibility={true}
        />
      </_Builtin.Block>
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "rebel-style--componet_like-icon-align"
          )}
          tag="div"
        >
          <Icon
            icon={innerIconImage}
            iconColor={innerIconColorVariants}
            iconAltText={innerIconAltText}
            iconVisibility={isActive}
            iconSizeVariant={iconSizeVariant}
          />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
