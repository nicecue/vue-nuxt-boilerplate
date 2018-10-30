export const state = () => ({
  // Todo: 로컬스토리지의 값이 있다면 가져와야 하는지?
  locale: 'kr'
})

export const mutations = {
  setLocale (state, locale) {
    state.locale = locale
  }
}
