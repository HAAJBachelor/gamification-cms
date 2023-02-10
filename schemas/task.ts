import {arrayOfObjects} from './custom-array'

export default {
  name: 'task',
  type: 'document',
  title: 'Task',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    arrayOfObjects,

    {
      name: 'stub',
      type: 'text',
      title: 'Code Stub'
    }
  ]
}