<script setup lang="ts">
const route = useRoute()
const { data } = await useKirbyData(route.path)

// Set the current page data for the global page context
setCurrentPage(() => data.value)
</script>

<template>
  <article>
    <h1 class="h1">{{ data?.title }}</h1>
    <div v-router-links class="text" v-html="data?.text" />
  </article>
</template>
