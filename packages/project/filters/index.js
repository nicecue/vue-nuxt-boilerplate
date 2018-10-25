// 원 100 단위 콤마 추가
export const thousandSeparator = (value) => {
  return new Intl.NumberFormat().format(value)
}
