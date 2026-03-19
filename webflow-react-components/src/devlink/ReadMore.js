"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VariantsTextColor } from "./VariantsTextColor";
import { VariantsLabelFontSize } from "./VariantsLabelFontSize";
import { InnerComponentReadMore } from "./InnerComponentReadMore";
import * as _utils from "./utils";
import _styles from "./ReadMore.module.css";

export function ReadMore({
  as: _Component = _Builtin.Block,
  readMoreReadMoreId,
  readMoreReadMoreVisibility = true,
  readMoreFontColorVariants = null,
  readMoreUnderlineVariants = null,
  readMoreResponsiveTextVariants = null,

  readMoreReadMoreLink = {
    href: "#",
  },

  readMoreReadMoreText = "Read More",
}) {
  return readMoreReadMoreVisibility ? (
    <_Component
      className={_utils.cx(_styles, "rebel-style--component_read-more")}
      tag="div"
      id={readMoreReadMoreId}
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "rebel-style--component_link-block")}
        button={false}
        block="inline"
        options={readMoreReadMoreLink}
      >
        <VariantsTextColor
          settingsFontColorVariants={readMoreFontColorVariants}
          slotTextColorSlotFontColor={
            <VariantsLabelFontSize
              settingsResponsiveTextVariants={readMoreResponsiveTextVariants}
              slotResponsiveTextSlotResponsiveText={
                <InnerComponentReadMore
                  text={readMoreReadMoreText}
                  variant={readMoreUnderlineVariants}
                />
              }
            />
          }
        />
      </_Builtin.Link>
    </_Component>
  ) : null;
}
