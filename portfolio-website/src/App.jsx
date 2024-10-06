import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from './components/About'
import Contact from "./components/Contact";
import GraphicTestimonials from "./components/GraphicTestimonials";
import GraphicProjects from './components/GraphicProjects'
import InProgressPage from "./components/InProgressPage";
import WebProjects from "./components/WebProjects";
import WebTestimonials from "./components/WebTestimonials";
import Articles from "./components/Articles";
import Services from "./components/Services";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Router>
      <div className="flex justify-center items-center">
      <div className=" mx-8 sm:mx-10 md:mx-20 lg:mx-8 xl:mx-24 mt-8  w-full max-w-[1700px]">
          <Navigation  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/graphicTestimonials" element={<GraphicTestimonials/>} />
            <Route path="/graphicProjects" element={<GraphicProjects/>} />
            <Route path="/webTestimonials" element={<WebTestimonials/>} />
            <Route path="/webProjects" element={<WebProjects/>} />
            <Route path="/inProgress" element={<InProgressPage/>} />
            <Route path="/articles" element={<Articles/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/technologies" element={<Technologies/>} />
          </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
