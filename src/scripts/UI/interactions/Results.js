import { handleGenerateResultContainerHTML, handleGenerteResultCard } from '../mocks/ResultContainer'


export const Results = {
  functions: {
    handleToggleLoading: () => {
      console.log('Toogle Loading...')
    },
    handleUpdateResultItems: ({ detail: data }) => {
      console.log(data)
      const resultsContainer = document.querySelector('.results')
      resultsContainer.innerHTML = '';
      resultsContainer.insertAdjacentHTML('beforeend', handleGenerateResultContainerHTML())
      const resultDataContainer = document.querySelector('.result-horizontal-scroll')

      data.map(item => resultDataContainer.insertAdjacentHTML('beforeend', handleGenerteResultCard(item)))

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
