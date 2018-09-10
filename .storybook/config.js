import { setAddon, configure } from '@storybook/react'
import infoAddon, { setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'

// addon-info
setOptions({
  name: 'Practo Marketplace',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true
})

setDefaults({
  inline: true,
  header: false,
  source: true,
  styles: stylesheet => {
    stylesheet.infoBody = {
      infoBody: {
        padding: '10px'
      }
    }
    return stylesheet
  },
  maxPropsIntoLine: 1
  // propTablesExclude: [ReadmeContainer, DefaultPreview]
})

//setAddon(infoAddon)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.jsx?$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
