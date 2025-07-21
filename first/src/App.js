import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import PixelLoader from "./components/PixelLoader";
import Skills from "./components/Skills";

import './App.css';

function AppWrapper() {
  const location = useLocation();
  const hideFooterRoutes = ["/about"];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // simulate loading delay
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {loading ? <PixelLoader /> : <AppWrapper />}
    </Router>
  );
}

export default App;
