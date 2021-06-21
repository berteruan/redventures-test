import { Filter } from './interactions/Filter'
import { Results } from './interactions/Results'

export const UI = {
  setup: () => {
    console.log('Initializing UI')
    Filter.init()
    Results.init()
  }
}
