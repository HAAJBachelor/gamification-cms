import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {taskStructure} from './deckStructure'
import {HelloWorldAction} from './schemas/action'

export default defineConfig({
  name: 'default',
  title: 'Gamification CMS',

  projectId: 'qo3c85wt',
  dataset: 'production',

  plugins: [deskTool({
    structure: taskStructure
  }), visionTool()],
  document: {
    actions: [HelloWorldAction],
  },

  schema: {
    types: schemaTypes
  }
})
