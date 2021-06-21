export const serialize = paramsObj => {
  return new URLSearchParams(paramsObj).toString()
}
