import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {GeminiProvider} from './components/context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GeminiProvider>
          <App />
      </GeminiProvider>
  </StrictMode>,
)
