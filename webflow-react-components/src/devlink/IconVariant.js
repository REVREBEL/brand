"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IconVariant.module.css";

export function IconVariant({
  as: _Component = _Builtin.Image,
  icon = "https://cdn.prod.website-files.com/6976d8d60d88c3f116f429a4/69bb63f8be4e0df1c0e4e52c_7ffe101a8bec806f54aec9e0844e5a6e_Arrow-currentColor.svg",
  iconAltText = "__wf_reserved_inherit",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "rebel-style--icon-variant")}
      id={_utils.cx(
        _styles,
        "w-node-a175bbef-235a-4df6-dd22-0ad8c3c833dd-c3c833dd"
      )}
      width="auto"
      height="auto"
      loading="lazy"
      src={icon}
    />
  );
}
