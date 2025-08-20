import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ContactPage from "./pages/ContactPage";
import AboutMe from "./pages/AboutMe";
// import PageWrapper from "./components/PageWrapper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      {/* <PageWrapper> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      {/* </PageWrapper> */}
    </Router>
  );
}

export default App;
