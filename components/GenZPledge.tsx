"use client";

import React from "react";

const GenZPledge = () => {
  const pledgeLines = [
    {
      verse: "We pledge as Gen Z, a generation bright,",
      continuation: "To stand for values that set things right."
    },
    {
      verse: "Empowered by unity, diversity we embrace,",
      continuation: "In every endeavor, we'll leave a positive trace."
    },
    {
      verse: "With resilience and courage, we'll pave the way,",
      continuation: "For a world where kindness holds sway."
    },
    {
      verse: "Innovation our guide, as we navigate,",
      continuation: "Challenges we'll conquer, never hesitate."
    },
    {
      verse: "Our voices united, amplifying each call,",
      continuation: "For justice, for change, we'll stand tall."
    },
    {
      verse: "Striving for progress, leaving none behind,",
      continuation: "A brighter future for all, in our hearts enshrined."
    },
    {
      verse: "Together we'll shine, a beacon so grand,",
      continuation: "A successive generation, hand in hand."
    },
    {
      verse: "For the Gen Z Network, we solemnly attest,",
      continuation: "To be the light, because we exist."
    }
  ];

  return (
    <section className="section bg-black text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-widest mb-4 text-gray-400">
              OUR
            </div>
            <h2
              className="mb-8 text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)"
              }}
            >
              PLEDGE
            </h2>
            <div className="w-full max-w-md mx-auto h-1 bg-red-500"></div>
          </div>

          {/* Pledge Content */}
          <div className="space-y-8 text-center">
            {pledgeLines.map((line, index) => (
              <div key={index} className="space-y-2">
                <p className="text-lg md:text-xl leading-relaxed">
                  {line.verse}
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  {line.continuation}
                </p>
                {index < pledgeLines.length - 1 && (
                  <div className="pt-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center mt-16">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-red-500 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-red-500 rounded-full"></div>
              </div>
              {/* Light rays */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-1 h-8 bg-red-500 -top-10"></div>
                <div className="absolute w-1 h-8 bg-red-500 -bottom-10"></div>
                <div className="absolute w-8 h-1 bg-red-500 -left-10"></div>
                <div className="absolute w-8 h-1 bg-red-500 -right-10"></div>
                <div className="absolute w-1 h-6 bg-red-500 rotate-45" style={{ top: '-8px', left: '-8px' }}></div>
                <div className="absolute w-1 h-6 bg-red-500 -rotate-45" style={{ top: '-8px', right: '-8px' }}></div>
                <div className="absolute w-1 h-6 bg-red-500 rotate-45" style={{ bottom: '-8px', right: '-8px' }}></div>
                <div className="absolute w-1 h-6 bg-red-500 -rotate-45" style={{ bottom: '-8px', left: '-8px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenZPledge;
