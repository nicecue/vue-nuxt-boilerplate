<template>
  <div>
    <header>
      <h1>vue-boilerplate</h1>
      <navigation />
    </header>
    <nuxt/>
    <footer>
      copyright
    </footer>
  </div>
</template>

<script>
import Navigation from '~/components/Common/Navigation'

export default {
  name: 'Default',
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 20px;
  h1 {
    margin-bottom: 30px;
    font-size: 30px;
  }
}
footer {
  margin-top: 20px;
}
</style>
