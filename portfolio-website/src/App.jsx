import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from './components/About'
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Router>
        <div className="mx-6 md:mx-20 lg:mx-8 xl:mx-24 mt-8">


          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/testimonials" element={<Testimonials/>} />
          </Routes>

        </div>
      </Router>
    </>
  )
}

export default App
