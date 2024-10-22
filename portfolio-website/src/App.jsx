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
import ImageViewer from "./components/ImageViewer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Snowfall from "react-snowfall";

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
        <Snowfall
          color="#c084fc"
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
          snowflakeCount={170}
        />

        <ScrollToTop />
        <div className="flex justify-center items-center  selection:bg-cyan-300 selection:text-cyan-900">
          <div className=" mx-8 sm:mx-10 md:mx-20 lg:mx-8 xl:mx-24 mt-8  w-full max-w-[1700px] relative">
            <Navigation />
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
              <Route
                path="/image-viewer"
                element={
                  <ImageViewer
                    images={JSON.parse(localStorage.getItem("images"))}
                    initialIndex={new URLSearchParams(window.location.search).get("index")}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
