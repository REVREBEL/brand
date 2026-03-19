"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VariantsIconSize } from "./VariantsIconSize";
import { IconColorFilter } from "./IconColorFilter";
import { IconVariant } from "./IconVariant";
import * as _utils from "./utils";
import _styles from "./Icon.module.css";

export function Icon({
  as: _Component = _Builtin.Block,
  iconVisibility = true,
  iconColor = null,
  iconSizeVariant = null,
  icon = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb63f8be4e0df1c0e4e52b_b9e52061468938da827ccf50a1c66d41_rocket.svg",
  iconAltText = "__wf_reserved_inherit",
}) {
  return iconVisibility ? (
    <_Component
      className={_utils.cx(_styles, "rebel-style--inner-component_icon")}
      tag="div"
    >
      <VariantsIconSize
        iconSizeVariant={iconSizeVariant}
        slotIconSize={
          <IconColorFilter
            iconColor={iconColor}
            icon={icon}
            iconAltText={iconAltText}
            iconVisibility={iconVisibility}
          />
        }
      />
    </_Component>
  ) : null;
}
