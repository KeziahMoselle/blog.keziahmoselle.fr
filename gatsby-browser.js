import './src/utils/index.css'
import './src/utils/markdown.css'
import 'horizon-prismjs-theme/theme.css'

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}