// Render a div that wraps the default preview component

import {defineField} from 'sanity'

export const difficultyarray = defineField({
  name: 'difficulty',
  title: 'Difficulty',
  type: 'string',
  options: {
    list: [
      {'title': 'Easy', 'value': 'easy'},
      {'title': 'Medium', 'value': 'medium'},
      {'title': 'Hard', 'value': 'hard'}
      // ...
    ],
    layout: 'dropdown'

  }
})