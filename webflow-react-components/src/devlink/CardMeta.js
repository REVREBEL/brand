"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CardMetaLayoutInner } from "./CardMetaLayoutInner";
import * as _utils from "./utils";
import _styles from "./CardMeta.module.css";

export function CardMeta({
  as: _Component = _Builtin.Block,
  metaLayoutVariant = null,
  categoryLabelTextSizeVariants = null,
  category1LabelCategoryLabelVisibility = true,
  category1LabelCategoryLabelId,
  category1LabelCategoryLabelColorVariants = null,
  category1LabelCategoryLabelLink = true,

  category1LabelCategoryLabelText = {
    href: "#",
  },

  category1LabelCategorySlug,
  category1LabelCategory1LabelCategoryPrimaryColor2,
  category1LabelCategoryInverseColor = null,
  category1LabelCategoryLabelTextSizeVariants2 = "Category Name",

  category1LabelCategoryPrimaryColor = {
    href: "#",
  },

  category1LabelCategory1LabelCategorySlug,
  category2LabelCategoryLabelText = "Category Name",
  category1LabelCategory1LabelCategoryInverseColor,
  category2LabelCategoryPrimaryColor,
  category2LabelCategoryInverseColor,
  category2LabelCategorySlug,
  dateLabelDateLabelVisibility = true,
  dateLabelDateLabelFontColorVariants = null,
  dateLabelDateLabelText = "Month YYYY",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "rebel-style--component_card-meta")}
      id={_utils.cx(
        _styles,
        "w-node-_20db69ff-e980-6b9f-d7c3-3858c94bb9cc-c94bb9cc"
      )}
      tag="div"
    >
      <CardMetaLayoutInner
        category2LabelCategoryInverseColor={category2LabelCategoryInverseColor}
        category2LabelCategorySlug={category2LabelCategorySlug}
        category2LabelCategoryLabelText={category2LabelCategoryLabelText}
        category2LabelCategoryLabelId={category1LabelCategorySlug}
        category2LabelCategoryLabelLink={category1LabelCategoryPrimaryColor}
        category2LabelCategoryLabelVisibility={category1LabelCategoryLabelLink}
        category1LabelCategoryLabelVisibility={
          category1LabelCategoryLabelVisibility
        }
        category1LabelCategoryLabelLink={category1LabelCategoryLabelText}
        category1LabelCategoryLabelId={category1LabelCategoryLabelId}
        category1LabelCategoryLabelText={
          category1LabelCategoryLabelTextSizeVariants2
        }
        category1LabelCategorySlug={category1LabelCategory1LabelCategorySlug}
        category1LabelCategoryInverseColor={
          category1LabelCategory1LabelCategoryInverseColor
        }
        metaLayoutVariant={metaLayoutVariant}
        category1LabelCategoryLabelColorVariants={
          category1LabelCategoryLabelColorVariants
        }
        category1LabelCategoryLabelTextSizeVariants={
          categoryLabelTextSizeVariants
        }
        category1LabelCategoryPrimaryColor={
          category1LabelCategory1LabelCategoryPrimaryColor2
        }
        category2LabelCategoryLabelColorVariants={
          category1LabelCategoryLabelColorVariants
        }
        category2LabelCategoryLabelTextSizeVariants={
          categoryLabelTextSizeVariants
        }
        category2LabelCategoryPrimaryColor={
          category1LabelCategory1LabelCategoryPrimaryColor2
        }
        dateLabelDateLabelVisibility={dateLabelDateLabelVisibility}
        dateLabelDateLabelText={dateLabelDateLabelText}
        dateLabelDateLabelFontColorVariants={
          dateLabelDateLabelFontColorVariants
        }
        dateLabelDateLabelTextSizeVariants={categoryLabelTextSizeVariants}
      />
    </_Component>
  );
}
