import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-200 flex items-center justify-center p-8">
      <div className="max-w-5xl bg-white/30 backdrop-blur-lg rounded-lg p-8 shadow-lg flex flex-wrap">
        {/* Left Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/path/to/large-unicorn.png"
            alt="Large Unicorn"
            className="w-3/4 md:w-full rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 flex items-center">
            About Us
            <img
              src="/path/to/small-unicorn-icon.png"
              alt="Unicorn Icon"
              className="w-8 h-8 ml-2"
            />
          </h1>
          <p className="text-black/70 mb-6">
            Tortor suscipit non habitant natoque elementum, lectus turpis.
            Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea
            bibendum tempor non tempus egestas. Rhoncus sit est risus tellus
            lorem convallis. Amet pellentesque viverra euismod eget dignissim
            ullamcorper. In et ac amet, habitant erat fermentum eget aliquet
            lectus. Condimentum congue nibh nisl sed quis justo, senectus
            egestas.
          </p>
          <p className="text-black/70 mb-6">
            In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit
            gravida potenti sed. Mauris.
          </p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-6 rounded-lg">
            Mint Now
          </button>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <img
                key={index}
                src="/path/to/small-unicorn.png"
                alt={`Unicorn ${index + 1}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
