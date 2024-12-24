"use client";
import { builder, Builder } from "@builder.io/react";
import ImageComp from '@/components/_styled/ImageComp'
import { ButtonLink } from '@/components/_styled/links'
import HeroSection from '@/components/_sections/HeroSection'
import TextContent from '@/components/_styled/Text'
import SocialLinksSection from '@/components/_sections/SocialLinksSection' 
import BlogContent from '@/components/_blog/BlogContent'
import BlogImage from '@/components/_blog/BlogImage'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(ImageComp, {
  name: "ImageComp",
  models: ['page', 'footer'],
  inputs: [
    {
      friendlyName: 'Image file',
      name: 'src',
      type: "file",
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
      type: "string",
      enum: ["NONE", "SM", "MD", "LG", "XL", "FULL", "XXL"],
      helperText: "Choose between: NONE, SM, MD, LG, XL, FULL, or  XXL."
    }
  ],
})

Builder.registerComponent(ButtonLink, {
  name: 'Button Link',
  models: ['page', 'footer'],
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
      friendlyName: 'Open link in a new window?',
    },
    {
      friendlyName: 'Button rounded edges',
      name: "rounded",
      type: "string",
      enum: ["NONE", "SM", "MD", "LG", "XL", "FULL", "XXL"],
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
      type: 'string',
      enum: ["WHITE", "BLACK", "NAVY", "GOLD", "VIOLET", "RED", "PINK"],
      helperText: "Choose between: WHITE, BLACK, NAVY, GOLD, VIOLET, RED, or PINK."
    }
  ]
})

Builder.registerComponent(HeroSection, {
  name: 'Hero Section',
  models: ['page'],
  inputs: [
    {
      name: 'preHeading',
      type:'string',
      friendlyName: 'Pre-heading'
    },
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
          friendlyName: 'Open link in a new window?',
        },
        {
          friendlyName: 'Button rounded edges',
          name: "rounded",
          type: "string",
          enum: ["NONE", "SM", "MD", "LG", "XL", "FULL", "XXL"],
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
          type: 'string',
          enum: ["WHITE", "BLACK", "NAVY", "GOLD", "VIOLET", "RED", "PINK"],
          helperText: "Choose between: WHITE, BLACK, NAVY, GOLD, VIOLET, RED, or PINK."
        }
      ]
    },
    {
      name: 'image',
      type: 'list',
      max: 1,
      friendlyName: 'Image',
      defaultValue: [],
      subFields: [
        {
          friendlyName: 'Image file',
          name: 'src',
          type: "file",
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
          friendlyName: 'Button rounded edges',
          name: "rounded",
          type: "string",
          enum: ["NONE", "SM", "MD", "LG", "XL", "FULL", "XXL"],
          helperText: "Choose between: NONE, SM, MD, LG, XL, FULL, or  XXL."
        },
      ]
    }
  ]
})

Builder.registerComponent(TextContent, {
  name: 'Text Content',
  models: ['page', 'footer'],
  inputs: [
    {
      name: 'text',
      type: 'longText',
      required: true,
      friendlyName: 'Text'
    }, 
    {
      name: 'fontSize',
      friendlyName: 'Font Size',
      type: 'string',
      enum: [
        'SM',
        'MD',
        'LG',
        'XL',
        'XXL',
        'XXXL',
      ]
    },
    {
      name: 'fontStyle',
      friendlyName: 'Font Style',
      type: 'string',
      enum: [
        'NORMAL',
        'ITALIC',
        'BOLD',
        'SEMI_BOLD',
        'MEDIUM'
      ]
    },
    {
      name: 'fontFamily',
      friendlyName: 'Font Family',
      type:'string',
      enum: [
        'SANS',
        'CINZEL_DEC',
        'CINZEL'
      ]
    },
    {
      name: 'color',
      friendlyName: 'Text Color',
      type:'string',
      enum: [
        'WHITE',
        'BLACK',
      ]
    }
  ]
})

Builder.registerComponent(SocialLinksSection, {
  name: 'Social Links Section',
  models: ['footer'],
  inputs: [
    {
      name: 'socialLinks',
      type: 'array',
      friendlyName: 'Social Links',
      helperText: "This is used to add social media links to your Social Links Section.",
      defaultValue: [],
      subFields: [
        {
          name: 'title',
          type:'string',
          required: true,
          friendlyName: 'Title'
        },
        {
          name: 'href',
          type: 'string',
          required: true,
          friendlyName: 'Link'
        },
        {
          name: 'image',
          type: 'list',
          max: 1,
          friendlyName: 'Image',
          defaultValue: [],
          subFields: [
            {
              friendlyName: 'Image file',
              name: 'src',
              type: "file",
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
          ]
        }
      ]
    },
  ]
})

Builder.registerComponent(BlogContent, {
  name: 'Blog Content',
  models: ['blog-article'],
  inputs: [
    {
      name: 'textContent',
      type: 'richText',
      required: true,
      friendlyName: 'Text Content'
    }
  ]
})

Builder.registerComponent(BlogImage, {
  name: "Blog Image",
  models: ['blog-article'],
  inputs: [
    {
      friendlyName: 'Image file',
      name: 'src',
      type: "file",
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
      type: "string",
      enum: ["NONE", "SM", "MD", "LG", "XL", "FULL", "XXL"],
      helperText: "Choose between: NONE, SM, MD, LG, XL, FULL, or  XXL."
    }
  ],
})