// Services
import { api } from '../../services/api'

// Utils
import { scrollToSmoothly } from '../../utils/scrollToSmoothly'

export const Filter = {
  state: {
    data: {},
    isFisrtLoading: true,
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
      if (Filter.state.isFisrtLoading) scrollToSmoothly(document.querySelector('.results'))

      try {
        let data = await api({ method: 'GET', queryParams: { ...Filter.state.data } })

        // Sorting response to Staff favorites first
        data = data.sort((a,b) => {
          if (a.staff_favorite === b.staff_favorite) return 0
          if (a.staff_favorite) return -1

          return 1
        })

        window.dispatchEvent(new CustomEvent('updateResultItems', { detail: data }))
        Filter.state.isFisrtLoading = false
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
