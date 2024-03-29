<script setup lang="ts">
const route = useRoute()
const { data } = await useKirbyData(route.path)

// Set the current page data for the global page context
setPage(data.value)

const parentRoute = computed(() => route.path.split('/').slice(0, -1).join('/'))
const coverUrl = data.value?.cover?.url || data.value?.images?.[0]?.url

function formatDateShort(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}
</script>

<template>
  <div>
    <div v-if="coverUrl" class="img" style="--w: 2; --h: 1">
      <img :src="coverUrl" alt="" />
    </div>

    <article class="note">
      <header class="note-header h1">
        <h1 class="note-title">{{ data?.title }}</h1>
        <p v-if="data?.subheading" class="note-subheading">
          <small>{{ data?.subheading }}</small>
        </p>
      </header>

      <KirbyBlocks :blocks="data?.text ?? []" class="note text" />

      <footer class="note-footer">
        <ul v-if="data?.tags" class="note-tags">
          <li v-for="(tag, index) in data.tags" :key="index">
            <NuxtLink :to="{ path: parentRoute, query: { tag } }">
              {{ tag }}
            </NuxtLink>
          </li>
        </ul>

        <time
          v-if="data?.published"
          class="note-date"
          :datetime="data.published"
        >
          Published on
          {{ formatDateShort(new Date(data.published)) }}
        </time>
      </footer>

      <LazyAppPrevNext />
    </article>
  </div>
</template>

<style scoped>
.note {
  max-width: 35rem;
  margin: 0 auto;
}
.note-header {
  padding-top: 3rem;
  margin-bottom: 3rem;
}
.note-footer {
  padding: 6rem 0;
}
.note-date {
  color: var(--color-text-grey);
}
.note-tags {
  display: flex;
  margin-bottom: 1.5rem;
}
.note-tags li {
  margin-right: 0.5rem;
}
.note-tags a {
  padding: 0.5rem 1rem;
  display: block;
  background: var(--color-light);
}
.note-tags a:hover {
  background: var(--color-black);
  color: var(--color-white);
}
</style>
