import {defineField} from 'sanity'


// Render a div that wraps the default preview component

export const categoryArray = defineField({
    name: 'category',
    title: 'Category',
    type: 'array',
    of: [
      {
        type: 'object',
        name: 'category',
        title: 'Category',
        fieldsets: [
          {name: 'category', title: 'Category'}
        ],
        fields: [
          {
            name: 'name',
            title: 'Category',
            type: 'string',
            fieldset: 'category',
            options: {
              list: [
                {'title': 'Strings', 'value': 'Strings'},
                {'title': 'Math', 'value': 'Math'},
                {'title': 'Loops', 'value': 'Loops'},
                {'title': 'Array', 'value': 'Arrays'}
                // ...
              ],
              layout: 'dropdown'
            }
          }

        ],
        preview: {
          select: {
            title: 'name'
          },
          prepare(selection) {
            const {title} = selection
            return {
              title
            }
          }
        }
      }
    ]
  }
)