import { createRoot } from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error("Root element not found")
}
createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
