import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/open-science" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;