"use client";

import React from "react";
import { Pause } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16">
      {/* 50/50 Split Layout */}
      <div className="split-layout min-h-screen">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: "1.1",
              fontWeight: 600,
              letterSpacing: "-0.02em"
            }}
          >
           A Successive Generation of Light Because I exist
          </h1>

          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            ✨ We commit to positivity, empowerment, and change.
          </p>

          <div>
            <a href="#about" className="btn">
              About Us
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative min-h-[400px] md:min-h-screen">
          {/* Placeholder Image - Replace with actual image */}
          <div className="absolute inset-0 bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop"
              alt="Gen Z Network community"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video Pause Button */}
          <button
            className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Pause video"
          >
            <Pause className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
