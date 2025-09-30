import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by my-module!')

  // add tailwindcss() --- IGNORE ---

  console.log('Nuxt App:', nuxtApp.hooks)
})
