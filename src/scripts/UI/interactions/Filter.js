import { api } from '../../services/api'
// Atualizar componente com valores dinâmicos

export const Filter = {
  state: {
    data: {},
  },
  functions: {
    handleGetSelectValues: async () => {
      for (const option of document.querySelectorAll(".option.selected")) {
        const id = option.parentNode.getAttribute('id')
        const value = option.getAttribute('data-value')

        Filter.state.data[id] = value
      }

      if (Object.values(Filter.state.data).length > 2) window.dispatchEvent(new CustomEvent('handleSubmitFilter'))
    },
    handleSubmitFilter: async () => {
      window.dispatchEvent(new CustomEvent('handleToggleLoading'))

      try {
        const data = await api({ method: 'GET', queryParams: { ...Filter.state.data } })
        window.dispatchEvent(new CustomEvent('updateResultItems', { detail: data }))
      } catch (error) {
        console.log(error)
      } finally {
        window.dispatchEvent(new CustomEvent('handleToggleLoading'))
      }
    }
  },
  listeners: () => {
    window.addEventListener('customSelectUpdated', Filter.functions.handleGetSelectValues)
    window.addEventListener('handleSubmitFilter', Filter.functions.handleSubmitFilter)
  },
  init: () => {
    Filter.listeners()
  }
}
