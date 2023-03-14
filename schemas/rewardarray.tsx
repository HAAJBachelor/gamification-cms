import {defineField} from 'sanity'


// Render a div that wraps the default preview component

export const rewardarray = defineField({
    name: 'rewards',
    title: 'Rewards',
    type: 'array',
    of: [
      {
        type: 'object',
        name: 'reward',
        title: 'Reward',
        fieldsets: [
          {name: 'rewards', title: 'Rewards', options: {columns: 2}}
        ],
        fields: [
          {
            name: 'type',
            title: 'Reward Type',
            type: 'string',
            fieldset: 'rewards',
            options: {
              list: [
                {'title': 'Time', 'value': 'time'},
                {'title': 'Lives', 'value': 'live'},
                {'title': 'Points', 'value': 'points'}
                // ...
              ],
              layout: 'dropdown'
            }
          },
          {
            name: 'amount',
            title: 'Reward Amount',
            type: 'number',
            fieldset: 'rewards'
          }
        ],
        preview: {
          select: {
            title: 'type',
            amount: 'amount'
          },
          prepare(selection) {
            const {title, amount} = selection
            return {
              title,
              subtitle: amount
            }
          }
        }
      }
    ]
  }
)