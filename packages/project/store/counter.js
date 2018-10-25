export const state = () => ({
  count: 10000
})

export const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}
