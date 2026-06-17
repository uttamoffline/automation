import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/globals.css'

function RedirectHandler() {
  useEffect(() => {
    const redirect = sessionStorage.redirect
    if (redirect) {
      delete sessionStorage.redirect
      window.history.replaceState(null, '', redirect)
    }
  }, [])
  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RedirectHandler />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
