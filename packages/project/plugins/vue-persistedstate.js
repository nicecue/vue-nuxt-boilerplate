// https://github.com/robinvdvleuten/vuex-persistedstate
import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR, app }) => {
  if (isHMR) return

  if (!app.mixins) {
    app.mixins = []
  }

  app.mixins.push({mounted () {
    createPersistedState({
      key: 'gronkout',
      paths: [
        'locales.locale',
        'counter.count'
      ]
    })(store)
  }})
}
