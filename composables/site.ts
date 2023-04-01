/**
 * Access the global site context, similar to Kirby's `$site` global variable
 */
export function useSite() {
  return useState<Record<string, any>>('app.site', () => ({}))
}
