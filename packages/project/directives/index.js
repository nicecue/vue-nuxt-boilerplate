// 엘리먼트 감춤
export const visible = (element, binding) => {
  /* eslint-disable no-extra-boolean-cast */
  element.style.visibility = (!!binding.value) ? 'visible' : 'hidden'
}

// 인풋 엘리먼트 포커스
export const focus = {
  inserted: (element) => element.focus()
}
