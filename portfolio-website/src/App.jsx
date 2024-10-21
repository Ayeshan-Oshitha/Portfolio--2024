import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GraphicTestimonials from "./components/GraphicTestimonials";
import GraphicProjects from "./components/GraphicProjects";
import InProgressPage from "./components/InProgressPage";
import WebProjects from "./components/WebProjects";
import WebTestimonials from "./components/WebTestimonials";
import Articles from "./components/Articles";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ScrollToTop() {
  const { pathname } = useLocation(); // Get current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page whenever the route changes
  }, [pathname]); // Re-run when the pathname changes

  useEffect(() => {
    Aos.init({
      duration: 750,
    });
  }, []);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="flex justify-center items-center  selection:bg-cyan-300 selection:text-cyan-900">
          <div className=" mx-8 sm:mx-10 md:mx-20 lg:mx-8 xl:mx-24 mt-8  w-full max-w-[1700px]">
            <Navigation location={location} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/graphicTestimonials" element={<GraphicTestimonials />} />
              <Route path="/graphicProjects" element={<GraphicProjects />} />
              <Route path="/webTestimonials" element={<WebTestimonials />} />
              <Route path="/webProjects" element={<WebProjects />} />
              <Route path="/inProgress" element={<InProgressPage />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/services" element={<Services />} />
              <Route path="/technologies" element={<Technologies />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
