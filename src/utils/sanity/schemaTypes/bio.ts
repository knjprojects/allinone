import { defineField, defineType } from "sanity";

export default defineType({
  name: "bio",
  title: "Bio",
  type: "document",
  fields: [
    defineField({
      name: "username",
      title: "Enter The Name of The Person you are adding Information About",
      type: "string",
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "string",
    }),

    defineField({
      name: "playprice",
      title: "Cost to play at venue",
      type: "number",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "username",
        maxLength: 96,
      },
    }),
    /*defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),*/
    defineField({
      name: "image",
      title: "Main image For Anselm",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "bioimage1",
      title: "Anselm Bio Image 1",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "bioimage1",
          type: "string",
          title: "Anselm Bio Image 1",
        },
      ],
    }),
    defineField({
      name: "bioimage2",
      title: "Anselm Bio Image 2",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "bioimage2",
          type: "string",
          title: "Anselm Bio Image 2",
        },
      ],
    }),
    defineField({
      name: "bioimage3",
      title: "Anselm Bio Image 3",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "bioimage3",
          type: "string",
          title: "Anselm Bio Image 3",
        },
      ],
    }),
    defineField({
      name: "bioinstrument1",
      title: "Bio Instrument 1",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "bioinstrument1",
          type: "string",
          title: "Bio Instrument 1",
        },
      ],
    }),
    defineField({
      name: "bioinstrument2",
      title: "Bio Instrument 2",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "bioinstrument2",
          type: "string",
          title: "Bio Instrument 2",
        },
      ],
    }),
    defineField({
      name: "bioinstrument3",
      title: "Bio Instrument 3",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "bioinstrument3",
          type: "string",
          title: "Bio Instrument 3",
        },
      ],
    }),
    /**defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'cat'}}],
    }),*/
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    /*defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),*/
  ],

  preview: {
    select: {
      title: "username",
      media: "image",
    },
  },
});
