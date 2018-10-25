import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locales.locale,
    fallbackLocale: 'kr',
    // Todo: 방식 논의 후 결정
    messages: require('~/locales/main.json')
    /*
    messages: {
      'kr': require('~/locales/kr.json'),
      'en': require('~/locales/en.json')
    }
    */
  })
}
