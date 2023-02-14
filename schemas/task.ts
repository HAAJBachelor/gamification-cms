import {testcasearray} from './testcasearray'
import {rewardarray} from './rewardarray'
import {difficultyarray} from './difficultyarray'

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
    {
      name: 'inputDescription',
      type: 'text',
      title: 'Input Description'
    },
    {
      name: 'outputDescription',
      type: 'text',
      title: 'Output Description'
    },
    {
      name: 'constraints',
      type: 'text',
      title: 'Constraints'
    },
    testcasearray,

    {
      name: 'stub',
      type: 'text',
      title: 'Code Stub'
    },
    rewardarray,
    difficultyarray,
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {'title': 'Category1', 'value': 'category1'},
          {'title': 'Category2', 'value': 'category2'},
          {'title': 'Category3', 'value': 'category3'}
        ],
        layout: 'dropdown'
      }
    }

  ]
}