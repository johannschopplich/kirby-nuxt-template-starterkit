import { hash } from 'ohash'
import type { Ref } from 'vue'

export function useKirbyFetch<T extends Record<string, any>>(
  query: Ref<string> | string
) {
  const _uri = computed(() => unref(query).replace(/^\//, ''))

  return useFetch<T>('/api/__kirby__', {
    key: hash(_uri.value),
    method: 'POST',
    body: {
      uri: _uri.value,
    },
  })
}
