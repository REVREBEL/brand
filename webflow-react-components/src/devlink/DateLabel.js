"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VariantsTextColor } from "./VariantsTextColor";
import { VariantsLabelFontSize } from "./VariantsLabelFontSize";
import { InnerComponentDateLabelText } from "./InnerComponentDateLabelText";
import * as _utils from "./utils";
import _styles from "./DateLabel.module.css";

export function DateLabel({
  as: _Component = _Builtin.Block,
  dateLabelTextSizeVariants = null,
  dateLabelFontColorVariants = null,
  dateLabelText = "Month YYYY",
  dateLabelVisibility = true,
}) {
  return dateLabelVisibility ? (
    <_Component
      className={_utils.cx(_styles, "rebel-style--component_date-label")}
      tag="div"
    >
      <VariantsTextColor
        settingsFontColorVariants={dateLabelFontColorVariants}
        slotTextColorSlotFontColor={
          <VariantsLabelFontSize
            settingsResponsiveTextVariants={dateLabelTextSizeVariants}
            slotResponsiveTextSlotResponsiveText={
              <InnerComponentDateLabelText
                dateLabelText={dateLabelText}
                settingsVisibility={dateLabelVisibility}
              />
            }
          />
        }
      />
    </_Component>
  ) : null;
}
