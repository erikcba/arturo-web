import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./Home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default App
