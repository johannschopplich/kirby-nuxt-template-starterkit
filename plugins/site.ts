import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async () => {
  const site = useSite()

  try {
    const { data } = await useKirbyFetch('_site')
    site.value = data.value || {}
  } catch (e) {
    console.error('Error loading site data:', (e as Error).message)
  }
})
