"use client";

import React from "react";

const PriorityAreas = () => {
  const areas = [
    "Civic Engagement & Government",
    "Creativity & Free Expression",
    "Disability Rights",
    "Gender, Racial & Ethnic Justice",
    "Internet Freedom",
    "Sustainable Development",
    "Future of Work(ers)",
    "Climate Justice",
    "Technology & Society"
  ];

  return (
    <section className="section section-gray">
      <div className="container">
        <h2
          className="text-center mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Priority Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <a
              key={index}
              href="#"
              className="block p-6 bg-white hover:shadow-lg transition-shadow no-underline"
            >
              <h3
                className="text-lg"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                {area}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriorityAreas;
