import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Desription',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: {type: 'cat'},
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'cat',
      title: 'Category',
      type: 'reference',
      to: {type: 'cat'},
    }),
    /*defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),*/
    defineField({
      name: 'image',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    /**defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'cat'}}],
    }),*/
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    /*defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),*/
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

