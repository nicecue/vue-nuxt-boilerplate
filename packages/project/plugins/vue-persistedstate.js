// https://github.com/robinvdvleuten/vuex-persistedstate
import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR, app }) => {
  if (isHMR) return

  if (!app.mixins) {
    app.mixins = []
  }

  app.mixins.push({
    beforeCreate () {
      createPersistedState({
        // Todo: 로컬스토리지에 저장 키 추가
        key: 'project',
        paths: [
          'locales.locale'
        ]
      })(store)
      this.$i18n.locale = store.state.locales.locale
    }
  })
}
