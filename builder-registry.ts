"use client";
import { builder, Builder } from "@builder.io/react";
import ImageComp from '@/components/_styled/ImageComp'
import { ButtonLink } from '@/components/_styled/links'
import HeroSection from '@/components/_sections/HeroSection'


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(ImageComp, {
  name: "ImageComp",
  inputs: [
    {
      friendlyName: 'Image source link',
      name: "src",
      type: "string",
      required: true
    },
    {
      friendlyName: 'Image accessibility alt text',
      name: "alt",
      type: "string",
      required: true
    },
    {
      friendlyName: 'Image width dimension',
      name: "width",
      type: "number",
      required: true
    },
    {
      friendlyName: 'Image height dimension',
      name: "height",
      type: "number",
      required: true
    },
    {
      friendlyName: 'Image rounded edges',
      name: "rounded",
      type: "enum",
      options: ["NONE", "SM", "MD", "LG", "XL", "FULL", "XXL"],
      helperText: "Choose between: NONE, SM, MD, LG, XL, FULL, or  XXL."
    },
  ],
})

Builder.registerComponent(ButtonLink, {
  name: 'Button Link',
  inputs: [
    {
      name: 'linkText',
      type:'string',
      required: true,
      friendlyName: 'Link text'
    },
    {
      name: 'title',
      type: 'string',
      required: true,
      friendlyName: 'Accessibility title'
    },
    {
      name: 'href',
      type: 'string',
      friendlyName: 'Link',
      required: true
    },
    {
      name: 'targetBlank',
      type: 'boolean',
      required: true,
      friendlyName: 'Open link in a new window?',
    },
    {
      friendlyName: 'Button rounded edges',
      name: "rounded",
      type: "enum",
      options: ["NONE", "SM", "MD", "LG", "XL", "FULL", "XXL"],
      helperText: "Choose between: NONE, SM, MD, LG, XL, FULL, or  XXL."
    },
    {
      friendlyName: 'Display an arrow icon',
      name: 'arrow',
      type: 'boolean',
    },
    {
      friendlyName: 'Button color',
      name: 'bgColor',
      type: 'enum',
      options: ["WHITE", "BLACK", "NAVY", "GOLD", "VIOLET", "RED", "PINK"],
      helperText: "Choose between: WHITE, BLACK, NAVY, GOLD, VIOLET, RED, or PINK."
    }
  ]
})

Builder.registerComponent(HeroSection, {
  name: 'Hero Section',
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Button Links or Images in this section.',
    query: {
      'component.name': { $in: ['Button Link', 'ImageComp'] }
    }
  },
  inputs: [
    {
      name: 'heading',
      type:'string',
      required: true,
      friendlyName: 'Heading'
    },
    {
      name:'subheading',
      type:'string',
      friendlyName: 'Subheading',
    },
    {
      name: 'textBody',
      type:'longText',
      required: true,
      friendlyName: 'Text Body'
    },
    {
      name: 'ctaChildren',
      type: 'array',
      friendlyName: 'Call-to-Action children',
      helperText: "This is used to add Button Links to your Hero Section. You can only add up to 2 buttons.",
      defaultValue: [],
      max: 2,
      subFields: [
        {
          name: 'linkText',
          type:'string',
          required: true,
          friendlyName: 'Link text'
        },
        {
          name: 'title',
          type: 'string',
          required: true,
          friendlyName: 'Accessibility title'
        },
        {
          name: 'href',
          type: 'string',
          friendlyName: 'Link',
          required: true
        },
        {
          name: 'targetBlank',
          type: 'boolean',
          required: true,
          friendlyName: 'Open link in a new window?',
        },
        {
          friendlyName: 'Button rounded edges',
          name: "rounded",
          type: "enum",
          options: ["NONE", "SM", "MD", "LG", "XL", "FULL", "XXL"],
          helperText: "Choose between: NONE, SM, MD, LG, XL, FULL, or  XXL."
        },
        {
          friendlyName: 'Display an arrow icon',
          name: 'arrow',
          type: 'boolean',
        },
        {
          friendlyName: 'Button color',
          name: 'bgColor',
          type: 'enum',
          options: ["WHITE", "BLACK", "NAVY", "GOLD", "VIOLET", "RED", "PINK"],
          helperText: "Choose between: WHITE, BLACK, NAVY, GOLD, VIOLET, RED, or PINK."
        }
      ]
    },
    {
      name: 'image',
      type: 'list',
      friendlyName: 'Image',
      defaultValue: [],
      subFields: [
        {
          name: 'Image',
          type: 'uiBlocks',
          defaultValue: []
        }
      ]
    }
  ]
})
