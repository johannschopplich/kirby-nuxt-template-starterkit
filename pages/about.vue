<script setup lang="ts">
const route = useRoute()
const { data } = await useKirbyData(route.path)

// Set the current page data for the global page context
setPage(data.value)

const content = ref<HTMLElement | undefined>()
useInternalLinks(content)
</script>

<template>
  <div>
    <KirbyLayouts :layouts="data.layouts ?? []" />

    <aside class="contact">
      <h2 class="h1">Get in contact</h2>
      <div ref="content" class="grid" style="--gutter: 1.5rem">
        <section class="column text" style="--columns: 4">
          <h3>Address</h3>
          <div v-html="data.address" />
        </section>

        <section class="column text" style="--columns: 4">
          <h3>Email</h3>
          <p v-html="data.email" />
          <h3>Phone</h3>
          <p v-html="data.phone" />
        </section>

        <section class="column text" style="--columns: 4">
          <h3>On the web</h3>
          <ul>
            <li v-for="(item, index) in data.social" :key="index">
              <a :href="item.url">
                {{ item.platform }}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.contact {
  padding: 3rem;
  border: 2px solid #000;
}
.contact .h1 {
  margin-bottom: 1.5rem;
}
</style>
