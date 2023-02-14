import {defineField} from 'sanity'


// Render a div that wraps the default preview component

export const testcasearray = defineField({
    name: 'testCases',
    title: 'Test',
    type: 'array',
    of: [
      {
        type: 'object',
        name: 'case',
        title: 'Test Case',
        fieldsets: [
          {name: 'testcases', title: 'Test Cases', options: {columns: 2}}
        ],
        fields: [
          {
            name: 'testcaseinput',
            title: 'Test Case Input',
            type: 'text',
            fieldset: 'testcases'
          },
          {
            name: 'testcaseoutput',
            title: 'Test Case Output',
            type: 'text',
            fieldset: 'testcases'
          },
          {
            name: 'validatorinput',
            title: 'Validator Input',
            type: 'text',
            fieldset: 'testcases'
          },
          {
            name: 'validatoroutput',
            title: 'Validator Output',
            type: 'text',
            fieldset: 'testcases'
          }
        ]
      }
    ],
  }
)