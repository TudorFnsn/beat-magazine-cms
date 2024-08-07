import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'currentIssue',
  title: 'Current Issue',
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
      name: 'issueName',
      title: 'Issue Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'currentIssueImages',
      title: 'Current Issue Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'covers',
      title: 'Covers',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'subtext1',
      title: 'Subtext Part I',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'subtext2',
      title: 'Subtext Part II',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    })
  ],
  preview: {
    select: {
      title: 'title1',
      artist: 'artist',
      media: 'images[0]',
    },
    prepare(selection) {
      const { title, artist, media } = selection;
      return {
        title: `${artist} - ${title}`,
        media: media,
      };
    },
  }
})
