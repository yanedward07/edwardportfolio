import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BeyondTheWorkPage } from './pages/BeyondTheWorkPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beyond-the-work" element={<BeyondTheWorkPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
