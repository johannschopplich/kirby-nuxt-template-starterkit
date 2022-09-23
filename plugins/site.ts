export default defineNuxtPlugin(async () => {
  const site = useSite()

  if (Object.keys(site.value).length) return

  try {
    const { data } = await useKirbyData('_site')
    site.value = data.value || {}
  } catch (e) {
    console.error('Error loading site data:', (e as Error).message)
  }
})
