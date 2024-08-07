import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
        name: 'artist',
        title: 'Artist Name',
        type: 'string',
    }),
    defineField({
      name: 'title1',
      title: 'Title Part I',
      type: 'string',
    }),
    defineField({
        name: 'title2',
        title: 'Subcredit',
        type: 'string',
    }),
    defineField({
        name: 'homePageTitle',
        title: 'Homepage Title',
        type: 'string',
    }),
    defineField({
        name: 'photographer',
        title: 'Photographer Name',
        type: 'string',
    }),
    defineField({
        name: 'issue',
        title: 'Article Issue',
        type: 'string',
    }),
    defineField({
        name: 'landingPageCover',
        title: 'Landing Page Cover',
        type: 'image',
        options: {
            hotspot: true,
      },
    }),
    defineField({
        name: 'thumbnail',
        title: 'Article Thumbnail',
        type: 'image',
        options: {
            hotspot: true,
      },
    }),
    defineField({
        name: 'cover',
        title: 'Article Cover',
        type: 'image',
        options: {
            hotspot: true,
      },
    }),
    defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'image', options: {
            hotspot: true,
      } }
        ],
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
        source: (doc) => `${doc.artist}-${doc.title1}`,
        maxLength: 96,
        },
    }),
    defineField({
      name: 'products',
      title:'Related Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title1',
      author: 'artist',
      media: 'landingPageCover',
    },
    prepare(selection) {
      const { title, author, media } = selection;
      return {
        title: `${author} - ${title}`,
        media: media,
      };
    },
  },
})
