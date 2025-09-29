import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
  addImportsDir,
} from '@nuxt/kit'
import { existsSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'notion-renderer',
    configKey: 'notionRenderer',
    version: '1.0.0',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, nuxt) {
    console.log('Checking for Tailwind CSS module in app...', nuxt.__name)
    console.log('Setting up nuxt-notion-renderer module...')
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.vite.plugins ||= []
    nuxt.options.vite.plugins.push(tailwindcss())

    nuxt.options.css ||= []

    if (existsSync(resolve('./runtime/assets/css/main.css'))) {
      nuxt.options.css.push(resolve('./runtime/assets/css/main.css'))
    }

    // add nuxt icon module --- IGNORE ---
    if (!nuxt.options.modules?.includes('nuxt-icon')) {
      console.log('Adding nuxt-icon module...')
      nuxt.options.modules.push('nuxt-icon')
    }

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))

    addComponentsDir({
      path: resolve('./runtime/components'),
      pathPrefix: false,
      prefix: 'Notion',
      global: true,
    })

    addImportsDir(resolve('./runtime/composables'))
  },
})
