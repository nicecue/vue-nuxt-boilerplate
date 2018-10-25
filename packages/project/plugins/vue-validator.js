import Vue from 'vue'
// http://simple-vue-validator.magictek.cn/
import SimpleVueValidation from 'simple-vue-validator'

Vue.use(SimpleVueValidation)

export default ({ app }, inject) => {
  inject('Validator', SimpleVueValidation.Validator)
}
