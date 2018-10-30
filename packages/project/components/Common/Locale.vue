<template>
  <div>
    <label for="locale" class="blind">Locale</label>
    <select id="locale" name="locale" v-model="locale">
      <option :value="'kr'" selected>{{ $t('header.korean') }}</option>
      <option :value="'en'">{{ $t('header.english') }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Locale',
  data () {
    return {
      locale: this.$store.state.locales.locale
    }
  },
  watch: {
    locale (value) {
      this.$store.commit('locales/setLocale', value)
      this.$i18n.locale = value
    }
  }
}
</script>
