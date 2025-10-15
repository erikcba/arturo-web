import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Index from "./Index"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />

    </Routes>
  )
}

export default App
