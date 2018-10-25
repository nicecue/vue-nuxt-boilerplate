<template>
  <section class="main">
    <component :is="target" />
  </section>
</template>

<script>
import VueComponent from '~/components/SSR/VueComponent'
import NuxtComponent from '~/components/SSR/NuxtComponent'

export default {
  name: 'SSL',
  components: {
    Vue: VueComponent,
    Nuxt: NuxtComponent
  },
  asyncData ({ req }) {
    return {
      target: (req) ? 'Nuxt' : 'Vue'
    }
  }
}
</script>
