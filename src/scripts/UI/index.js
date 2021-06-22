import { Filter } from './interactions/Filter'
import { Results } from './interactions/Results'
import { Hero } from './interactions/Hero'

export const UI = {
  setup: () => {
    console.log('Initializing UI')
    Filter.init()
    Results.init()
    Hero.init()
  }
}
