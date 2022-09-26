export default defineNuxtPlugin(async () => {
  const site = useSite()

  if (!Object.keys(site.value).length) {
    try {
      const response = await $kirby<Record<string, any>>('_site')
      site.value = response || {}
    } catch (e) {
      console.error('Error loading site data:', (e as Error).message)
    }
  }
})
