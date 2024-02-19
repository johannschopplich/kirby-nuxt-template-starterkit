import type { FetchError } from 'ofetch'
import type { KirbyApiResponse } from '#nuxt-kql'

export default defineNuxtPlugin(async () => {
  const site = useSite()

  try {
    // Response will be cached in payload by default, thus no need to
    // handle server/client side differently
    const response = await $kirby<KirbyApiResponse>('api/__template__/__site__')
    site.value = response.result
  } catch (e) {
    console.error('Error loading site data:', (e as FetchError).message)
  }
})
