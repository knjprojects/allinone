import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
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
    /*defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),*/
    /*defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),*/
  ],

 /* preview: {
    select: {
      title: 'title',
      cat: 'cat.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {cat} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },*/
})

