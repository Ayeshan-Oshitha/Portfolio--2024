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
      <div className="flex justify-center items-center min-h-screen">
      <div className=" mx-8 sm:mx-10 md:mx-20 lg:mx-8 xl:mx-24 mt-8  w-full max-w-[1700px]">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/testimonials" element={<Testimonials/>} />
          </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
