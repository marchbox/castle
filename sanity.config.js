import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Happiest Page',

  projectId: 'orbj9s7j',
  dataset: 'itsarock',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
