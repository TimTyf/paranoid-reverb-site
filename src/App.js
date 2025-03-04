import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl">Paranoid Reverb Official Website</h1>
      </section>
      
      <section id="music" className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-3xl">Music Section</h2>
      </section>

      <section id="merch" className="h-screen flex items-center justify-center bg-gray-800 text-white">
        <h2 className="text-3xl">Merch Section</h2>
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-gray-700 text-white">
        <h2 className="text-3xl">About Us</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-600 text-white">
        <h2 className="text-3xl">Contact Us</h2>
      </section>
    </div>
  );
}

export default App;
