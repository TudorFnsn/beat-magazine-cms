import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [    
    defineField({
    name: 'articles',
    title: 'Home Page Articles',
    type: 'array',
    of: [{ type: 'reference', to: [{ type: 'article' }] }],
  })
],
preview: {
  prepare() {
    return {
      title: 'Home Page',
    };
  },
},
hidden: true
})
