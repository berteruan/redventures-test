"use strict";
import "regenerator-runtime/runtime";

// UI
import { UI } from './UI'

// Components
import { Components } from './components'


(() => {
  // Initializing components
  Components.setup()

  // Initializing UI
  UI.setup()
})();
