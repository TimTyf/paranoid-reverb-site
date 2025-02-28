import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Merch from "./pages/Merch";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation Menu */}
        <nav className="p-4 bg-gray-800 flex justify-around">
          <Link to="/" className="text-lg font-bold">Home</Link>
          <Link to="/music" className="text-lg font-bold">Music</Link>
          <Link to="/merch" className="text-lg font-bold">Merch</Link>
          <Link to="/about" className="text-lg font-bold">About</Link>
          <Link to="/contact" className="text-lg font-bold">Contact</Link>
        </nav>

        {/* Routes (Διαδρομές) */}
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
