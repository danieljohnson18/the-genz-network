"use client";

import React from "react";

const ImpactStats = () => {
  const stats = [
    { number: "50,000+", label: "Active Members" },
    { number: "100+", label: "Cities Worldwide" },
    { number: "500+", label: "Mentors" },
    { number: "1,000+", label: "Events Held" }
  ];

  return (
    <section className="section bg-black text-white">
      <div className="container">
        <h2
          className="text-center mb-12 text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl md:text-5xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
