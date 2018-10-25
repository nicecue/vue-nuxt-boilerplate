export const state = () => ({
  locales: ['kr', 'en'],
  locale: 'kr'
})

export const mutations = {
  setLocale (state, locale) {
    if (~state.locales.indexOf(locale)) {
      state.locale = locale
    }
  }
}
