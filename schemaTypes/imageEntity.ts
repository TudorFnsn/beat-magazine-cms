import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'archiveImage',
  title: 'Archive Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: '',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // artistul din poza
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'string'
    }),
    defineField({
        name: 'photographer',
        title: 'Photographer',
        type: 'string'
    }),
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          { title: 'Landscape', value: 'landscape' },
          { title: 'Portrait', value: 'portrait' },
          { title: 'Small', value: 'small' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
      source: (x) => `${x.artist}`, //asta nu are titlu. ce punem? sigur vrea preview?
      maxLength: 96,
      },
  })],
  preview: {
    select: {
      artist: 'artist',
      media: 'image',
      photographer: 'photographer',
    },
    prepare(selection) {
      const { artist, media, photographer } = selection;
      return {
        title: `${artist} photographed by ${photographer}`,
        media: media,
      };
    },
  },
})




