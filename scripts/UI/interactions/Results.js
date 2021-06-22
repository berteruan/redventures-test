// Utils
import { scrollToSmoothly } from '../../utils/scrollToSmoothly'

// Mock`s
import { handleGenerateResultContainerHTML, handleGenerateResultCard, handleGenerateNoResults } from '../mocks/ResultsMock'

// Elements
const resultsContainer = document.querySelector('.results')

export const Results = {
  functions: {
    handleToggleLoading: () => {
      resultsContainer.classList.toggle('loading')
    },
    handleUpdateResultItems: ({ detail: data }) => {
      resultsContainer.innerHTML = '';

      if (data.error === 'No plants found') {
        resultsContainer.insertAdjacentHTML(`beforeend`, handleGenerateNoResults())

        return scrollToSmoothly(document.querySelector('.results'))
      }

      resultsContainer.insertAdjacentHTML('beforeend', handleGenerateResultContainerHTML())
      const resultDataContainer = document.querySelector('.result-horizontal-scroll')
      document.querySelector('.scroll-to-top-button').addEventListener("click", () => scrollToSmoothly(), false)

      data.map(item => resultDataContainer.insertAdjacentHTML('beforeend', handleGenerateResultCard(item)))
      scrollToSmoothly(document.querySelector('.results'))
    }
  },
  listeners: () => {
    window.addEventListener('handleToggleLoading', Results.functions.handleToggleLoading)
    window.addEventListener('updateResultItems', Results.functions.handleUpdateResultItems)
  },
  init: () => {
    Results.listeners()
  }
}
