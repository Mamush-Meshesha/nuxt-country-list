// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
 
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/apollo'],
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://countries.trevorblades.com/'
      }
    },
  },
   
 
})
