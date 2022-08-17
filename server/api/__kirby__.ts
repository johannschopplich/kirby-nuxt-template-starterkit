import { createError, defineEventHandler, readBody } from 'h3'
import { useRuntimeConfig } from '#imports'
import type { FetchError } from 'ohmyfetch'

export default defineEventHandler(
  async (event): Promise<Record<string, any>> => {
    const body = await readBody(event)
    const uri: string = body.uri || ''

    if (!uri) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Empty page ID',
      })
    }

    const { kql } = useRuntimeConfig()

    try {
      return await $fetch(uri, {
        baseURL: kql.url,
        headers: {
          Authorization: `Bearer ${kql.token}`,
        },
      })
    } catch (err) {
      throw createError({
        statusCode: 500,
        statusMessage: "Couldn't fetch Kirby template data",
        data: (err as FetchError).message,
      })
    }
  }
)
