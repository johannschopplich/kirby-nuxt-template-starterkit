<script setup lang="ts">
const route = useRoute()
const { data } = await useKirbyData(route.path)

// Set the current page data for the global page context
setPage(data.value)

const content = ref<HTMLElement | undefined>()
useInternalLinks(content)
</script>

<template>
  <article>
    <h1 class="h1">{{ data?.title }}</h1>
    <div ref="content" class="text" v-html="data?.text" />
  </article>
</template>
