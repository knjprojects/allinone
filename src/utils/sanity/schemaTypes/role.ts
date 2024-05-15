import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'role',
  title: 'User Role',
  type: 'document',
  fields: [
   
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'role',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
    
  ],
  preview: {
    select: {
      title: 'role',
      media: 'image',
    },
  },
})
