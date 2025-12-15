"use client";

import React from "react";

const OrganizationMap = () => {
  const teamStructure = [
    "Executive Board",
    "Country Coordinator",
    "Director of Operations",
    "Legal Council",
    "Creative Team",
    "Talent/Skill Development Lead",
    "Mental Development Lead",
    "Volunteers"
  ];

  const regionalStructure = [
    "Country Coordinators",
    "State/Regional Leaders",
    "Campus Ambassadors",
    "Community Circle Heads"
  ];

  return (
    <section className="section section-gray">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Organisation Map
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our global structure connecting leaders across continents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Team Structure */}
          <div className="bg-white p-8 md:p-12 border-2 border-black">
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none">
                  <circle cx="35" cy="30" r="25" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <circle cx="65" cy="50" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <circle cx="30" cy="70" r="18" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <path d="M 35 55 L 65 50 M 35 55 L 30 70" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            <h3
              className="text-2xl mb-6 text-center"
              style={{ fontFamily: "var(--font-heading)", color: "#E74C3C" }}
            >
              Team Structure
            </h3>

            <ul className="space-y-4">
              {teamStructure.map((role, index) => (
                <li
                  key={index}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <span
                    className="text-lg"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                  >
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Structure */}
          <div className="bg-white p-8 md:p-12 border-2 border-black">
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <ellipse cx="50" cy="50" rx="40" ry="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2"/>
                  <path d="M 50 10 Q 65 50 50 90 Q 35 50 50 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <h3
              className="text-2xl mb-6 text-center"
              style={{ fontFamily: "var(--font-heading)", color: "#E74C3C" }}
            >
              Regional Structure
            </h3>

            <ul className="space-y-4">
              {regionalStructure.map((role, index) => (
                <li
                  key={index}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <span
                    className="text-lg"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                  >
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white border-2 border-red-500 rounded-full mb-4">
            <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
              <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="2"/>
              <line x1="2" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="2"/>
              <line x1="16" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our structure is designed to empower local leadership while maintaining global cohesion.
            Each role plays a vital part in building the successive generation of light.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganizationMap;
