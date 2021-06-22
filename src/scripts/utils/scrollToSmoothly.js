export const scrollToSmoothly = element => {
  const distanceToTop = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({ top: distanceToTop, behavior: 'smooth' })
}
