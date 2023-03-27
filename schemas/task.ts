import {testcasearray} from './testcasearray'
import {rewardarray} from './rewardarray'
import {difficultyarray} from './difficultyarray'
import {categoryArray} from './categoryarray'

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
    {
      name: 'score',
      type: 'number',
      title: 'Score'
    },
    difficultyarray,
    categoryArray

  ]
}