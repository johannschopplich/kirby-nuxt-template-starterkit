import type { FetchError } from 'ofetch'

export default defineNuxtPlugin(async () => {
  const site = useSite()

  try {
    // Response will be cached in payload by default, thus no need to
    // handle server/client side differently
    site.value = await $kirby('__templates__/__site__')
  } catch (e) {
    console.error('Error loading site data:', (e as FetchError).message)
  }
})
