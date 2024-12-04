import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import ClassNotes from './pages/ClassNotes'
import PreviousYear from './pages/PreviousYear'
import InputData from './pages/InputData'
import About from './pages/About'
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class-notes" element={<ClassNotes />} />
          <Route path="/previous-year" element={<PreviousYear />} />
          <Route path="/input-data" element={<InputData />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}