"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InnerCategoryLabel.module.css";

export function InnerCategoryLabel({
  as: _Component = _Builtin.Block,

  categoryNameLink = {
    href: "#",
  },

  categoryNameText = "Category Name",
  categorySlug,
  categoryInverseColor,
  categoryPrimaryColor,
  categoryNameRuntimeProps = {},
  categoryNameSlot,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--component_base",
        "rebel-style--component_category-label"
      )}
      tag="div"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "rebel-style--component_link-block")}
        button={false}
        block="inline"
        options={categoryNameLink}
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "rebel-style--card-meta_category")}
          tag="wfCategoryTag"
          slot=""
          class="output"
          category-slug={categorySlug}
          category-primary-color={categoryPrimaryColor}
          category-inverse-color={categoryInverseColor}
          category-text-color={categoryInverseColor}
          category-background-color={categoryPrimaryColor}
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "rebel-style--card-meta_category-text"
            )}
            tag="div"
            {...categoryNameRuntimeProps}
          >
            {categoryNameSlot ?? categoryNameText}
          </_Builtin.Block>
        </_Builtin.DOM>
      </_Builtin.Link>
    </_Component>
  );
}
