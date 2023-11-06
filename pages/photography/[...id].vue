<script setup lang="ts">
const route = useRoute()
const { data } = await useKirbyData(route.path)

// Set the current page data for the global page context
setPage(data.value)
</script>

<template>
  <article>
    <AppIntro />

    <div class="grid">
      <div class="column" style="--columns: 4">
        <div class="text" v-html="data?.text" />
      </div>

      <div class="column" style="--columns: 8">
        <ul class="album-gallery">
          <li v-for="(image, index) in data?.gallery ?? []" :key="index">
            <figure
              class="img"
              :style="`
                  --w: ${image.width};
                  --h: ${image.height};
                `"
            >
              <ElementMediumZoom
                :src="image.resized.url"
                :data-zoom-src="image.url"
                :alt="image.alt"
              />
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style scoped>
.album-gallery {
  line-height: 0;
  columns: 1;
  column-gap: 1.5rem;
}
.album-gallery li {
  display: block;
  margin-bottom: 1.5rem;
  break-inside: avoid;
}
@media screen and (min-width: 60rem) {
  .album-gallery {
    columns: 2;
  }
}
</style>
