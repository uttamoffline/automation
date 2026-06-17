import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLenis } from './hooks/useLenis'
import { scrollToTop } from './lib/scroll'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { AutomationPage } from './pages/AutomationPage'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
      return () => clearTimeout(timer)
    }

    scrollToTop(true)
  }, [location.pathname, location.hash])

  return null
}

function App() {
  useLenis()

  return (
    <div className="min-h-screen bg-black">
      <ScrollToHash />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/automation" element={<AutomationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
