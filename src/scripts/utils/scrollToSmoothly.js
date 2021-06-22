export const scrollToSmoothly = (element = null) => {
  if (!element) return window.scrollTo({ top: 0, behavior: 'smooth' });

  const distanceToTop = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: distanceToTop, behavior: 'smooth' })
}
