"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VariantsLabelFontSize } from "./VariantsLabelFontSize";
import { VariantsBgBorderFontColor } from "./VariantsBgBorderFontColor";
import { InnerCategoryLabel } from "./InnerCategoryLabel";
import * as _utils from "./utils";
import _styles from "./CategoryLabel.module.css";

export function CategoryLabel({
  as: _Component = _Builtin.Block,
  categoryLabelVisibility = true,
  categoryLabelColorVariants = null,
  categoryLabelTextSizeVariants = null,
  categoryLabelText = "Category Name",

  categoryLabelLink = {
    href: "#",
  },

  categorySlug,
  categoryPrimaryColor,
  categoryInverseColor,
}) {
  return categoryLabelVisibility ? (
    <_Component
      className={_utils.cx(_styles, "rebel-style--component_category-label")}
      tag="div"
    >
      <VariantsLabelFontSize
        settingsResponsiveTextVariants={categoryLabelTextSizeVariants}
        slotResponsiveTextSlotResponsiveText={
          <VariantsBgBorderFontColor
            optionsColor={categoryLabelColorVariants}
            slotBgBorderFontColor={
              <InnerCategoryLabel
                categorySlug={categorySlug}
                categoryPrimaryColor={categoryPrimaryColor}
                categoryInverseColor={categoryInverseColor}
                categoryNameText={categoryLabelText}
                categoryNameLink={categoryLabelLink}
                categoryNameRuntimeProps={{}}
                categoryNameSlot=""
              />
            }
          />
        }
      />
    </_Component>
  ) : null;
}
