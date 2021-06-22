// Utils
import { scrollToSmoothly } from '../../utils/scrollToSmoothly'

// Elements
const heroArrowElement = document.querySelector('.hero-arrow')

export const Hero = {
  functions: {
    handleScrollToFilters: async () => {
      const filterSection = document.querySelector('.filter')

      scrollToSmoothly(filterSection)
    }
  },
  listeners: () => {
    heroArrowElement.addEventListener('click', Hero.functions.handleScrollToFilters, false)
  },
  init: () => {
    Hero.listeners()
  }
}
