<script setup lang="ts">
const route = useRoute()
const { data } = await useKirbyData(route.path)

// Set the current page data for the global page context
setPage(data.value)
</script>

<template>
  <div>
    <AppIntro />

    <ul class="grid" style="--gutter: 1.5rem">
      <li
        v-for="(album, index) in data?.children ?? []"
        :key="index"
        class="column"
        style="--columns: 3"
      >
        <NuxtLink :to="`/${album.id}`">
          <figure>
            <span class="img" style="--w: 4; --h: 5">
              <img :src="album?.cover?.url" :alt="album?.cover?.alt" />
            </span>
            <figcaption class="img-caption">
              {{ album.title }}
            </figcaption>
          </figure>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
