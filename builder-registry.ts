"use client";
import { builder, Builder } from "@builder.io/react";
import ImageComp from '@/components/_styled/ImageComp'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(ImageComp, {
  name: "ImageComp",
  inputs: [
    {
      name: "src",
      type: "string",
    },
    {
      name: "alt",
      type: "string",
    },
    {
      name: "width",
      type: "number",
    },
    {
      name: "height",
      type: "number",
    },
    {
      name: "rounded",
      type: "enum",
      options: ["NONE", "SM", "MD", "LG", "XL", "FULL", "XXL"],
      helperText: "Choose between: NONE, SM, MD, LG, XL, FULL, or  XXL."
    },
  ],
})
