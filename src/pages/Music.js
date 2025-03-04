import React from "react";

function Music() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Our Music</h1>
      <p className="text-lg text-gray-300">Listen to our latest releases and explore our discography.</p>
      <a
        href="https://paranoidreverb.bandcamp.com/album/billion-drops"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg"
      >
        Listen on Bandcamp
      </a>
    </div>
  );
}

export default Music;
