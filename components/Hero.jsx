import React from "react";
import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src="/imggg.jpg"
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          {" "}
          Kailash Joshi
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Crafting seamless user experiences by building and connecting all layers
        <br />
        of a web application, from the user interface to the server and
        database. <br />
      </p>
      <div className="mt-8 space-x-4">
        <a href="mailto:joshikailash241@gmail.com">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Contact With Me
          </button>
        </a>
        <a href="cv.pdf" download>
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
