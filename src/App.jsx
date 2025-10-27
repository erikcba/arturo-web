import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Index from "./Index"
import Calendar from "./pages/Calendar"
import Contact from "./pages/Contact"
import { AudioProvider } from "./components/AudioContext"

function App() {

  return (
    <AudioProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AudioProvider>
  )
}

export default App
