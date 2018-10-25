<template>
  <section class="main">
    <h2 v-if="error.statusCode === 404">Page not found</h2>
    <h2 v-else>An error occurred</h2>
    <nuxt-link tag="button" class="button" to="/">Home page</nuxt-link>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>
