"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CategoryLabel } from "./CategoryLabel";
import { DateLabel } from "./DateLabel";
import * as _utils from "./utils";
import _styles from "./CardMetaLayoutInner.module.css";

export function CardMetaLayoutInner({
  as: _Component = _Builtin.Block,
  metaLayoutVariant = "Space Between",
  category1LabelCategoryLabelVisibility = true,
  category1LabelCategoryLabelId,
  category1LabelCategoryLabelColorVariants = "Space Between",
  category1LabelCategoryLabelTextSizeVariants = "Space Between",
  category1LabelCategoryLabelText = "Category Name",

  category1LabelCategoryLabelLink = {
    href: "#",
  },

  category1LabelCategoryPrimaryColor,
  category1LabelCategorySlug,
  category1LabelCategoryInverseColor,
  category2LabelCategoryLabelVisibility = true,
  category2LabelCategoryLabelId,
  category2LabelCategoryLabelColorVariants = "Space Between",
  category2LabelCategoryLabelTextSizeVariants = "Space Between",
  category2LabelCategoryLabelText = "Category Name",

  category2LabelCategoryLabelLink = {
    href: "#",
  },

  category2LabelCategoryInverseColor,
  category2LabelCategorySlug,
  category2LabelCategoryPrimaryColor,
  dateLabelDateLabelVisibility = true,
  dateLabelDateLabelFontColorVariants = null,
  dateLabelDateLabelTextSizeVariants = "Space Between",
  dateLabelDateLabelText = "Month YYYY",
}) {
  const _styleVariantMap = {
    "Space Between": "",
    "Align Right": "w-variant-b455c5b9-77ce-5ee2-ecca-1113bf01e1c3",
    "Align Left": "w-variant-c7717bfc-a58f-3fd4-0176-2f10d3258d31",
    "Align Center": "w-variant-f4a18195-1bfa-da10-fe3f-bcd0322b4d34",
    Stacked: "w-variant-e08f92be-b73f-6e60-b47f-1f52b578d09e",
  };

  const _activeStyleVariant = _styleVariantMap[metaLayoutVariant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "rebel-style--card-meta_inner-wrapper",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "rebel-style--component_category-wrapper",
          _activeStyleVariant
        )}
        tag="div"
      >
        <CategoryLabel
          categoryLabelLink={category1LabelCategoryLabelLink}
          categoryLabelText={category1LabelCategoryLabelText}
          categorySlug={category1LabelCategorySlug}
          categoryPrimaryColor={category1LabelCategoryPrimaryColor}
          categoryInverseColor={category1LabelCategoryInverseColor}
          categoryLabelTextSizeVariants={
            category1LabelCategoryLabelTextSizeVariants
          }
          categoryLabelColorVariants={category1LabelCategoryLabelColorVariants}
          categoryLabelVisibility={category1LabelCategoryLabelVisibility}
        />
        <CategoryLabel
          categoryInverseColor={category2LabelCategoryInverseColor}
          categoryPrimaryColor={category2LabelCategoryPrimaryColor}
          categorySlug={category2LabelCategorySlug}
          categoryLabelText={category2LabelCategoryLabelText}
          categoryLabelLink={category2LabelCategoryLabelLink}
          categoryLabelColorVariants={category2LabelCategoryLabelColorVariants}
          categoryLabelTextSizeVariants={
            category2LabelCategoryLabelTextSizeVariants
          }
          categoryLabelVisibility={category2LabelCategoryLabelVisibility}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "rebel-style--component_date-wrapper",
          _activeStyleVariant
        )}
        tag="div"
      >
        <DateLabel
          dateLabelText={dateLabelDateLabelText}
          dateLabelTextSizeVariants={dateLabelDateLabelTextSizeVariants}
          dateLabelFontColorVariants={dateLabelDateLabelFontColorVariants}
          dateLabelVisibility={dateLabelDateLabelVisibility}
        />
      </_Builtin.Block>
    </_Component>
  );
}
