<script setup lang="ts">
import {
  LazyKirbyBlockHeading,
  LazyKirbyBlockImage,
  LazyKirbyBlockLine,
  LazyKirbyBlockList,
  LazyKirbyBlockQuote,
  LazyKirbyBlockText,
} from '#components'
import type { ComponentPublicInstance } from 'vue'
import type { KirbyBlock } from '#nuxt-kql'

defineProps<{
  blocks: KirbyBlock<string>[]
}>()

const blockComponents: Partial<
  Record<string, new () => ComponentPublicInstance>
> = {
  heading: LazyKirbyBlockHeading,
  image: LazyKirbyBlockImage,
  line: LazyKirbyBlockLine,
  list: LazyKirbyBlockList,
  quote: LazyKirbyBlockQuote,
  text: LazyKirbyBlockText,
}
</script>

<template>
  <div v-router-links>
    <template v-for="(block, index) in blocks" :key="index">
      <component :is="blockComponents[block.type]" :block="block" />
    </template>
  </div>
</template>
