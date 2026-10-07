import { Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Research from './pages/Research'

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </>
  )
}

export default App
